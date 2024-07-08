/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { CloseIc } from '../../../assets/svgs';
import useClickOutside from '../../../hooks/useClickOutside';

interface BtnCloseModalPropType {
  title: string;
  showModal: boolean;
  handleShowModal: (type: boolean) => void;
  children?: React.ReactNode;
  btnText: string;
}

export const BtnCloseModal = (props: BtnCloseModalPropType) => {
  const { title, showModal, handleShowModal, children, btnText } = props;
  const modalRef = useRef(null);

  const handleModalClose = () => {
    handleShowModal(false);
  };

  // 커스텀 훅 활성화용 state
  const [modalBgClickActive, setModalBgClickActive] = useState(showModal);

  // 커스텀 훅 전달 함수
  const handleOutSideClick = () => {
    if (showModal) {
      setModalBgClickActive(true);
    }
    if (modalBgClickActive) {
      handleShowModal(false);
      setModalBgClickActive(false);
    }
  };

  // 커스텀 훅 사용
  useClickOutside(modalRef, handleOutSideClick);

  return (
    <ModalBackground $showModal={showModal}>
      <BtnModalWrapper ref={modalRef}>
        <CloseIcon onClick={handleModalClose} />
        <BtnModalTitle>{title}</BtnModalTitle>
        {children}
        <BtnModalBtn onClick={handleModalClose}>{btnText}</BtnModalBtn>
      </BtnModalWrapper>
    </ModalBackground>
  );
};

const ModalBackground = styled.div<{ $showModal: boolean }>`
  display: ${({ $showModal }) => ($showModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;

  width: 100vw;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.transparentBlack_65};
`;

const BtnModalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  align-items: center;
  position: relative;

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
