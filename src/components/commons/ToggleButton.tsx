import styled from '@emotion/styled';
import React, { useState } from 'react';

interface Props {
  left: string;
  right: string;
}

const ToggleButton: React.FC<Props> = ({ left, right }) => {
  const [activeButton, setActiveButton] = useState<'left' | 'right'>('left');

  return (
    <Wrapper>
      <ToggleBtn isActive={activeButton === 'left'} onClick={() => setActiveButton('left')}>
        {left}
      </ToggleBtn>
      <ToggleBtn isActive={activeButton === 'right'} onClick={() => setActiveButton('right')}>
        {right}
      </ToggleBtn>
    </Wrapper>
  );
};

export default ToggleButton;

const Wrapper = styled.div`
  display: flex;

  width: 33.7rem;
  height: 4.4rem;
  border-radius: 8px;
`;

const ToggleBtn = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 4.4rem;
  padding: 0.9rem 2.7rem;
  border-radius: 8px;

  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.grayScaleBG : theme.colors.grayScaleLG1)};

  color: ${({ theme, isActive }) => (isActive ? theme.colors.grayScaleWhite : theme.colors.grayScaleMG2)};
  ${({ theme }) => theme.fonts.Title2_M_16};

  cursor: pointer;
`;
