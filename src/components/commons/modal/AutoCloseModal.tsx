/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';
import { useEffect } from 'react';

interface AutoCloseModalPropType {
  text: string;
  showModal: boolean;
  handleShowModal: (type: boolean) => void;
}

export const AutoCloseModal = (props: AutoCloseModalPropType) => {
  const { text, showModal, handleShowModal } = props;

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        handleShowModal(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <ModalBackground $showModal={showModal}>
      <AutoCloseModalWrapper>
        <Img />
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
  z-index: 2;

  width: 100vw;
  height: 100%;

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

// 이미지 크기에 따라 바뀌어야 함
const Img = styled.div`
  width: 100%;
  height: 17.1rem;

  background-color: ${({ theme }) => theme.colors.grayScaleMG1};
`;

const AutoCloseModalText = styled.span`
  ${({ theme }) => theme.fonts.Head2_SB_18}
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;
