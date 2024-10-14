import styled from '@emotion/styled';

interface toggleButtonPropType {
  left: string;
  right: string;
  activeButton: string | null;
  onSetActiveButtonHandler: (button: string) => void;
}

const ToggleButton = ({ left, right, activeButton, onSetActiveButtonHandler }: toggleButtonPropType) => {
  return (
    <Wrapper>
      <ToggleBtn isActive={activeButton === left} onClick={() => onSetActiveButtonHandler(left)}>
        {left}
      </ToggleBtn>
      <ToggleBtn isActive={activeButton === right} onClick={() => onSetActiveButtonHandler(right)}>
        {right}
      </ToggleBtn>
    </Wrapper>
  );
};
export default ToggleButton;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 4.4rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};
`;

const ToggleBtn = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 4.4rem;
  padding: 0.9rem 2.7rem;
  padding-left: 1.8rem;
  border-radius: 8px;

  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.grayScaleBG : theme.colors.grayScaleLG1)};

  color: ${({ theme, isActive }) => (isActive ? theme.colors.grayScaleWhite : theme.colors.grayScaleMG2)};

  ${({ theme }) => theme.fonts.Title2_M_16};
  cursor: pointer;
`;
