import { BigMainLogoIc } from '@assets/svgs';
import styled from '@emotion/styled';
import JoinButton from '@pages/join/components/Button';
import logoGif from '@assets/gif/logoGif.gif';
import googleLogin from '@pages/login/utils/googleLogin';
import { JoinBgImgSvg } from '@assets/svgs';

const JoinPage = () => {
  return (
    <>
      <JoinGif src={logoGif} />
      <JoinBgImgSvgIcon />
      <Wrapper>
        <BigMainLogoIcon />
        <TitleWrapper>
          <SubTitle $isHighlight={false}>막막한 진로고민을 해결해줄</SubTitle>
          <TitleContainer>
            <SubTitle $isHighlight={false}>{'선배와의 '}</SubTitle>
            <SubTitle $isHighlight={true}>특별한 약속</SubTitle>
          </TitleContainer>
        </TitleWrapper>

        <Gap />
        <JoinButton />
        <SignupContainer>
          <QuestionText>이미 아이디가 있으신가요?</QuestionText>
          <SignupContent onClick={() => googleLogin()}>
            <SignupText>로그인 하기</SignupText>
            <Underline />
          </SignupContent>
        </SignupContainer>
      </Wrapper>
    </>
  );
};

export default JoinPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  z-index: 2;

  width: 100%;
  height: 100dvh;
  min-height: calc(var(--vh, 1vh) * 100 - 44px);
  padding: 10vh 2rem 3.5rem;
`;

const JoinBgImgSvgIcon = styled(JoinBgImgSvg)`
  position: fixed;

  width: 100%;
  height: 100dvh;
`;

const JoinGif = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 3;
`;

const BigMainLogoIcon = styled(BigMainLogoIc)`
  z-index: 2;

  width: 17.1rem;
  height: 4.5rem;
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

const Gap = styled.div`
  flex-grow: 1;
`;
