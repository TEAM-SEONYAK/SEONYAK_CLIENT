import { ModalCheckIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import { BtnCloseModal } from '@components/commons/modal/BtnModal';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step명함인증 = () => {
  const navigate = useNavigate();
  const handleClickLink = () => {
    navigate('/seniorOnboarding/8');
  };

  const [imageFile, setImageFile] = useState('');
  const [isOpen, setOpen] = useState(false);
  const handleSetOpen = (type: boolean) => {
    setOpen(type);
  };
  const handleClickPhoto = () => {
    handleSetOpen(true);
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    // file을 multipart/form-data 로 통신
    handleClickLink();
  };

  return (
    <>
      <Wrapper>
        <Image />
        <Caption>재직 사실 확인을 위해 명함 촬영이 필요해요</Caption>
        <FullBtn text="명함 촬영하기" isActive onClick={handleClickPhoto} />
      </Wrapper>
      <BtnCloseModal title="명함 촬영 전 주의해 주세요" isModalOpen={isOpen} handleModalOpen={handleSetOpen}>
        <GrayBox>
          <GrayText>
            <ModalCheckIc />
            <span>흔들림 없이 찍어 주세요</span>
          </GrayText>
          <GrayText>
            <ModalCheckIc />
            <span>
              검은색 배경과 함께 찍으면 인식률이
              <br />
              올라가요
            </span>
          </GrayText>
          <GrayText>
            <ModalCheckIc />
            <span>
              잘못 인식된 내용이 있다면 적절한
              <br />
              환경에서 다시 찍어 주세요
            </span>
          </GrayText>
        </GrayBox>
        <BtnModalBtn>
          <input type="file" accept="image/*" capture="environment" onChange={handleChangeFile} />
          확인했어요
        </BtnModalBtn>
      </BtnCloseModal>
    </>
  );
};

export default Step명함인증;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-top: 2rem;
`;
const Image = styled.div`
  width: 100%;
  height: 16.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleDG};
`;

const Caption = styled.p`
  color: ${({ theme }) => theme.colors.grayScaleDG};
  ${({ theme }) => theme.fonts.Body3_SB_14};
`;

const GrayBox = styled.ul`
  margin-bottom: 1.2rem;
  padding: 1rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleDG};
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const GrayText = styled.li`
  display: flex;
  gap: 1rem;

  & svg {
    margin-top: 0.35rem;
  }
`;

const BtnModalBtn = styled.label`
  width: 100%;
  padding: 1.25rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.Blue};

  ${({ theme }) => theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.grayScaleWhite};
  text-align: center;

  cursor: pointer;

  & > input {
    display: none;
  }
`;
