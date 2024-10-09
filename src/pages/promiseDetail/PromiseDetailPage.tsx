// 유저가 선배일경우
import { ArrowLeftIc, ButtonCheckIc, ArrowDownMgIc } from '@assets/svgs';
import { BottomSheet } from '@components/commons/BottomSheet';
import { FullBtn } from '@components/commons/FullButton';
import { Header } from '@components/commons/Header';
import { AutoCloseModal } from '@components/commons/modal/AutoCloseModal';
import Textarea from '@components/commons/Textarea';
import styled from '@emotion/styled';
import useCountdown from '@hooks/useCountDown';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { REJECT_REASON, DEFAULT_REJECT_TEXT } from './constants/constant';
import { formatDate } from './utils/formatDate';
import { useGetGoogleMeetLink } from '@pages/promiseList/hooks/queries';
import {
  usePostGoogleMeetLink,
  usePatchSeniorAccept,
  usePatchSeniorReject,
  useGetPromiseDetail,
} from './hooks/queries';
import { extractMonthAndDay } from '@pages/promiseList/utils/extractMonthAndDay';
import { ModalRejectImg, ModalAcceptImg } from '@assets/svgs';
import Loading from '@components/commons/Loading';

const PromiseDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { tap, myNickname, appointmentId } = location.state;
  const userRole = 'SENIOR';

  const { juniorInfo, seniorInfo, timeList1, timeList2, timeList3, topic, personalTopic, isSuccess, isLoading } =
    useGetPromiseDetail(appointmentId);

  // 기본뷰 / 거절뷰
  const [viewType, setViewType] = useState('DEFAULT');
  // 수락시 선택한 시간 저장
  const [selectTime, setSelectTime] = useState<number | null>(null);
  // 수락하기 모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 거절하기 모달
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  // 거절 사유 토글에서 저장
  const [rejectReason, setRejectReason] = useState(DEFAULT_REJECT_TEXT);
  // 작성한 거절사유 저장
  const [rejectDetail, setRejectDetail] = useState('');
  // 서버 전달용 날짜, 시작시간, 끝시간 저장 state
  const [serverTimeList, setServerTimeList] = useState({ date: '', startTime: '', endTime: '' });
  // 받아온 구글밋 링크 저장
  const [, setGoogleMeet] = useState('');

  const handleModalOpen = (type: boolean) => {
    setIsModalOpen(type);
  };

  // 선배 약속 수락
  const { mutate: patchSeniorAccept } = usePatchSeniorAccept(() => handleModalOpen(true));

  // 구글밋 링크 patch 콜백 함수
  const handleSuccessCallback = (link: string) => {
    setGoogleMeet(link);
    patchSeniorAccept({
      appointmentId: appointmentId,
      googleMeetLink: link,
      timeList: [
        {
          date: serverTimeList.date,
          startTime: serverTimeList.startTime,
          endTime: serverTimeList.endTime,
        },
      ],
    });
  };

  // 구글밋 링크 받아오기(post) 후 약속 수락 patch
  const { mutate: postGoogleMeetLink } = usePostGoogleMeetLink((link) => {
    handleSuccessCallback(link);
  });

  // 수락하기 버튼 누를 때
  const handleAppointmentApprove = () => {
    postGoogleMeetLink();
  };

  // 선택값 저장 함수
  const handleClickTimeBox = (idx: number, date: string, startTime: string, endTime: string) => {
    setSelectTime(idx);
    setServerTimeList((prev) => ({
      ...prev,
      date: date,
      startTime: startTime,
      endTime: endTime,
    }));
  };

  // 선배 약속 거절
  const { mutate: patchSeniorReject } = usePatchSeniorReject(() => handleModalOpen(true));
  const handleRejectBtn = () => {
    patchSeniorReject({
      appointmentId: appointmentId,
      rejectReason: rejectReason,
      rejectDetail: rejectDetail,
    });
  };

  // 구글밋 링크 받기
  const [isEnterBtnClicked, setIsEnterBtnClicked] = useState(false);
  const [, setGoogleMeetLink] = useState('');

  const handleClickEnterBtn = (link: string) => {
    setGoogleMeetLink(link);
    window.open(link, '_blank');
  };

  useGetGoogleMeetLink(appointmentId, isEnterBtnClicked, handleClickEnterBtn);

  const handleBottomSheetOpen = () => {
    setIsBottomSheetOpen(true);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  const handleClickDeclineBtn = () => {
    setViewType('DECLINE');
  };

  const handleRejectReason = (reason: string) => {
    setRejectReason(reason);
  };

  const handleRejectDetailReason = (detailReason: string) => {
    setRejectDetail(detailReason);
  };
  // 훅을 조건문 밖에서 호출
  const countdown = useCountdown(timeList1?.date, timeList1?.startTime);
  const dateInfo = extractMonthAndDay(timeList1?.date + '');

  if (isLoading) {
    return <Loading />; // 로딩 중일 때 표시
  }

  if (!isSuccess || !timeList1) {
    return <div>데이터 없음</div>; // 데이터가 없을 때 표시
  }

  // 조건부로 훅의 결과를 처리
  const { diffText, diff } = countdown;
  const { month, day } = dateInfo;

  // 뒤로가기 버튼
  const handleBackBtn = () => {
    if (viewType === 'DEFAULT') {
      navigate(`/promiseList`, {
        state: {
          prevTap: tap,
        },
      });
    } else {
      setViewType('DEFAULT');
    }
  };

  return (
    <>
      <Header
        LeftSvg={ArrowLeftIc}
        onClickLeft={handleBackBtn}
        title={viewType === 'DEFAULT' ? '자세히 보기' : '거절하기'}
      />
      <hr />
      <Wrapper>
        <Layout $viewType={viewType}>
          <TitleContainer>
            <Title>
              {viewType === 'DEFAULT'
                ? userRole === 'SENIOR'
                  ? `${juniorInfo.nickname} 후배님의 정보`
                  : `${seniorInfo.nickname} 선배님의 정보`
                : DEFAULT_REJECT_TEXT}
            </Title>
            {viewType === 'DEFAULT' ? (
              <Content>
                {juniorInfo.univName} {juniorInfo.field} {juniorInfo.department}
              </Content>
            ) : (
              <DeclineContent onClick={() => setIsBottomSheetOpen(true)}>
                {!isBottomSheetOpen && rejectReason}
                <ArrowDownMgIcon />
              </DeclineContent>
            )}
          </TitleContainer>

          <TitleContainer>
            <Title>
              {viewType === 'DEFAULT' ? `${myNickname} 선배님과 상담하고 싶은 내용` : '더 자세한 이유가 있나요?'}
            </Title>
            {viewType === 'DEFAULT' ? (
              <ContentContainer>
                {topic && topic.length ? (
                  topic.map((el: string, idx: number) => <Content key={idx + el}>{el}</Content>)
                ) : (
                  <WrittenContent>{personalTopic}</WrittenContent>
                )}
              </ContentContainer>
            ) : (
              <>
                <Textarea
                  placeholder="선약을 거절하는 자세한 이유에 대해 작성해주세요 (선택)"
                  wordLimit={200}
                  height={27.4}
                  inputVal={rejectDetail}
                  handleInputVal={handleRejectDetailReason}
                />
                <DeclineText>
                  이 단계 이후로 거절을 취소할 수 없어요 <br />
                  신중하게 선택해주세요!
                </DeclineText>
              </>
            )}
          </TitleContainer>

          {viewType === 'DEFAULT' && tap === 'pending' && (
            <TimeContainer>
              <Title>희망하는 약속 시간</Title>
              <Description>세 가지 시간 중 하나를 필수로 선택해주세요</Description>
              <ContentContainer>
                {[timeList1, timeList2, timeList3].map((el, idx) => (
                  <Time
                    key={el.date + idx + el.startTime}
                    onClick={() => handleClickTimeBox(idx, el.date, el.startTime, el.endTime)}
                    $isActive={selectTime === idx}>
                    {formatDate(el.date)} {el.startTime} - {el.endTime}
                    <ButtonCheckIcon isactive={(selectTime === idx).toString()} />
                  </Time>
                ))}
              </ContentContainer>
            </TimeContainer>
          )}
          {viewType === 'DEFAULT' && tap === 'scheduled' && (
            <ContentContainer>
              <Title>약속 시간</Title>
              <Content>
                {month}월 {day}일 {timeList1.startTime} - {timeList1.endTime}
              </Content>
            </ContentContainer>
          )}
        </Layout>
        {viewType === 'DEFAULT' ? (
          tap === 'pending' ? (
            <>
              <BtnWrapper>
                <DeclineBtn type="button" onClick={handleClickDeclineBtn}>
                  거절하기
                </DeclineBtn>
                <AcceptBtn
                  type="button"
                  disabled={selectTime === null}
                  $isActive={selectTime !== null}
                  onClick={handleAppointmentApprove}>
                  수락하기
                </AcceptBtn>
              </BtnWrapper>
              <BtnBackground />
            </>
          ) : (
            <>
              <BtnWrapper>
                {/* 구글밋 입장 연결 필요 */}
                <FullBtn
                  onClick={() => {
                    setIsEnterBtnClicked(true);
                  }}
                  marginLeft={-2}
                  text={
                    diff === undefined
                      ? `약속시간까지 - 남았어요`
                      : diff <= 0
                        ? '지금 입장하기'
                        : `약속시간까지 ${diffText} 남았어요`
                  }
                  isActive={diff !== undefined && diff <= 0}
                />
              </BtnWrapper>
            </>
          )
        ) : (
          <>
            <FullBtn
              text="거절하기"
              isActive={rejectReason !== DEFAULT_REJECT_TEXT}
              onClick={() => handleRejectBtn()}
            />
            <BtnBackground />
          </>
        )}
      </Wrapper>

      {viewType === 'DECLINE' ? (
        <AutoCloseModal
          text="선약이 거절되었어요"
          showModal={isModalOpen}
          handleShowModal={handleModalOpen}
          path="/promiseList">
          <ModalRejectImg />
        </AutoCloseModal>
      ) : (
        <AutoCloseModal
          text="선약이 수락되었어요"
          showModal={isModalOpen}
          handleShowModal={handleModalOpen}
          path="/promiseList">
          <ModalAcceptImg />
        </AutoCloseModal>
      )}

      <BottomSheet
        btnActive={rejectReason}
        isSheetOpen={isBottomSheetOpen}
        handleSheetOpen={handleBottomSheetOpen}
        handleSheetClose={handleBottomSheetClose}>
        <BottomSheetLayout>
          <BottomSheetTitle>거절 사유 선택</BottomSheetTitle>
          <DeclineReasonWrapper>
            {REJECT_REASON.map((el) => (
              <DeclineReason
                key={el.id}
                onClick={() => handleRejectReason(el.content)}
                $isActive={rejectReason === el.content}>
                {el.content}
              </DeclineReason>
            ))}
          </DeclineReasonWrapper>
        </BottomSheetLayout>
      </BottomSheet>
    </>
  );
};

