import { BtnCloseModal } from '@components/commons/modal/BtnModal';
import styled from '@emotion/styled';
import CheckModalContent from './CheckModalContent';

const CheckModal = () => {
  return (
    <Wrapper>
      <BtnCloseModal
        title={'약속 잡기 전 주의해주세요'}
        isModalOpen={true}
        handleModalOpen={() => {}}
        btnText={'적용할래요'}>
        <CheckModalContent />
      </BtnCloseModal>
    </Wrapper>
  );
};

export default CheckModal;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 19.4rem;

  width: 100%;
  height: 100%;
`;
