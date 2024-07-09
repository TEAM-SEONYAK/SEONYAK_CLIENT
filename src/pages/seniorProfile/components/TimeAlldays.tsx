import styled from '@emotion/styled';
import DurationSelect from './common/DurationSelect';
import { DeleteIcon } from './TimeWeekdays';
import { WEEKENDS } from '../constants';

const TimeAlldays = () => {
  return (
    <Wrapper>
      {WEEKENDS.map((w, idx) => (
        <Container key={idx}>
          <CategoryText>{w}</CategoryText>
          <DurationSelect variant="secondary" isLatter={idx > 3} />
          <DeleteIcon />
        </Container>
      ))}
    </Wrapper>
  );
};

export default TimeAlldays;

const Wrapper = styled.div`
  padding: 3rem 0 0 2rem;
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
