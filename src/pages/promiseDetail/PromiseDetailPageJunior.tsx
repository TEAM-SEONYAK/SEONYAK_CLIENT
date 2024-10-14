// 유저가 후배일경우
import { ArrowLeftIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import { Header } from '@components/commons/Header';
import styled from '@emotion/styled';
import ProfileContainer from '@pages/promiseList/components/ProfileContainer';
import PromiseTimerBtn from '@pages/promiseList/components/PromiseTimerBtn';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetPromiseDetail } from './hooks/queries';
import useCountdown from '@hooks/useCountDown';
import { useState } from 'react';
import PreView from '@pages/seniorProfile/components/preView';
import Loading from '@components/commons/Loading';
import { useGetGoogleMeetLink } from '@pages/promiseList/hooks/queries';
import ErrorPage from '@pages/errorPage/ErrorPage';

const PromiseDetailPageJunior = () => {
  // 라우터 이동할 때 location으로 약속id, 눌린 탭 상태값(pending, sheduled, ..) 받아와야함
  const navigate = useNavigate();
  const location = useLocation();
  const { tap, myNickname, appointmentId, seniorId } = location.state;

  const [isDetailClicked, setIsDetailClicked] = useState(false);
  const [isEnterBtnClicked, setIsEnterBtnClicked] = useState(false);

  const handleClickEnterBtn = (link: string) => {
    window.open(link, '_blank');
    setIsEnterBtnClicked(false);
    navigate('/juniorPromise');
  };

  useGetGoogleMeetLink(appointmentId, isEnterBtnClicked, handleClickEnterBtn);

  const handleSetIsDetailClicked = (type: boolean) => {
    setIsDetailClicked(type);
  };

  const { juniorInfo, seniorInfo, timeList1, topic, personalTopic, isSuccess, isLoading } =
    useGetPromiseDetail(appointmentId);

  const countdown = useCountdown(timeList1?.date, timeList1?.startTime);

  const { diffText, diff } = countdown;

  if (isLoading) {
    return <Loading />; // 로딩 중일 때 표시
  }

  if (!isSuccess || !timeList1) {
    return <ErrorPage />;
  }

  const handleClickBackArrow = () => {
    setIsDetailClicked(false);
  };

  return (
    <>
      {isDetailClicked ? (
        <>
          <Header LeftSvg={ArrowLeftIc} onClickLeft={handleClickBackArrow} />
          <Divider />
          <DetailWrapper>
            <PreView variant="secondary" seniorId={seniorId} />
          </DetailWrapper>
        </>
      ) : (
        <>
          <Header LeftSvg={ArrowLeftIc} title="내가 보낸 약속" onClickLeft={() => navigate('/promiseList')} />
          <Divider />
          <Wrapper>
            <Layout>
              <TitleContainer>
                <Title>{seniorInfo.nickname} 선배님의 프로필</Title>
                <PromiseDiv>
                  <ProfileContainer
                    myNickname={myNickname}
                    userRole="JUNIOR"
                    tap="default"
                    profileCardData={seniorInfo}
                    isarrow="false"
                    detail="detail"
                    handleSetIsDetailClicked={handleSetIsDetailClicked}
                  />
                </PromiseDiv>
              </TitleContainer>

              <TitleContainer>
                <Title>나의 정보</Title>
                <Content>
                  {juniorInfo.univName} {juniorInfo.field} {juniorInfo.department}
                </Content>
              </TitleContainer>

              <TitleContainer>
                <Title>{seniorInfo.nickname} 선배님과 상담하고 싶은 내용</Title>
                {topic && topic.length ? (
                  topic.map((el: string, idx: number) => <Content key={idx + el}>{el}</Content>)
                ) : (
                  <WrittenContent>{personalTopic}</WrittenContent>
                )}
              </TitleContainer>
            </Layout>
            <BtnWrapper>
              {tap === 'pending' ? (
                <FullBtn text="이미 신청한 선약은 취소할 수 없어요" isActive={false} marginLeft={-2} />
              ) : (
                <PromiseTimerBtn
                  isActive={diff !== undefined && diff <= 0}
                  diff={diff === undefined ? '-' : diffText}
                  page="detail"
                  onClick={() => setIsEnterBtnClicked(true)}
                />
              )}
            </BtnWrapper>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default PromiseDetailPageJunior;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100%;
  margin-top: 5.2rem;
  padding: 3rem 1.974rem 0 2.026rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

// 임시 Preview 부분 padding 수정되면 적용필
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 3.2rem;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 100%;
  margin-bottom: 11.6rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const PromiseDiv = styled.div`
  width: 100%;
  padding: 1rem 0 1rem 1.209rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScaleLG1};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const Content = styled.div`
  width: 100%;
  padding: 1.1rem 0 1.1rem 1.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Body1_M_14}
`;

const WrittenContent = styled.div`
  padding: 1rem 1.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Body1_M_14};
  white-space: pre-line;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
  position: fixed;
  bottom: 0;
  z-index: 3;

  width: 100%;
  margin-bottom: 3.977rem;
  padding: 0 2.035rem 0 1.965rem;
`;

const Divider = styled.div`
  position: fixed;
  top: 5rem;

  width: 100vw;
  border: 1.4px solid ${({ theme }) => theme.colors.grayScaleLG2};
`;
