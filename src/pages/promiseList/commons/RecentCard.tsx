import { CardArrowRightGrayIc } from '@assets/svgs';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import ProfileChip from './ProfileChip';
import PromiseTimerBtn from './PromiseTimerBtn';
import { calculateTimeLeft } from '../utils/calculateTimeLeft';

const RecentCard = () => {
  // 약속 개수 임시 데이터
  const name = '도리야끼다요';
  const userRole = 'JUNIOR';
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
      <ProfileContainer>
        <TempImg />
        <InfoContainer>
          <Name>
            {name} {userRole === 'SENIOR' ? '선배' : '후배'}
          </Name>
          {userRole === 'JUNIOR' && (
            <CompanyContainer>
              <ProfileChip type="company" content="비바리퍼블리카 (토스)" />
              <ProfileChip type="field" content="예체능계열" />
            </CompanyContainer>
          )}
          <MajorDiv>
            <Major>디자이너</Major>
            <Divider />
            <Major>프로덕트그래픽 디자이너</Major>
          </MajorDiv>
          <Description>주니어 (1년차)</Description>
        </InfoContainer>
        <CardArrowRightGrayIcon />
      </ProfileContainer>
      <PromiseTimerBtn isActive={diff <= 0} diff={diffText} />
    </Wrapper>
  );
};

export default RecentCard;

const Wrapper = styled.section<{ $userRole: string }>`
  position: relative;

  width: 33.6rem;
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

const CompanyContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  margin-bottom: 0.6rem;
`;
