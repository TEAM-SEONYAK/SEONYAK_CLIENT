import { NamecardImg } from '@assets/images';
import { ModalCheckIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import { BtnCloseModal } from '@components/commons/modal/BtnModal';
import styled from '@emotion/styled';
import useOCRBizQuery from '@pages/onboarding/hooks/useOCRBizQuery';
import { ChangeEvent, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { InputBox, TextBox } from '../TextBox';
import { useBusinessCardQuery } from '@pages/onboarding/hooks/useBusinessCardQuery';
import { BizInfoType, JoinContextType } from '@pages/onboarding/type';
import { useBusinessCardPresignedUrl } from '@pages/onboarding/hooks/usePresignedUrl';

const Step명함인증 = () => {
  const { setData } = useOutletContext<JoinContextType>();
  const { res } = useBusinessCardPresignedUrl();
  const { mutate: imageUploadMutate } = useBusinessCardQuery();
  const mutation = useOCRBizQuery();
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isOpen, setOpen] = useState(false);
  const [info, setInfo] = useState<BizInfoType | null>(null);
  const handleSetOpen = (type: boolean) => {
    setOpen(type);
  };
  const handleClickPhoto = () => {
    handleSetOpen(true);
  };

  const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setImageFile(file);

    mutation.mutate(file, {
      onSuccess: (res) => {
        setInfo(res.data.data);
      },
    });
  };

  const handleClickLink = () => {
    if (!res || !imageFile) return;
    imageUploadMutate({ url: res.url, image: imageFile });
    setData((prev) => ({
      ...prev,
      company: info?.company,
      businessCard: res.fileName,
    }));
    navigate('/seniorOnboarding/8');
  };

  const VerificationDone = () =>
    info && (
      <DoneWrapper>
        <div style={{ padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <TextBox label="회사명">
            <InputBox label="회사명" placeholder="회사명을 입력해주세요" value={info.company} disabled />
          </TextBox>
          <TextBox label="전화번호">
            <InputBox label="전화번호" placeholder="연락처를 입력해주세요" value={info.phoneNumber} disabled />
            <Caption>{`회사명과 전화번호를 확인해 주세요`}</Caption>
          </TextBox>
        </div>
        <BottomCaption>
          현재 입력된 정보가 잘못되어 있어도 괜찮아요 !<br />
          이후 인증 절차(전화번호)와 마이페이지(회사명)에서 수정이 가능해요
        </BottomCaption>
        <ButtonWrapper>
          <BlackButton>
            <input type="file" accept="image/*" capture="environment" onChange={handleChangeFile} />
            다시찍기
          </BlackButton>
          <BlueButton type="button" onClick={handleClickLink}>
            다음으로
          </BlueButton>
        </ButtonWrapper>
      </DoneWrapper>
    );

  return !!info ? (
    <VerificationDone />
  ) : (
    <>
      <Wrapper>
        <div style={{ padding: '0 2rem' }}>
          <img src={NamecardImg} alt="" />
          <Caption>재직 사실 확인을 위해 명함 촬영이 필요해요</Caption>
        </div>
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

  & img {
    width: 100%;
  }
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

const DoneWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 2rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9;

  width: 100%;
  padding: 3.6rem 2rem;
`;

const BlackButton = styled.label`
  flex-grow: 1;

  padding: 1.5rem 0;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.grayScaleBG};

  ${({ theme }) => theme.fonts.Head2_SB_18}
  color: ${({ theme }) => theme.colors.grayScaleWhite};
  text-align: center;

  & > input {
    display: none;
  }
`;
const BlueButton = styled.button`
  flex-grow: 1;

  padding: 1.55rem 0;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.Blue};

  ${({ theme }) => theme.fonts.Head2_SB_18}
  color: ${({ theme }) => theme.colors.grayScaleWhite};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayScaleMG2};

    cursor: default;
  }
`;

const BottomCaption = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  margin-bottom: 11.2rem;

  color: ${({ theme }) => theme.colors.grayScaleMG2};
  text-align: center;
  white-space: pre-line;
  ${({ theme }) => theme.fonts.Caption1_R_12};
`;
