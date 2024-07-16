import styled from '@emotion/styled';
import React from 'react';

interface EachButtonPropType {
  startTime: string;
  endTime: string;
  isActive: boolean;
  onClick: () => void;
}

const EachTimeButton: React.FC<EachButtonPropType> = ({ startTime, endTime, isActive, onClick }) => {
  return (
    <Wrapper $isActive={isActive} onClick={onClick}>
      {startTime} ~ {endTime}
    </Wrapper>
  );
};

export default EachTimeButton;

const Wrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10.8rem;
  height: 3.8rem;
  margin: 0.5rem 0.3rem;
  border: ${({ $isActive, theme }) =>
    $isActive ? `1px solid ${theme.colors.Blue}` : `1px solid ${theme.colors.grayScaleLG2}`};
  border-radius: 8px;

  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.transparentBlue_5 : theme.colors.grayScaleWhite};

  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleBG};

  cursor: pointer;
`;
