import { AutoCloseModal } from '@components/commons/modal/AutoCloseModal';
import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import { ChangeEvent, useRef, useState } from 'react';
import { Caption, InnerButton, InputBox, TextBox } from '../TextBox';
import { FullBtn } from '@components/commons/FullButton';
import { useNavigate } from 'react-router-dom';
import { SuccessImg } from '@assets/images';
import useOCRUnivQuery from '@pages/onboarding/hooks/useOCRUnivQuery';

const Step졸업인증 = () => {
  const DEFAULT_TEXT = '졸업증명서를 첨부해 주세요';
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const mutation = useOCRUnivQuery();
  const navigate = useNavigate();

  const handleClickLink = () => {
    if (!file) return;
    mutation.mutate(file, {
      onSuccess: () => {
        handleSetSuccess(true);
        setTimeout(() => {
          navigate('/seniorOnboarding/7');
        }, 2000);
      },
      onError: () => {
        setError(true);
      },
    });
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setError(false);
    setFile(e.target.files[0]);
  };

  const handleSetSuccess = (type: boolean) => {
    setSuccess(type);
  };

  const fileRef = useRef<HTMLInputElement>(null);
  const handleClickFile = () => {
    if (!fileRef.current) return;
    fileRef.current.click();
  };

  return (
    <>
      <Wrapper>
        <div style={{ padding: '0 2rem' }}>
          <TextBox label="졸업증명서">
            <InputBox
              ref={fileRef}
              label="졸업증명서"
              type="file"
              onChange={handleChangeFile}
              text={file ? file.name : DEFAULT_TEXT}
              placeholder={DEFAULT_TEXT}
              isError={isError}>
              <InnerButton text="첨부파일" onClick={handleClickFile} />
            </InputBox>
            {isError ? (
              <WarnDescription isShown={isError} warnText="인증에 실패했어요. 학교명이 잘 보이는 지 확인해 주세요." />
            ) : (
              <Caption>JPEG, JPG, PNG, PDF 형식만 첨부 가능해요 (최대 50MB)</Caption>
            )}
          </TextBox>
        </div>
      </Wrapper>
      <FullBtn text="인증하기" onClick={handleClickLink} isActive={!!file} />
      <ModalWrapper>
        <AutoCloseModal text="인증에 성공했어요" showModal={isSuccess} handleShowModal={handleSetSuccess}>
          <Img src={SuccessImg} alt="" />
        </AutoCloseModal>
      </ModalWrapper>
    </>
  );
};

export default Step졸업인증;

const Wrapper = styled.div`
  padding-top: 2rem;
`;

const Img = styled.img`
  width: 27rem;
  height: 17rem;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
