import { ModalCheckIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import { BtnCloseModal } from '@components/commons/modal/BtnModal';
import styled from '@emotion/styled';
import { StepContext } from '@pages/onboarding/OnboardingPage';
import { ChangeEvent, useContext, useState } from 'react';

const Step명함인증 = () => {
  const [imageFile, setImageFile] = useState('');
  const { onNext } = useContext(StepContext);
  const [isOpen, setOpen] = useState(false);
  const handleSetOpen = (type: boolean) => {
    setOpen(type);
  };
  const handleClickPhoto = () => {
    handleSetOpen(true);
  };

  const handleChangeFilie = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    // file을 multipart/form-data 로 통신
    onNext();
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
            <span>흔들림 없이 찍어주세요</span>
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
              만약 명함 내용을 인식하지 못할 경우
              <br />
              재촬영을 요구할 수 있어요 !
            </span>
          </GrayText>
        </GrayBox>
        <BtnModalBtn>
          <input type="file" accept="image/*" capture="environment" onChange={handleChangeFilie} />
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
