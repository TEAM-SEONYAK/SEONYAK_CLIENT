import ic_google_logo from '@assets/images/ic_google_logo.png';
import img_onboardingHB from '@assets/images/img_onboardingHB.png';
import img_onboardingSB from '@assets/images/img_onboardingSB.png';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { useLocation } from 'react-router-dom';
import googleLogin from './utils/googleLogin';
import { JoinHbBgSvg, JoinSbBgSvg } from '@assets/svgs';

const SignupPage = () => {
  const role = useLocation().state.role;
  const isSenior = role === 'SENIOR';

  return (
    <>
      {role === 'SENIOR' ? <JoinSbBgSvgIcon /> : <JoinHbBgSvgIcon />}
      <SignUpContainer>
        <DescTextWrapper>
          <MetaText>반가워요!</MetaText>
          {isSenior ? (
            <>
              <DescText $isActive={false}>선약에서 후배들의</DescText>
              <p>
                <DescText $isActive>진로고민</DescText>
                <DescText $isActive={false}>을 해결하러 가볼까요?</DescText>
              </p>
            </>
          ) : (
            <>
              <DescText $isActive={false}>선약에서 선배님들과</DescText>
              <p>
                <DescText $isActive>진로고민</DescText>
                <DescText $isActive={false}>을 해결할 준비가 되셨나요?</DescText>
              </p>
            </>
          )}
        </DescTextWrapper>
        {role === 'SENIOR' ? <OnboardingSBImg src={img_onboardingSB} /> : <OnboardingHBImg src={img_onboardingHB} />}
        <BtnContainer onClick={() => googleLogin(role)}>
          <GoogleLogoImg src={ic_google_logo} />
          <Text>구글로 시작하기</Text>
        </BtnContainer>
      </SignUpContainer>
    </>
  );
};

export default SignupPage;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 1;

  width: 100%;
  height: 100dvh;
  min-height: calc(var(--vh, 1vh) * 100 - 44px);
  padding: 6rem 2rem 3.6rem;
`;

export const Gap = styled.div`
  flex-grow: 1;
`;

const JoinSbBgSvgIcon = styled(JoinSbBgSvg)`
  position: fixed;

  width: 100%;
  height: 100dvh;
`;

const JoinHbBgSvgIcon = styled(JoinHbBgSvg)`
  position: fixed;

  width: 100%;
  height: 100dvh;
`;

const MetaText = styled.p`
  padding-bottom: 2rem;

  ${({ theme }) => theme.fonts.Head2_B_18};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const DescTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 3.2rem;
`;
const DescText = styled.span<{ $isActive: boolean }>`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.Blue : theme.colors.grayScaleBG)};
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;

  width: 100%;
  height: 5.6rem;
  margin-top: 3.7rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const Text = styled.p`
  ${theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.grayScaleWhite};
  text-align: center;
`;

const GoogleLogoImg = styled.img`
  position: absolute;
  left: 1rem;

  width: 33px;
  height: 33px;
  margin: 10px;
`;

const OnboardingHBImg = styled.img`
  width: 26.2rem;
  height: 32.8rem;
`;

const OnboardingSBImg = styled.img`
  width: 27.5rem;
  height: 35.3rem;
`;
