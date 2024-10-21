import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AutoCloseModalPropType {
  text: string;
  showModal: boolean;
  handleShowModal: (type: boolean) => void;
  children: React.ReactNode;
  path?: string;
}

export const AutoCloseModal = (props: AutoCloseModalPropType) => {
  const navigate = useNavigate();
  const { text, showModal, handleShowModal, children, path } = props;

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        handleShowModal(false);
        path && navigate(`${path}`);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <ModalBackground $showModal={showModal}>
      <AutoCloseModalWrapper>
        {children}
        <AutoCloseModalText>{text}</AutoCloseModalText>
      </AutoCloseModalWrapper>
    </ModalBackground>
  );
};

const ModalBackground = styled.div<{ $showModal: boolean }>`
  display: ${({ $showModal }) => ($showModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9;

  width: 100%;
  height: 100dvh;

  background-color: ${({ theme }) => theme.colors.transparentBlack_65};
`;

const AutoCloseModalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.31rem;
  align-items: center;

  width: 30rem;
  height: 28rem;
  padding: 2rem 1.5rem 0;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const AutoCloseModalText = styled.span`
  ${({ theme }) => theme.fonts.Head2_SB_18}
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;
