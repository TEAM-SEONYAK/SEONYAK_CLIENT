import { useState } from 'react';
import { BtnCloseModal } from '../../components/commons/Modal';

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
      <BtnCloseModal
        showModal={showModal}
        handleShowModal={handleShowModal}
        title="약속 잡기 전 주의해주세요"
        btnText="확인했어요"
      />
    </>
  );
};

export default HomePage;
