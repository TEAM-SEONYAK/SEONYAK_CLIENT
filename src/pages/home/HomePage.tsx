import styled from '@emotion/styled';
import { useState } from 'react';
import { AutoCloseModal } from '../../components/commons/modal/AutoCloseModal';
// import { BtnCloseModal } from '../../components/commons/modal/BtnModal';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickBtn = () => {
    setShowModal(true);
  };
  const handleShowModal = (type: boolean) => {
    setShowModal(type);
  };

  return (
    <>
      <button onClick={onClickBtn}>모달 여는 버튼</button>
      {/* <BtnCloseModal
        showModal={showModal}
        handleShowModal={handleShowModal}
        title="약속 잡기 전 주의해주세요"
        btnText="확인했어요"
      /> */}
      <AutoCloseModal showModal={showModal} text="인증에 성공했어요" handleShowModal={handleShowModal}>
        <Img />
      </AutoCloseModal>
    </>
  );
};

export default HomePage;

// 이미지 크기에 따라 바뀌어야 함
const Img = styled.div`
  width: 100%;
  height: 17.1rem;

  background-color: ${({ theme }) => theme.colors.grayScaleMG1};
`;
