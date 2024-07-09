import styled from '@emotion/styled';
import React from 'react';

interface Props {
  left: string;
  right: string;
  activeButton: 'left' | 'right';
  // eslint-disable-next-line no-unused-vars
  onToggle: (button: 'left' | 'right') => void;
}

const ToggleButton: React.FC<Props> = ({ left, right, activeButton, onToggle }) => {
  return (
    <Wrapper>
      <Layout>
        <ToggleBtn isActive={activeButton === 'left'} onClick={() => onToggle('left')}>
          {left}
        </ToggleBtn>
        <ToggleBtn isActive={activeButton === 'right'} onClick={() => onToggle('right')}>
          {right}
        </ToggleBtn>
      </Layout>
    </Wrapper>
  );
};

export default ToggleButton;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
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
  padding-left: 1.8rem; /* 고정된 padding-left 값 */
  border-radius: 8px;

  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.grayScaleBG : theme.colors.grayScaleLG1)};

  color: ${({ theme, isActive }) => (isActive ? theme.colors.grayScaleWhite : theme.colors.grayScaleMG2)};

  ${({ theme }) => theme.fonts.Title2_M_16};
  cursor: pointer;
`;
