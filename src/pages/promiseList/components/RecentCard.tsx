import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import ProfileChip from './ProfileChip';
import ProfileContainer from './ProfileContainer';
import PromiseTimerBtn from './PromiseTimerBtn';
import { SENIOR_DATA_SCHEDULED } from '../constants/constants';
import { calculateTimeLeft } from '../utils/calculateTimeLeft';

interface RecentCardPropType {
  userRole: string;
  recentAppointment: SENIOR_DATA_SCHEDULED;
  appointmentNum: number;
}

const RecentCard = (props: RecentCardPropType) => {
  const { userRole, recentAppointment, appointmentNum } = props;

  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(recentAppointment.date, recentAppointment.startTime),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(recentAppointment.date, recentAppointment.startTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [recentAppointment.date, recentAppointment.startTime]);

  const { diffText, diff, dDayDiff } = timeLeft;

  return (
    <Wrapper $userRole={userRole}>
      <RecentNav>
        <RecentDayWrapper>
          <ProfileChip type="promiseNum" content={appointmentNum ? '가장 가까운 약속' : '약속 없음'} />
          <ProfileChip type="dDay" content={dDayDiff === 0 ? 'D-DAY' : ` D-${dDayDiff}`} />
        </RecentDayWrapper>
        <ProfileChip type="userGuide" content="선약 이용방법 보기" />
      </RecentNav>
      <DashedDivider />
      <ProfileContainer userRole={userRole} type="default" profileCardData={recentAppointment} />
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
