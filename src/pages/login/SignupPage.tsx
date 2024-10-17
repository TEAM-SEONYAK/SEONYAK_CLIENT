import { GoogleLogoIc, OnboardingBackgroundHBIc, OnboardingBackgroundSBIc } from '@assets/svgs';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { useLocation } from 'react-router-dom';
import googleLogin from './utils/googleLogin';

const SignupPage = () => {
  const role = useLocation().state.role;
  const isSenior = role === 'SENIOR';

  return (
    <>
      {role === 'SENIOR' ? (
        <>
          <GradEllipseSb $type={1} />
          <GradEllipseSb $type={2} />
          <GradEllipseSb $type={3} />
        </>
      ) : (
        <>
          <GradEllipseHb $type={1} />
          <GradEllipseHb $type={2} />
          <GradEllipseHb $type={3} />
        </>
      )}
      <SignUpContainer>
        {role === 'SENIOR' ? <OnboardingBackgroundSBIcon /> : <OnboardingBackgroundHBIcon />}
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
        <Gap />
        <BtnContainer onClick={() => googleLogin(role)}>
          <GoogleLogoIcon />
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
  justify-content: stretch;
  align-items: center;
  position: relative;
  z-index: 1;

  width: 100%;
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100 - 44px);
  padding: 6rem 2rem 3.6rem;
`;

export const Gap = styled.div`
  flex-grow: 1;
`;

const GradEllipseSb = styled.div<{ $type: number }>`
  position: absolute;
  top: ${({ $type }) => ($type === 1 ? '12.5rem' : $type === 2 ? '14.3rem' : '29.2rem')};
  left: ${({ $type }) => ($type === 1 ? '-5.5rem' : $type === 2 ? '15.6rem' : '6rem')};
  z-index: 0;

  width: 27.7rem;
  height: 27.9rem;
  border-radius: '50%';

  background: ${({ $type }) => ($type === 1 ? '#DFEDF9' : $type === 2 ? '#E2E6FA' : '#D9F7FF')};

  opacity: 0.8;
  filter: blur(60px);
`;

const GradEllipseHb = styled.div<{ $type: number }>`
  position: absolute;
  top: ${({ $type }) => ($type === 1 ? '14.3rem' : $type === 2 ? '12.5rem' : '29.2rem')};
  left: ${({ $type }) => ($type === 1 ? '-5.9rem' : $type === 2 ? '17.8rem' : '3.8rem')};
  z-index: 0;

  width: 27.7rem;
  height: 27.9rem;
  border-radius: '50%';

  background: ${({ $type }) => ($type === 1 ? '#E2FAFA' : $type === 2 ? '#F9E1DF' : '#D9F7FF')};

  opacity: 0.8;
  filter: blur(60px);
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

const GoogleLogoIcon = styled(GoogleLogoIc)`
  position: absolute;
  left: 1rem;

  width: 33px;
  height: 33px;
  margin: 10px;
`;

const OnboardingBackgroundSBIcon = styled(OnboardingBackgroundSBIc)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: -1;
`;

const OnboardingBackgroundHBIcon = styled(OnboardingBackgroundHBIc)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: -1;
`;
