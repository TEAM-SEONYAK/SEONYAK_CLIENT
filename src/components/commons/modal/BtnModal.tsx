/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';
import React from 'react';
import { CloseIc } from '../../../assets/svgs';

interface BtnCloseModalPropType {
  title: string;
  isModalOpen: boolean;
  handleModalOpen: (type: boolean) => void;
  children?: React.ReactNode;
  btnText: string;
}

export const BtnCloseModal = (props: BtnCloseModalPropType) => {
  const { title, isModalOpen, handleModalOpen, children, btnText } = props;

  const handleModalClose = () => {
    handleModalOpen(false);
  };

  return (
    <Wrapper>
      <ModalBackground $isModalOpen={isModalOpen} onClick={handleModalClose} />
      <BtnModalWrapper $isModalOpen={isModalOpen}>
        <CloseIcon onClick={handleModalClose} />
        <BtnModalTitle>{title}</BtnModalTitle>
        {children}
        <BtnModalBtn onClick={handleModalClose}>{btnText}</BtnModalBtn>
      </BtnModalWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100vw;
  height: 100vh;
`;

const ModalBackground = styled.div<{ $isModalOpen: boolean }>`
  display: ${({ $isModalOpen }) => ($isModalOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;

  width: 100vw;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.transparentBlack_65};
`;

const BtnModalWrapper = styled.section<{ $isModalOpen: boolean }>`
  display: ${({ $isModalOpen }) => ($isModalOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1.8rem;
  align-items: center;
  position: fixed;
  z-index: 5;

  width: 30rem;
  padding: 3.6rem 1.3rem 1.5rem;
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const CloseIcon = styled(CloseIc)`
  position: absolute;
  top: 1rem;
  right: 1.1rem;
`;

const BtnModalTitle = styled.h2`
  ${({ theme }) => theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const BtnModalBtn = styled.button`
  width: 100%;
  padding: 1.25rem;
  border-radius: 8px;

  ${({ theme }) => theme.fonts.Head2_SB_18};
  background-color: ${({ theme }) => theme.colors.Blue};

  color: ${({ theme }) => theme.colors.grayScaleWhite};

  cursor: pointer;
`;
