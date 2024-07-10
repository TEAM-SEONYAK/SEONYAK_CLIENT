import { CardArrowRightGrayIc, ClockIc } from '@assets/svgs';
import styled from '@emotion/styled';
import ProfileChip from './ProfileChip';

interface ProfileContainerPropType {
  name: string;
  userRole: 'SENIOR' | 'JUNIOR';
  type: 'waitingAppointments' | 'plannedAppointments' | 'lastAppointments' | 'default';
}

const ProfileContainer = (props: ProfileContainerPropType) => {
  const { name, userRole, type } = props;
  return (
    <Wrapper $type={type}>
      <TempImg />
      <InfoContainer>
        <Name>
          {name} {userRole === 'SENIOR' ? '선배' : '후배'}
        </Name>
        {userRole === 'JUNIOR' && (
          <ChipContainer>
            <ProfileChip type="company" content="비바리퍼블리카 (토스)" />
            <ProfileChip type="field" content="예체능계열" />
          </ChipContainer>
        )}
        {userRole === 'SENIOR' && type === 'waitingAppointments' && (
          <>
            <ChipContainer>
              <ProfileChip type="field" content="예체능 계열" />
              <ProfileChip type="field" content="시각디자인학과" />
            </ChipContainer>
            <Description>면접에 관해 얘기하고 싶어요</Description>
          </>
        )}
        {userRole === 'SENIOR' && type === 'default' && (
          <>
            <MajorDiv>
              <Major>예체능 계열</Major>
              <Divider />
              <Major>시각디자인과</Major>
            </MajorDiv>
            <Description>면접에 관해 얘기하고 싶어요</Description>
          </>
        )}
        {type === 'plannedAppointments' ||
          (type === 'lastAppointments' && (
            <TimeContainer>
              <ClockIc />
              <TimeSpan>7월 6일 20:30 - 21:00</TimeSpan>
            </TimeContainer>
          ))}
      </InfoContainer>
      <CardArrowRightGrayIcon />
    </Wrapper>
  );
};

export default ProfileContainer;

// 이미지카드
const Wrapper = styled.div<{ $type: string }>`
  display: flex;
  gap: 1.4rem;
  position: relative;

  width: 100%;
  margin-bottom: ${({ $type }) => ($type === 'default' ? '0' : '2rem')};

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};

  &:last-child {
    margin-bottom: 8.8rem;
  }
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
  top: 3rem;
  right: 0.7rem;
`;

const ChipContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  margin-bottom: 0.6rem;
`;

const TimeContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;

const TimeSpan = styled.span`
  color: ${({ theme }) => theme.colors.grayScaleMG2};
  ${({ theme }) => theme.fonts.Body1_M_14};
`;
