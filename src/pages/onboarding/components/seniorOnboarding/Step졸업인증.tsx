import styled from '@emotion/styled';
import { Caption, InnerButton, InputBox, TextBox } from '../TextBox';
import { FullBtn } from '@components/commons/FullButton';
import { useContext } from 'react';
import { StepContext } from '@pages/onboarding/OnboardingPage';

const Step졸업인증 = () => {
  const { onNext } = useContext(StepContext);
  // 임시 변수 : 서버 통신 결과에 따라
  const isSucceed = true;

  return (
    <Wrapper>
      <TextBox label="졸업증명서">
        <InputBox label="졸업증명서" type="file" placeholder="파일 첨부하기">
          <InnerButton text="첨부파일" />
        </InputBox>
        <Caption>JPEG, JPG, PNG, PDF 형식만 첨부 가능해요 (최대 50BM)</Caption>
      </TextBox>
      <FullBtn text="인증하기" isActive={isSucceed} onClick={onNext} />
    </Wrapper>
  );
};

export default Step졸업인증;

const Wrapper = styled.div`
  padding-top: 2rem;
`;
