import { GoogleLogoIc, OnboardingBackgroundHBIc, OnboardingBackgroundSBIc } from '@assets/svgs';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { useLocation } from 'react-router-dom';
import googleLogin from './utils/googleLogin';

const SignupPage = () => {
  const role = useLocation().state.role;
  localStorage.setItem('role', role);

  return (
    <>
      {role === 'SENIOR' ? <OnboardingBackgroundSBIcon /> : <OnboardingBackgroundHBIcon />}
      <BtnContainer onClick={() => googleLogin()}>
        <GoogleLogoIcon />
        <Text>구글로 시작하기</Text>
      </BtnContainer>
    </>
  );
};

export default SignupPage;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;

  width: 33.5rem;
  height: 5.6rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.grayScaleBG};
  transform: translate(-50%, -50%);
`;

const Text = styled.p`
  display: flex;

  padding-left: 6.85rem;

  ${theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.grayScaleWhite};
  text-align: center;
`;

const GoogleLogoIcon = styled(GoogleLogoIc)`
  width: 33px;
  height: 33px;
  margin: 10px;
`;

const OnboardingBackgroundSBIcon = styled(OnboardingBackgroundSBIc)`
  width: 100vw;
  height: 100dvh;
`;

const OnboardingBackgroundHBIcon = styled(OnboardingBackgroundHBIc)`
  width: 100vw;
  height: 100dvh;
`;
