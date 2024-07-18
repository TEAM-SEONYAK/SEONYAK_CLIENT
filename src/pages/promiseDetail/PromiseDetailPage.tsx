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
import { SENIOR_RESPONSE, REJECT_REASON, DEFAULT_REJECT_TEXT } from './constants/constant';
import { formatDate } from './utils/formatDate';
import { usePatchSeniorReject } from './hooks/queries';
import { useGetGoogleMeetLink } from '@pages/promiseList/hooks/queries';
import { usePostGoogleMeetLink, usePatchSeniorAccept } from './hooks/queries';

const PromiseDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tap = location.state.tap;
  const myNickname = location.state.myNickname;
  const userRole = 'SENIOR';

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
      appointmentId: 69,
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
      appointmentId: 73,
      rejectReason: rejectReason,
      rejectDetail: rejectDetail,
    });
  };

  // 구글밋 링크 받기
  const [isEnterBtnClicked, setIsEnterBtnClicked] = useState(false);
  const [googleMeetLink, setGoogleMeetLink] = useState('');

  const handleClickEnterBtn = (link: string) => {
    setGoogleMeetLink(link);
    window.open(link, '_blank');
  };

  // appointmentId로 바꿔야 함 !!
  useGetGoogleMeetLink(68, isEnterBtnClicked, handleClickEnterBtn);

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

  // 실 데이터로연결 필요
  const { diffText, diff } = useCountdown(SENIOR_RESPONSE.timeList[0]?.date, SENIOR_RESPONSE.timeList[0]?.startTime);

  return (
    <>
      <Header
        LeftSvg={ArrowLeftIc}
        onClickLeft={() => navigate('/')}
        title={viewType === 'DEFAULT' ? '자세히 보기' : '거절하기'}
      />
      <hr />
      <Wrapper>
        <Layout $viewType={viewType}>
          <TitleContainer>
            <Title>
              {viewType === 'DEFAULT'
                ? userRole === 'SENIOR'
                  ? `${SENIOR_RESPONSE.juniorInfo.nickname} 후배님의 정보`
                  : `${SENIOR_RESPONSE.juniorInfo.nickname} 선배님의 정보`
                : DEFAULT_REJECT_TEXT}
            </Title>
            {viewType === 'DEFAULT' ? (
              <Content>
                {SENIOR_RESPONSE.juniorInfo.univName} {SENIOR_RESPONSE.juniorInfo.field}
                {SENIOR_RESPONSE.juniorInfo.department}
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
                {SENIOR_RESPONSE.topic.length ? (
                  SENIOR_RESPONSE.topic.map((el, idx) => <Content key={idx + el}>{el}</Content>)
                ) : (
                  <WrittenContent>{SENIOR_RESPONSE.personalTopic}</WrittenContent>
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
                {SENIOR_RESPONSE.timeList.map((el, idx) => (
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
              {/* 여기 응답값으로 바꾸기 */}
              <Content>2024년 7월 7일 20:30 - 21:00</Content>
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
                  text={diff <= 0 ? '지금 입장하기' : `약속 시간까지 ${diffText} 남았어요`}
                  isActive={diff <= 0}
                />
              </BtnWrapper>
              <BtnBackground />
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
        <AutoCloseModal text="선약이 거절되었어요" showModal={isModalOpen} handleShowModal={handleModalOpen} path="/">
          <DeclineImg />
        </AutoCloseModal>
      ) : (
        <AutoCloseModal text="선약이 수락되었어요" showModal={isModalOpen} handleShowModal={handleModalOpen} path="/">
          <DeclineImg />
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
  padding: 1.1rem 0 1.1rem 1.5rem;
  height: 4.4rem;
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
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 1.1rem 1.5rem;
  border-radius: 8px;

  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.transparentBlue_5 : theme.colors.grayScaleLG1};

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.Blue : theme.colors.grayScaleBG)};

  ${({ theme }) => theme.fonts.Body1_M_14};
  cursor: pointer;

  border: ${({ $isActive, theme }) =>
    $isActive ? `1px solid ${theme.colors.transparentBlue_50}` : '1px solid transparent'};
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

  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.grayScaleDG};
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
  position: fixed;
  bottom: 0;
  z-index: 2;

  width: 100%;
  margin-bottom: 3.977rem;
  padding: 0 2.035rem 0 1.965rem;
`;

const DeclineBtn = styled.button`
  z-index: 2;

  border-radius: 5px;
  width: 10.6rem;
  height: 5.6rem;

  background-color: ${({ theme }) => theme.colors.grayScaleBG};

  color: ${({ theme }) => theme.colors.grayScaleWhite};

  ${({ theme }) => theme.fonts.Head2_SB_18}
  cursor: pointer;
`;

const AcceptBtn = styled.button<{ $isActive: boolean }>`
  z-index: 2;

  border-radius: 5px;
  width: 21.9rem;
  height: 5.6rem;

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

const DeclineImg = styled.div`
  width: 27rem;
  height: 17.1rem;

  background-color: ${({ theme }) => theme.colors.grayScaleMG2};
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
`;
