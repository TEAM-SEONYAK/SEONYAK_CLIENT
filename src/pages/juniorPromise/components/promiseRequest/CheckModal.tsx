import { BtnCloseModal } from '@components/commons/modal/BtnModal';
import styled from '@emotion/styled';
import { useState } from 'react';
import CheckModalContent from './CheckModalContent';

const CheckModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  return (
    <>
      <button onClick={() => handleModalOpen(true)}>모달 열기</button>
      <Wrapper>
        <BtnCloseModal
          title={'약속 잡기 전 주의해주세요'}
          isModalOpen={isModalOpen}
          handleModalOpen={handleModalOpen}
          btnText={'적용할래요'}>
          <CheckModalContent />
        </BtnCloseModal>
      </Wrapper>
    </>
  );
};

export default CheckModal;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  border-radius: 8px;
`;
