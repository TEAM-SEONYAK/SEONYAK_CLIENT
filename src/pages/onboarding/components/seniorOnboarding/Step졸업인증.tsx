import { AutoCloseModal } from '@components/commons/modal/AutoCloseModal';
import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import { Caption, InnerButton, InputBox, TextBox } from '../TextBox';
import { FullBtn } from '@components/commons/FullButton';
import { useNavigate } from 'react-router-dom';
import useOCRUnivQuery from '@pages/onboarding/hooks/useOCRUnivQuery';

const Step졸업인증 = () => {
  const DEFAULT_TEXT = '파일 첨부하기';
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

  return (
    <>
      <Wrapper>
        <TextBox label="졸업증명서">
          <InputBox
            label="졸업증명서"
            type="file"
            onChange={handleChangeFile}
            text={file ? file.name : DEFAULT_TEXT}
            placeholder={DEFAULT_TEXT}
            isError={isError}>
            <InnerButton text="첨부파일" />
          </InputBox>
          {isError ? (
            <WarnDescription isShown={isError} warnText="인증에 실패했어요. 학교명이 잘 보이는 지 확인해 주세요." />
          ) : (
            <Caption>JPEG, JPG, PNG, PDF 형식만 첨부 가능해요 (최대 50MB)</Caption>
          )}
        </TextBox>
      </Wrapper>
      <FullBtn onClick={handleClickLink} isActive={!!file} />
      <ModalWrapper>
        <AutoCloseModal text="인증에 성공했어요" showModal={isSuccess} handleShowModal={handleSetSuccess}>
          <Dummy />
        </AutoCloseModal>
      </ModalWrapper>
    </>
  );
};

export default Step졸업인증;

const Wrapper = styled.div`
  padding-top: 2rem;
`;

const Dummy = styled.div`
  width: 27rem;
  height: 17rem;

  background-color: aliceblue;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: -2rem;
`;
