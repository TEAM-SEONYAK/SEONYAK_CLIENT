import styled from '@emotion/styled';
import { TIME_SELECTION_TITLE } from '../constants/constants';

function TimeSelectionButton() {
  return (
    <Container>
      {TIME_SELECTION_TITLE.map((item, index) => (
        <Wrapper key={index}>
          <Title2>{item.title}</Title2>
        </Wrapper>
      ))}
    </Container>
  );
}

export default TimeSelectionButton;

const Wrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  position: relative;
  left: 2rem;

  width: 33.5rem;
  height: 4.8rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScaleLG2};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleWG};
`;

const Title2 = styled.span`
  position: relative;
  left: 2rem;

  ${({ theme }) => theme.fonts.Title2_M_16}
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
