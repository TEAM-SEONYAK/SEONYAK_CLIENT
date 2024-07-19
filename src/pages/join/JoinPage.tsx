import { BigMainLogoIc, OnboardingGradIc } from '@assets/svgs';
import styled from '@emotion/styled';
import JoinButton from '@pages/join/components/Button';
import Welcome from '@pages/join/components/Welcome';
import useGoogleLoginHook from '@pages/login/hooks/useLoginQuery';
import { useNavigate } from 'react-router-dom';

const JoinPage = () => {
  const { login } = useGoogleLoginHook({ variant: 'login' });
  const navigate = useNavigate();
  const handleSenior = () => {
    localStorage.setItem('role', 'SENIOR');
    localStorage.setItem(
      'accessToken',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MjEzODYwOTgsImV4cCI6MTc4MTg2NjA5OCwibWVtYmVySWQiOjF9.akUlaIos348cj7o57GMOjd5dWp2LE0R0Vk3IoZaP3X73dbGRkMkTCDGPMcTh_5JJUVyHtk6qO1tmLkMSYoViig',
    );
  };

  const handleJunior = () => {
    localStorage.setItem('role', 'JUNIOR');
    localStorage.setItem(
      'accessToken',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MjEzODYyNTgsImV4cCI6MTc4MTg2NjI1OCwibWVtYmVySWQiOjJ9.YTtOIDAgg-qZhuiwA4ZxXeyKBpV6UU1XsSAlxNy1sr_2P1Hl7iL94b0EoR1zxuJfUlcgBH8oY0UZ4kj1VzNGyg',
    );
  };

  const handleNext = () => {
    const role = localStorage.getItem('role');
    role === 'SENIOR' ? navigate('/') : role === 'JUNIOR' && navigate('/juniorPromise');
  };

  return (
    <>
      <OnboardingGradIcon />
      <Welcome />
      <Wrapper>
        <BigMainLogoIcon />
        <TitleWrapper>
          <SubTitle $isHighlight={false}>막막한 진로고민을 해결해줄</SubTitle>
          <TitleContainer>
            <SubTitle $isHighlight={false}>{'선배와의 '}</SubTitle>
            <SubTitle $isHighlight={true}>특별한 약속</SubTitle>
          </TitleContainer>
        </TitleWrapper>
        <JoinButton />
        <SignupContainer>
          <QuestionText>이미 아이디가 있으신가요?</QuestionText>
          <SignupContent onClick={() => login()}>
            <SignupText>로그인 하기</SignupText>
            <Underline />
          </SignupContent>
        </SignupContainer>
      </Wrapper>
      <SeniorBtn onClick={handleSenior} />
      <JuniorBtn onClick={handleJunior} />
      <NextBtn onClick={handleNext} />
    </>
  );
};

export default JoinPage;

const SeniorBtn = styled.div`
  position: absolute;
  bottom: 50%;
  left: 0;
  z-index: 10;

  width: 5rem;
  height: 5rem;

  background-color: red;
`;

const JuniorBtn = styled.div`
  position: absolute;
  right: 0;
  bottom: 50%;
  z-index: 10;

  width: 5rem;
  height: 5rem;

  background-color: red;
`;

const NextBtn = styled.div`
  position: absolute;
  right: 35%;
  bottom: 50%;
  z-index: 10;

  width: 10rem;
  height: 5rem;

  background-color: red;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  height: 100%;
  padding: 7rem 2rem 3.5rem;
`;

const OnboardingGradIcon = styled(OnboardingGradIc)`
  position: absolute;
  z-index: 1;

  width: 100vw;
`;

const BigMainLogoIcon = styled(BigMainLogoIc)`
  z-index: 2;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 4;

  margin-top: 1rem;
  margin-bottom: 35rem;
`;
const TitleContainer = styled.section`
  display: flex;
  z-index: 4;
`;

const SubTitle = styled.p<{ $isHighlight: boolean }>`
  z-index: 4;

  color: ${({ theme, $isHighlight }) => ($isHighlight ? theme.colors.Blue : theme.colors.grayScaleBG)};
  text-align: center;
  ${({ theme }) => theme.fonts.Title1_SB_16};
  white-space: pre-wrap;
`;

const SignupContainer = styled.section`
  display: flex;
  gap: 1rem;
  z-index: 4;

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
