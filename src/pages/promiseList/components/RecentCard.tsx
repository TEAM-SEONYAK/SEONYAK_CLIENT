import { EmptyImg } from '@assets/svgs';
import styled from '@emotion/styled';
import useCountdown from '@hooks/useCountDown';
import ProfileChip from './ProfileChip';
import ProfileContainer from './ProfileContainer';
import PromiseTimerBtn from './PromiseTimerBtn';
import { profileCardDataType } from '../types/type';
import { useGetGoogleMeetLink } from '../hooks/queries';
import { useState } from 'react';

interface RecentCardPropType {
  userRole: string;
  recentAppointment?: profileCardDataType;
  appointmentNum: number;
  nickname: string;
}

const RecentCard = (props: RecentCardPropType) => {
  const { userRole, recentAppointment, appointmentNum, nickname } = props;
  const { diffText, diff, dDayDiff } = useCountdown(recentAppointment?.date, recentAppointment?.startTime);
  const [isEnterBtnClicked, setIsEnterBtnClicked] = useState(false);
  const [, setGoogleMeetLink] = useState('');

  const handleClickEnterBtn = (link: string) => {
    setGoogleMeetLink(link);
    window.open(link, '_blank');
  };

  useGetGoogleMeetLink(recentAppointment?.appointmentId, isEnterBtnClicked, handleClickEnterBtn);

  const handleClickUserGuide = () => {
    userRole === 'SENIOR'
      ? window.open('https://cumbersome-cactus-843.notion.site/c5f4f494d3ee41c6836a9f4828a7bde6?pvs=4', '_blank')
      : window.open('https://cumbersome-cactus-843.notion.site/d394be50d2b44a03878debd0e19bdb2f?pvs=4', '_blank');
  };

  return (
    <Wrapper $userRole={userRole}>
      <RecentNav>
        <RecentDayWrapper>
          <ProfileChip type="promiseNum" content={appointmentNum ? '가장 가까운 약속' : '약속 없음'} />
          {appointmentNum !== 0 && <ProfileChip type="dDay" content={dDayDiff === 0 ? 'D-DAY' : ` D-${dDayDiff}`} />}
        </RecentDayWrapper>
        <ProfileChip type="userGuide" content="선약 이용방법 보기" onClick={handleClickUserGuide} />
      </RecentNav>
      <DashedDivider />
      {appointmentNum ? (
        <>
          <ProfileContainer
            userRole={userRole}
            tap="default"
            profileCardData={recentAppointment}
            isarrow="true"
            myNickname={nickname}
          />
          <PromiseTimerBtn
            isActive={diff !== undefined && diff <= 0}
            diff={diffText}
            page="recent"
            onClick={() => setIsEnterBtnClicked(true)}
          />
        </>
      ) : (
        <EmptyImg />
      )}
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
