import { CardArrowRightGrayIc, ClockIc } from '@assets/svgs';
import styled from '@emotion/styled';
import ProfileChip from './ProfileChip';
import { profileCardDataType } from '../constants/constants';

// interface ProfileContainerPropType {
//   userRole: string; // 유저 선후배 여부
//   nickname: string; // 선후배 닉네임
//   field: string; // 선후배 계열
//   department: string; // 후배 학과
//   topic: string; // 후배 상담 토픽
//   company: string; // 선배 회사
//   detailPosition: string; // 선배 직업
//   level: string; // 선배 연차 -> 숫자에 따라 텍스트로 변경 필요
//   date: string; // 약속 날짜 -> 월, 일만 빼서 써야함
//   startTime: string; // 시작 시간
//   endTime: string; // 끝 시간
//   type: 'waitingAppointments' | 'plannedAppointments' | 'lastAppointments' | 'rejected' | 'default';
// }

// interface ProfileContainerPropType {
//   userRole: string; // 유저 선후배 여부
//   seniorWaiting?: SENIOR_DATA_PENDING;
//   seniorPlanned?: SENIOR_DATA_SCHEDULED;
//   seniorLast?: SENIOR_DATA_PAST;
//   type: 'waitingAppointments' | 'plannedAppointments' | 'lastAppointments' | 'rejected' | 'default';
// }

interface ProfileContainerPropType {
  userRole: string;
  type: 'waitingAppointments' | 'plannedAppointments' | 'lastAppointments' | 'rejected' | 'default';
  profileCardData: profileCardDataType;
}

const ProfileContainer = (props: ProfileContainerPropType) => {
  // const { userRole, seniorWaiting, seniorPlanned, seniorLast, type } = props;
  const { userRole, profileCardData, type } = props;
  return (
    <ReviewWrapper $type={type}>
      <Wrapper $type={type}>
        <TempImg />
        <InfoContainer>
          <NameContainer>
            <Name>
              {profileCardData.nickname} {userRole === 'SENIOR' ? '선배' : '후배'}
            </Name>
            {type === 'rejected' && <RejectedChip>거절</RejectedChip>}
          </NameContainer>
          {userRole === 'JUNIOR' && (
            <ChipContainer>
              <ProfileChip type="company" content={profileCardData.company} />
              <ProfileChip type="field" content={profileCardData.field} />
            </ChipContainer>
          )}
          {userRole === 'SENIOR' &&
            (type === 'waitingAppointments' ||
              type === 'plannedAppointments' ||
              type === 'lastAppointments' ||
              type === 'rejected') && (
              <>
                <ChipContainer>
                  <ProfileChip type="field" content={profileCardData.field} />
                  <ProfileChip type="field" content={profileCardData.department} />
                </ChipContainer>
                {type === 'waitingAppointments' && <Description>{profileCardData.topic}</Description>}
              </>
            )}
          {userRole === 'SENIOR' && type === 'default' && (
            <>
              <MajorDiv>
                <Major>{profileCardData.field}</Major>
                <Divider />
                <Major>{profileCardData.department}</Major>
              </MajorDiv>
              <Description>{profileCardData.topic}</Description>
            </>
          )}
          {userRole === 'JUNIOR' && (
            <>
              <MajorDiv>
                <Major>{profileCardData.department}</Major>
                <Divider />
                <Major>{profileCardData.detailPosition}</Major>
              </MajorDiv>
              {/* level로 직무 텍스트로 변경 필요 */}
              <Description>`주니어 (${profileCardData.level}년 차)`</Description>
            </>
          )}
          {(type === 'plannedAppointments' || type === 'lastAppointments') && (
            <TimeContainer>
              <ClockIc />
              {/* date에서 월,일만 빼서 써야함 */}
              <TimeSpan>
                `7월 6일 ${profileCardData.startTime} - ${profileCardData.endTime}`
              </TimeSpan>
            </TimeContainer>
          )}
          {type === 'rejected' && <Description>거절 라이팅 들어갈 예정입니다 하하하하</Description>}
        </InfoContainer>
        <CardArrowRightGrayIcon />
      </Wrapper>
      {userRole === 'JUNIOR' && type === 'lastAppointments' && <ReviewBtn>리뷰 작성하기</ReviewBtn>}
      {userRole === 'SENIOR' && type === 'lastAppointments' && <ReviewBtn>작성된 리뷰 없음</ReviewBtn>}
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

const NameContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  margin-bottom: 0.8rem;
`;

const Name = styled.span`
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
  top: 50%;
  right: 0;
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

const RejectedChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.9rem;
  height: 2.1rem;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.Red};

  color: ${({ theme }) => theme.colors.grayScaleWhite};
  ${({ theme }) => theme.fonts.Caption2_SB_12};
`;