export default PromiseDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100%;
  margin-top: 4.4rem;
  padding: 3rem 1.765rem 0 2.035rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grayScaleLG2};

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const Layout = styled.div<{ $viewType: string }>`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: ${({ $viewType }) => ($viewType === 'DEFAULT' ? '11.6rem' : '0')};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 3rem;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Content = styled.div`
  width: 100%;
  padding: 1.1rem 0 1.1rem 1.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Body1_M_14}
`;

const DeclineContent = styled.div`
  position: relative;

  width: 100%;
  height: 4.4rem;
  padding: 1.1rem 0 1.1rem 1.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleMG2};

  ${({ theme }) => theme.fonts.Body1_M_14}
  cursor: pointer;
`;

const ArrowDownMgIcon = styled(ArrowDownMgIc)`
  position: absolute;
  top: 0.5rem;
  right: 0;
`;

const Time = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 1.1rem 1.5rem;
  border: ${({ $isActive, theme }) => `1px solid ${$isActive ? theme.colors.transparentBlue_50 : 'transparent'}`};
  border-radius: 8px;

  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.transparentBlue_5 : theme.colors.grayScaleLG1};

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.Blue : theme.colors.grayScaleBG)};

  ${({ theme }) => theme.fonts.Body1_M_14};
  cursor: pointer;
`;

