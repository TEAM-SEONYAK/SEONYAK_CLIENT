import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import ProfileChip from './ProfileChip';
import ProfileContainer from './ProfileContainer';
import PromiseTimerBtn from './PromiseTimerBtn';
import { calculateTimeLeft } from '../utils/calculateTimeLeft';

interface RecentCardPropType {
  userRole: string;
}

const RecentCard = (props: RecentCardPropType) => {
  const { userRole } = props;
  // 약속 개수 임시 데이터
  const name = '도리야끼다요';
  const length = 2;
  const dummyDate = '2024.07.14';
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
    <Wrapper $userRole={userRole}>
      <RecentNav>
        <RecentDayWrapper>
          <ProfileChip type="promiseNum" content={length ? '가장 가까운 약속' : '약속 없음'} />
          <ProfileChip type="dDay" content={dDayDiff === 0 ? 'D-DAY' : ` D-${dDayDiff}`} />
        </RecentDayWrapper>
        <ProfileChip type="userGuide" content="선약 이용방법 보기" />
      </RecentNav>
      <DashedDivider />
      <ProfileContainer name={name} userRole={userRole} type="default" />
      <PromiseTimerBtn isActive={diff <= 0} diff={diffText} />
    </Wrapper>
  );
};

export default RecentCard;

const Wrapper = styled.section<{ $userRole: string }>`
  position: relative;

  width: 100%;
  margin-bottom: ${({ $userRole }) => ($userRole === 'SENIOR' ? '2.4rem' : '1.5rem')};
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

const DashedDivider = styled.div`
  width: 100%;
  height: 0.1rem;
  margin-bottom: 1.39rem;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.grayScaleLG1};
`;
