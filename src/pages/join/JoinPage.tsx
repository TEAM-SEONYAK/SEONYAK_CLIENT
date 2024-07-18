import { BigMainLogoIc, OnboardingGradIc } from '@assets/svgs';
import styled from '@emotion/styled';
import JoinButton from '@pages/join/Button';
import useGoogleLoginHook from '@pages/login/hooks/useLoginQuery';

const JoinPage = () => {
  const { login } = useGoogleLoginHook();

  const subTitle = `막막한 진로고민 해결을 위한\n선배와의 특별한 약속`;
  return (
    <Wrapper>
      <OnboardingGradIcon />
      <BigMainLogoIc />
      <SubTitle>{subTitle}</SubTitle>
      <JoinButton />
      <SignupContainer>
        <QuestionText>이미 아이디가 있으신가요?</QuestionText>
        <SignupContent onClick={() => login()}>
          <SignupText>로그인 하기</SignupText>
          <Underline />
        </SignupContent>
      </SignupContainer>
    </Wrapper>
  );
};

export default JoinPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100dvh;
  padding: 5.4rem 2rem 3.5rem;
`;

const OnboardingGradIcon = styled(OnboardingGradIc)`
  position: absolute;
  z-index: 0;

  width: 100vw;
`;

const SubTitle = styled.p`
  z-index: 1;

  margin-top: 1.4rem;
  margin-bottom: 36.589rem;

  color: ${({ theme }) => theme.colors.grayScaleBG};
  text-align: center;
  ${({ theme }) => theme.fonts.Title1_SB_16};
  white-space: pre-wrap;
`;

const SignupContainer = styled.section`
  display: flex;
  gap: 1rem;
  z-index: 2;

  margin-top: 1rem;
  padding: 1.15rem 0;
`;

const QuestionText = styled.p`
  color: ${({ theme }) => theme.colors.grayScaleBG};
  text-align: center;

  ${({ theme }) => theme.fonts.Body3_SB_14};
`;

const SignupContent = styled.section`
  color: ${({ theme }) => theme.colors.Blue};

  cursor: pointer;
`;

const SignupText = styled.p`
  text-align: center;
  ${({ theme }) => theme.fonts.Body2_R_14};
`;
const Underline = styled.hr`
  display: flex;
  align-items: flex-start;

  width: 7.2rem;
  margin-top: -1px;
  border: 0.5px solid;
`;
