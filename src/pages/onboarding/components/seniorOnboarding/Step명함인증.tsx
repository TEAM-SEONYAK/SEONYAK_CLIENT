import { FullBtn } from '@components/commons/FullButton';
import styled from '@emotion/styled';
import { StepContext } from '@pages/onboarding/OnboardingPage';
import { useContext } from 'react';

const Step명함인증 = () => {
  const { onNext } = useContext(StepContext);
  return (
    <Wrapper>
      <Image />
      <Caption>재직 사실 확인을 위해 명함 촬영이 필요해요</Caption>
      <FullBtn text="텍스트" isActive onClick={onNext} />
    </Wrapper>
  );
};

export default Step명함인증;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