const ButtonCheckIcon = styled(ButtonCheckIc)<{ isactive: string }>`
  display: ${({ isactive }) => (isactive === 'true' ? 'flex' : 'none')};
`;

const WrittenContent = styled.div`
  padding: 1rem 1.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeclineText = styled.p`
  width: 100%;
  height: 4.4rem;

  color: ${({ theme }) => theme.colors.grayScaleDG};
  white-space: pre-wrap;
  ${({ theme }) => theme.fonts.Body1_M_14}
`;

const Description = styled.span`
  margin: 0.4rem 0 1rem;

  color: ${({ theme }) => theme.colors.grayScaleMG2};
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  z-index: 2;

  width: 100%;
  margin-bottom: 3.977rem;
  padding: 0 2.035rem 0 1.965rem;
`;

const DeclineBtn = styled.button`
  z-index: 2;

  width: 30%;
  height: 5.6rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.grayScaleBG};

  color: ${({ theme }) => theme.colors.grayScaleWhite};

  ${({ theme }) => theme.fonts.Head2_SB_18}
  cursor: pointer;
`;

const AcceptBtn = styled.button<{ $isActive: boolean }>`
  z-index: 2;

  width: 70%;
  height: 5.6rem;
  border-radius: 5px;

  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.Blue : theme.colors.grayScaleMG2)};

  color: ${({ theme }) => theme.colors.grayScaleWhite};

  cursor: ${({ $isActive }) => ($isActive ? 'pointer' : 'default')};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

const BtnBackground = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;

  width: 100%;
  height: 6.1rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const BottomSheetLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-bottom: 2.5rem;
`;

const BottomSheetTitle = styled.h1`
  ${({ theme }) => theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const DeclineReasonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeclineReason = styled.div<{ $isActive: boolean }>`
  padding: 1rem 0;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};

  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.Blue : theme.colors.grayScaleDG)};

  ${({ theme }) => theme.fonts.Title2_M_16};
  cursor: pointer;
`;
