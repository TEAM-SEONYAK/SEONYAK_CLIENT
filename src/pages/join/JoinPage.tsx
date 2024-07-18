import { BigMainLogoIc } from '@assets/svgs';
import styled from '@emotion/styled';
import JoinButton from '@pages/join/Button';

const JoinPage = () => {
  const subTitle = `막막한 진로고민 해결을 위한\n선배와의 특별한 약속`;
  return (
    <Wrapper>
      <BigMainLogoIc />
      <SubTitle>{subTitle}</SubTitle>
      <JoinButton />
      <SignupContainer>
        <QuestionText>이미 아이디가 있으신가요?</QuestionText>
        <SignupContent>
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
  padding: 5.995rem 2rem 3.5rem;
`;

const SubTitle = styled.p`
  margin-top: 1.4rem;
  margin-bottom: 36.589rem;

  color: ${({ theme }) => theme.colors.grayScaleBG};
  font-style: normal;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 2.1rem;
  white-space: pre-wrap;
`;

const SignupContainer = styled.section`
  display: flex;
  gap: 1rem;

  margin-top: 1rem;
  padding: 1.15rem 0;
`;

const QuestionText = styled.p`
  color: ${({ theme }) => theme.colors.grayScaleBG};
  text-align: center;

  ${({ theme }) => theme.fonts.Body2_R_14};
`;

const SignupContent = styled.section`
  color: ${({ theme }) => theme.colors.Blue};
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
