import { CardArrowRightGrayIc } from '@assets/svgs';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import PromiseTimerBtn from './PromiseTimerBtn';
import { calculateTimeLeft } from '../utils/calculateTimeLeft';

const RecentCard = () => {
  // 약속 개수 임시 데이터
  const length = 0;
  const dummyDate = '2024.07.10';
  const startTime = '14:42';

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(dummyDate, startTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(dummyDate, startTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [dummyDate, startTime]);

  const { diffText, diff, dDayDiff } = timeLeft;

  return (
    <Wrapper>
      <RecentNav>
        <RecentDayWrapper>
          <RecentChip>{length ? '가장 가까운 약속' : '약속 없음'}</RecentChip>
          <DdayCountChip>{dDayDiff === 0 ? 'D-DAY' : ` D-${dDayDiff}`}</DdayCountChip>
        </RecentDayWrapper>
        <UserGuideBtn type="button">선약 이용방법 보기</UserGuideBtn>
      </RecentNav>
      <DashedDivider />
      <ProfileContainer>
        <TempImg />
        <InfoContainer>
          <Name>도리야끼다요 선배</Name>
          <MajorDiv>
            <Major>예체능계열</Major>
            <Divider />
            <Major>시각디자인과</Major>
          </MajorDiv>
          <Description>면접에 관해 얘기하고 싶어요</Description>
        </InfoContainer>
        <CardArrowRightGrayIcon />
      </ProfileContainer>
      <PromiseTimerBtn isActive={diff <= 0} diff={diffText} />
    </Wrapper>
  );
};

export default RecentCard;

const Wrapper = styled.section`
  position: relative;

  width: 33.6rem;
  padding: 1rem 1.1rem 1rem 1rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const RecentNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.3rem;
`;

const RecentDayWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: flex-start;
  align-items: center;
`;

const RecentChip = styled.div`
  padding: 0.4rem 0.6rem;
  border-radius: 6px;

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  background-color: ${({ theme }) => theme.colors.grayScaleBG};

  color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const DdayCountChip = styled.div`
  height: 2.5rem;
  padding: 0.4rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.transparentRed_40};
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.transparentRed_15};

  color: ${({ theme }) => theme.colors.Red};
  ${({ theme }) => theme.fonts.Caption2_SB_12};
`;

const UserGuideBtn = styled.button`
  height: 2.5rem;
  padding: 0.4rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScaleLG2};
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.grayScaleMG1};

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  cursor: pointer;
`;

const DashedDivider = styled.div`
  width: 100%;
  height: 0.1rem;
  margin-bottom: 1.39rem;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.grayScaleLG1};
`;

// 이미지카드
const ProfileContainer = styled.div`
  display: flex;
  gap: 1.4rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const TempImg = styled.div`
  width: 8.6rem;
  height: 8.6rem;
  border-radius: 100px;

  background-color: ${({ theme }) => theme.colors.primaryBlue50};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Name = styled.span`
  margin-bottom: 0.8rem;

  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const MajorDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Major = styled.span`
  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;

const Divider = styled.div`
  width: 0.15rem;
  height: 1.4rem;
  margin: 0 0.6rem;

  background-color: ${({ theme }) => theme.colors.grayScaleLG2};
`;

const Description = styled.div`
  overflow: hidden;

  width: 19rem;
  height: 2.2rem;

  color: ${({ theme }) => theme.colors.grayScaleDG};
  ${({ theme }) => theme.fonts.Body1_M_14};
  white-space: nowrap;

  text-overflow: ellipsis;
`;

const CardArrowRightGrayIcon = styled(CardArrowRightGrayIc)`
  position: absolute;
  top: 9.3rem;
  right: 0.7rem;
`;
