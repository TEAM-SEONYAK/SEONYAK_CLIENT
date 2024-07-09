import { useState } from 'react';
import { BtnCloseModal } from '../../components/commons/modal/BtnModal';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        열기
      </button>
      <BtnCloseModal title="테스트" showModal={showModal} handleShowModal={onClickModal} btnText="닫기" />
    </>
  );
};

export default HomePage;
