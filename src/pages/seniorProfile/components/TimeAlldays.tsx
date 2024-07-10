import styled from '@emotion/styled';
import { profilePropType } from '@pages/seniorProfile/types';
import DurationSelect from './common/DurationSelect';
import { WEEKENDS } from '../constants';

const TimeAlldays = ({ profile, setProfile }: profilePropType) => {
  return (
    <Wrapper>
      {WEEKENDS.map((w, idx) => (
        <Container key={idx}>
          <CategoryText>{w}</CategoryText>
          <DurationSelect variant="secondary" isLatter={idx > 3} key={w} profile={profile} setProfile={setProfile} />
        </Container>
      ))}
    </Wrapper>
  );
};

export default TimeAlldays;

const Wrapper = styled.div`
  padding: 3rem 0 10rem 2rem;
`;

const Container = styled.section`
  display: flex;
  align-items: center;

  padding-bottom: 1rem;
`;

const CategoryText = styled.div`
  ${({ theme }) => theme.fonts.Body3_SB_14};
  padding-right: 1rem;
`;
