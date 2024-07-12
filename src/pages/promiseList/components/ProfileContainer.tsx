import { CardArrowRightGrayIc, ClockIc } from '@assets/svgs';
import styled from '@emotion/styled';
import { getLevelName } from '@utils/getLevelName';
import ProfileChip from './ProfileChip';
import { profileCardDataType } from '../constants/constants';
import { extractMonthAndDay } from '../utils/extractMonthAndDay';

interface ProfileContainerPropType {
  userRole: string;
  type: string;
  profileCardData?: profileCardDataType;
}

const ProfileContainer = (props: ProfileContainerPropType) => {
  const { userRole, profileCardData, type } = props;
  const { month, day } = extractMonthAndDay(profileCardData?.date + '');
  return (
    <ReviewWrapper $type={type}>
      <Wrapper $type={type}>
        <TempImg />
        <InfoContainer>
          <NameContainer>
            <Name>
              {profileCardData?.nickname} {userRole === 'SENIOR' ? '후배' : '선배'}
            </Name>
            {type === 'rejected' && <RejectedChip>거절</RejectedChip>}
          </NameContainer>
          {userRole === 'JUNIOR' && (
            <ChipContainer>
              <ProfileChip type="company" content={profileCardData?.company} />
              <ProfileChip type="field" content={profileCardData?.field} />
            </ChipContainer>
          )}
          {userRole === 'SENIOR' &&
            (type === 'pending' || type === 'scheduled' || type === 'past' || type === 'rejected') && (
              <>
                <ChipContainer>
                  <ProfileChip type="field" content={profileCardData?.field} />
                  <ProfileChip type="field" content={profileCardData?.department} />
                </ChipContainer>
                {type === 'pending' && <Description $colorType="grayScaleDG">{profileCardData?.topic}</Description>}
              </>
            )}
          {userRole === 'SENIOR' && type === 'default' && (
            <>
              <MajorDiv>
                <Major>{profileCardData?.field}</Major>
                <Divider />
                <Major>{profileCardData?.department}</Major>
              </MajorDiv>
              <Description $colorType="grayScaleDG">{profileCardData?.topic}</Description>
            </>
          )}
          {userRole === 'JUNIOR' && (
            <>
              <MajorDiv>
                <Major>{profileCardData?.position}</Major>
                <Divider />
                <Major>{profileCardData?.detailPosition}</Major>
              </MajorDiv>
              <Description $colorType="grayScaleDG">
                {getLevelName(profileCardData?.level + '')} {profileCardData?.level}
              </Description>
            </>
          )}
          {(type === 'scheduled' || type === 'past') && (
            <TimeContainer>
              <ClockIc />
              <TimeSpan>
                {month}월 {day}일 {profileCardData?.startTime} - {profileCardData?.endTime}
              </TimeSpan>
            </TimeContainer>
          )}
          {userRole === 'SENIOR' && type === 'rejected' && (
            <Description $colorType="grayScaleMG2">거절한 선약이에요</Description>
          )}
          {userRole === 'JUNIOR' && type === 'rejected' && (
            <Description $colorType="grayScaleMG2">선배님이 거절한 선약이에요</Description>
          )}
        </InfoContainer>
        <CardArrowRightGrayIcon />
      </Wrapper>
      {userRole === 'JUNIOR' && type === 'past' && <ReviewBtn>리뷰 작성하기</ReviewBtn>}
      {userRole === 'SENIOR' && type === 'past' && <ReviewBtn>작성된 리뷰 없음</ReviewBtn>}
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
    $type === 'default' || $type === 'past' ? 'none' : `1px solid ${theme.colors.grayScaleLG2}`};

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

const Description = styled.div<{ $colorType: string }>`
  width: 19rem;
  height: 2.2rem;
  color: ${({ theme, $colorType }) =>
    $colorType === 'grayScaleDG' ? theme.colors.grayScaleDG : theme.colors.grayScaleMG2};
  ${({ theme }) => theme.fonts.Body1_M_14};
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
