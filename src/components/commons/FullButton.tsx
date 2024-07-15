import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

// 화면 하단 풀사이즈 버튼
interface FullBtnPropType {
  isActive?: boolean;
  text: string;
  onClick: () => void;
  onInactiveClick?: () => void;
  isTransparent?: boolean;
}

export const FullBtn = (props: FullBtnPropType) => {
  const { isActive, text, onClick, onInactiveClick, isTransparent = false } = props;
  return (
    <Wrapper $isTransparent={isTransparent}>
      <FullBtnContainer type="button" disabled={!isActive} onClick={isActive ? onClick : onInactiveClick}>
        {text}
      </FullBtnContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isTransparent: boolean }>`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: 2;

  width: 100vw;
  padding-bottom: 3.8rem;

  background-color: ${({ $isTransparent }) => ($isTransparent ? '' : 'white')};
`;

const FullBtnContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33.5rem;
  height: 4.5rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.Blue};

  ${({ theme }) => theme.fonts.Head2_SB_18}
  color: ${({ theme }) => theme.colors.grayScaleWhite};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayScaleMG2};

    cursor: default;
  }
`;
