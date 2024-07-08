import styled from '@emotion/styled';
import { ButtonCheckIc } from '../../../assets/svgs';
import { TIME_SELECTION_TITLE } from '../constants/constants';

function TimeSelectionButton() {
  const buttonValue = null;

  return (
    <Container>
      {TIME_SELECTION_TITLE.map((item) => (
        <Wrapper key={item.id} $isActive={buttonValue !== null}>
          <Title2>{buttonValue ? buttonValue : item.title}</Title2>
          {buttonValue && <StyledButtonCheckIc />}
        </Wrapper>
      ))}
    </Container>
  );
}

export default TimeSelectionButton;

const Wrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  width: 33.5rem;
  height: 4.8rem;
  border: 1px solid
    ${({ theme, $isActive }) => ($isActive ? theme.colors.transparentBlue_50 : theme.colors.grayScaleLG2)};
  border-radius: 8px;

  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.transparentBlue_5 : theme.colors.grayScaleWG};
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
  justify-content: center;
  align-items: center;
`;

const StyledButtonCheckIc = styled(ButtonCheckIc)`
  position: relative;
  left: 14rem;

  width: 2rem;
  height: 2rem;
`;
