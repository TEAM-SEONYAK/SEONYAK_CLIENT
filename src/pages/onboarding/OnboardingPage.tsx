import Step재직인증 from '@pages/onboarding/components/seniorOnboarding/Step재직인증';
import { ArrowLeftIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import { Header } from '@components/commons/Header';
import ProgressBar from '@components/commons/ProgressBar';
import styled from '@emotion/styled';
import { useState } from 'react';
import Step개인정보입력 from './components/commonOnboarding/Step개인정보입력';
import Step계열선택 from './components/commonOnboarding/Step계열선택';
import Step번호입력 from './components/commonOnboarding/Step번호입력';
import Step약관동의 from './components/commonOnboarding/Step약관동의';
import Step학과선택 from './components/commonOnboarding/Step학과선택';
import Step학교선택 from './components/commonOnboarding/Step학교선택';
import Layout from './components/Layout';
import Step명함인증 from './components/seniorOnboarding/Step명함인증';
import Step인증완료 from './components/seniorOnboarding/Step인증완료';
import Step재직기간 from './components/seniorOnboarding/Step재직기간';
import Step졸업인증 from './components/seniorOnboarding/Step졸업인증';
import Step직무선택 from './components/seniorOnboarding/Step직무선택';
import TitleBox from './components/TitleBox';

const OnboardingPage = () => {
  // 테스트
  const role = 'SENIOR';
  const [step, setStep] = useState(1);
  const handleSetStep = (dir: 'NEXT' | 'PREV') => {
    dir === 'NEXT' ? setStep((prev) => prev + 1) : setStep((prev) => prev - 1);
  };

  const Step = () => {
    switch (step) {
      case 1:
        return <Step약관동의 />;
      case 2:
        return <Step개인정보입력 />;
      case 3:
        return <Step학교선택 />;
      case 4:
        return <Step계열선택 />;
      case 5:
        return <Step학과선택 />;
      case 6:
        return <Step졸업인증 />;
      case 7:
        return <Step재직인증 />;
      case 9:
        return <Step재직기간 />;
      case 10:
        return <Step직무선택 />;
      case 11:
        return <Step번호입력 />;
    }
  };

  if (role === 'SENIOR' && step === 8) {
    return (
      <Wrapper>
        <Header title="재직 인증" LeftSvg={ArrowLeftIc} onClickLeft={() => handleSetStep('PREV')} />
        <ProgressBar max={4} current={4} />
        <Content>
          <TitleBox title="인증이 완료되었어요" description="명함 정보를 확인해 주세요" />
          <Step인증완료 />
        </Content>
        <Caption>
          {`현재 입력된 정보가 잘못되어 있어도 괜찮아요 !\n이후 인증 절차(전화번호)와 마이페이지(회사명)에서 수정이 가능해요`}
        </Caption>
        <ButtonWrapper>
          <BlackButton>다시찍기</BlackButton>
          <BlueButton onClick={() => handleSetStep('NEXT')}>다음으로</BlueButton>
        </ButtonWrapper>
      </Wrapper>
    );
  }

  return (
    <Layout userRole={role} step={step} handleSetStep={handleSetStep}>
      <Step />
    </Layout>
  );
};

export default OnboardingPage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100dvh;
  padding: 5.8rem 2rem 3.6rem;
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: 100%;
  padding-top: 3rem;
`;

const Caption = styled.p`
  width: 100%;
  margin-bottom: 2rem;

  text-align: center;
  color: ${({ theme }) => theme.colors.grayScaleMG2};
  white-space: pre-line;
  ${({ theme }) => theme.fonts.Caption1_R_12};
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const BlackButton = styled.button`
  width: 10.6rem;
  height: 5.6rem;
  padding: 1.5rem 2rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.grayScaleBG};

  ${({ theme }) => theme.fonts.Head2_SB_18}
  color: ${({ theme }) => theme.colors.grayScaleWhite};
`;
const BlueButton = styled.button`
  z-index: 1;

  width: 21.9rem;
  height: 5.6rem;
  padding: 1.55rem 7.85rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.Blue};

  ${({ theme }) => theme.fonts.Head2_SB_18}
  color: ${({ theme }) => theme.colors.grayScaleWhite};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayScaleMG2};

    cursor: default;
  }
`;
