import { CardArrowRightGrayIc, ClockIc } from '@assets/svgs';
import styled from '@emotion/styled';
import ProfileChip from './ProfileChip';

interface ProfileContainerPropType {
  name: string;
  userRole: string;
  type: 'waitingAppointments' | 'plannedAppointments' | 'lastAppointments' | 'default';
}

const ProfileContainer = (props: ProfileContainerPropType) => {
  const { name, userRole, type } = props;

  return (
    <ReviewWrapper $type={type}>
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
          {userRole === 'JUNIOR' && (
            <>
              <MajorDiv>
                <Major>디자인</Major>
                <Divider />
                <Major>프로덕트그래픽 디자이너</Major>
              </MajorDiv>
              <Description>주니어 (1년 차)</Description>
            </>
          )}
          {(type === 'plannedAppointments' || type === 'lastAppointments') && (
            <TimeContainer>
              <ClockIc />
              <TimeSpan>7월 6일 20:30 - 21:00</TimeSpan>
            </TimeContainer>
          )}
        </InfoContainer>
        <CardArrowRightGrayIcon />
      </Wrapper>
      {userRole === 'JUNIOR' && type === 'lastAppointments' && <ReviewBtn>리뷰 작성하기</ReviewBtn>}
    </ReviewWrapper>
  );
};

export default ProfileContainer;

const ReviewWrapper = styled.div<{ $type: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: ${({ $type, theme }) => ($type === 'default' ? 'none' : `1px solid ${theme.colors.grayScaleLG2}`)};

  &:last-child {
    margin-bottom: ${({ $type }) => ($type === 'default' ? 0 : '8.8rem')};
    border-bottom: none;
  }
`;

// 이미지카드
const Wrapper = styled.div<{ $type: string }>`
  display: flex;
  gap: 1.4rem;
  position: relative;

  width: 100%;
  padding: ${({ $type }) => ($type === 'default' ? '0' : '2rem 0')};
  border-bottom: ${({ $type, theme }) =>
    $type === 'default' || $type === 'lastAppointments' ? 'none' : `1px solid ${theme.colors.grayScaleLG2}`};

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};

  &:last-child {
    margin-bottom: ${({ $type }) => ($type === 'default' ? 0 : '8.8rem')};
    border-bottom: none;
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
  top: 45%;
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

const ReviewBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 2rem;
  padding: 0.8rem 0;
  border: 1px solid ${({ theme }) => theme.colors.grayScaleLG2};
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.grayScaleMG2};

  ${({ theme }) => theme.fonts.Body3_SB_14};
  cursor: pointer;
`;
