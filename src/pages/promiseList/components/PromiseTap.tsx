import styled from '@emotion/styled';
import ProfileContainer from './ProfileContainer';
import { profileCardDataType } from '../constants/constants';

interface PromiseTapPropType {
  userRole: string;
  pending: profileCardDataType[];
  scheduled: profileCardDataType[];
  past: profileCardDataType[];
}

const PromiseTap = (props: PromiseTapPropType) => {
  const length = 1;
  const { userRole, pending, scheduled, past } = props;
  return (
    <Wrapper>
      <TapContainer>
        <TapText $isActive={true}>확정 대기</TapText>
        <TapText $isActive={false}>예정 약속</TapText>
        <TapText $isActive={false}>지난 약속</TapText>
      </TapContainer>
      {length ? (
        <ProfileWrapper>
          {}
          <ProfileContainer userRole={userRole} type="past" profileCardData={past[0]} />
          <ProfileContainer userRole={userRole} type="rejected" profileCardData={past[1]} />
          {/* <ProfileContainer userRole={userRole} type="lastAppointments" />
          <ProfileContainer userRole={userRole} type="lastAppointments" />
          <ProfileContainer userRole={userRole} type="rejected" /> */}
        </ProfileWrapper>
      ) : (
        <EmptyView>예정된 약속이 없어요</EmptyView>
      )}
    </Wrapper>
  );
};

export default PromiseTap;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const TapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1.5rem 4.7rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayScaleLG1};
`;

const TapText = styled.span<{ $isActive: boolean }>`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grayScaleBG : theme.colors.grayScaleMG2)};
`;

const ProfileWrapper = styled.div`
  width: 100vw;
  padding: 0 2rem;
`;

const EmptyView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 18.9rem;

  ${({ theme }) => theme.fonts.Title2_M_16};
  color: ${({ theme }) => theme.colors.grayScaleLG2};
`;
