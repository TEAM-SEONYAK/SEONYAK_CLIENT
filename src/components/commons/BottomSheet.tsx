/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';
import { DEFAULT_REJECT_TEXT } from '@pages/promiseDetail/constants/constant';
import React from 'react';
interface BottomSheetPropType {
  isSheetOpen: boolean;
  handleSheetOpen: (type: boolean) => void;
  handleSheetClose: (type: boolean) => void;
  children: React.ReactNode;
  btnActive: string;
}

export const BottomSheet = ({ isSheetOpen, handleSheetClose, children, btnActive }: BottomSheetPropType) => {
  return (
    <>
      <Background $isSheetOpen={isSheetOpen} onClick={() => handleSheetClose(false)} />
      <BottomSheetWrapper $isSheetOpen={isSheetOpen}>
        <Handler />
        {children}
        <ExitBottomSheet
          disabled={btnActive === DEFAULT_REJECT_TEXT}
          type="button"
          onClick={() => handleSheetClose(false)}
          $isActive={btnActive !== DEFAULT_REJECT_TEXT}>
          적용할래요
        </ExitBottomSheet>
      </BottomSheetWrapper>
    </>
  );
};

const Background = styled.div<{ $isSheetOpen: boolean }>`
  display: ${({ $isSheetOpen }) => ($isSheetOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 100dvh;

  background: ${({ theme }) => theme.colors.transparentBlack_65};
`;

const BottomSheetWrapper = styled.form<{ $isSheetOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: 13;

  width: 100%;
  height: auto;
  padding: 3.9rem 2rem 4rem;
  border-radius: 16px 16px 0 0;

  background: ${({ theme }) => theme.colors.grayScaleWhite};

  opacity: ${({ $isSheetOpen }) => ($isSheetOpen ? 1 : 0)};
  transition:
    transform 250ms ease-out,
    opacity 250ms ease-out;
  transform: translateY(${({ $isSheetOpen }) => ($isSheetOpen ? '0' : '100%')});
`;

const ExitBottomSheet = styled.button<{ $isActive: boolean }>`
  width: 100%;
  height: 5rem;
  border-radius: 8px;

  background: ${({ $isActive, theme }) => ($isActive ? theme.colors.Blue : theme.colors.grayScaleMG1)};

  color: ${({ theme }) => theme.colors.grayScaleWhite};

  ${({ theme }) => theme.fonts.Head2_SB_18};
  cursor: pointer;
`;

const Handler = styled.div`
  position: fixed;
  top: 1.6rem;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 4.7rem;
  height: 0.3rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG2};
`;
