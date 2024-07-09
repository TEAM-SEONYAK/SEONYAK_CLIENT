import styled from '@emotion/styled';
import React, { useState } from 'react';
import { ButtonCheckIc } from '../../../assets/svgs';
import { WORRY_SELECTION_BUTTON } from '../constants/constants';

const SelectJuniorWorryButton: React.FC = () => {
  const [buttonValue, setButtonValue] = useState<string | null>(null);

  return (
    <Wrapper>
      {WORRY_SELECTION_BUTTON.map((item) => (
        <Layout key={item.id} $isActive={buttonValue === item.title} onClick={() => setButtonValue(item.title)}>
          <Title2>{item.title}</Title2>
          {buttonValue === item.title && <StyledButtonCheckIc />}
        </Layout>
      ))}
    </Wrapper>
  );
};

export default SelectJuniorWorryButton;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`;

const Title2 = styled.span`
  position: relative;
  left: 2rem;

  ${({ theme }) => theme.fonts.Title2_M_16}
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;

const Layout = styled.div<{ $isActive: boolean }>`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
  align-items: center;

  width: 33.5rem;
  height: 4.8rem;
  border: 1px solid
    ${({ theme, $isActive }) => ($isActive ? theme.colors.transparentBlue_50 : theme.colors.grayScaleLG2)};
  border-radius: 8px;

  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.transparentBlue_5 : theme.colors.grayScaleWG};

  cursor: pointer;
`;

const StyledButtonCheckIc = styled(ButtonCheckIc)`
  position: relative;
  right: 1rem;

  width: 2rem;
  height: 2rem;
`;
