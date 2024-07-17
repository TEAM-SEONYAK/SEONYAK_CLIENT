import { ArrowLeftIc } from '@assets/svgs';
import { Header } from '@components/commons/Header';
import ProgressBar from '@components/commons/ProgressBar';
import styled from '@emotion/styled';
import Layout from '@pages/onboarding/components/Layout';
import { createContext, useState } from 'react';
import Step개인정보입력 from './components/commonOnboarding/Step개인정보입력';
import Step계열선택 from './components/commonOnboarding/Step계열선택';
import Step번호입력 from './components/commonOnboarding/Step번호입력';
import Step약관동의 from './components/commonOnboarding/Step약관동의';
import Step학과선택 from './components/commonOnboarding/Step학과선택';
import Step학교선택 from './components/commonOnboarding/Step학교선택';
import Step인증완료 from './components/seniorOnboarding/Step인증완료';
import Step재직기간 from './components/seniorOnboarding/Step재직기간';
import Step졸업인증 from './components/seniorOnboarding/Step졸업인증';
import Step직무선택 from './components/seniorOnboarding/Step직무선택';
import TitleBox from './components/TitleBox';
import Step명함인증 from './components/seniorOnboarding/Step명함인증';
import Step이메일입력 from './components/juniorOnboarding/Step이메일입력';

export const StepContext = createContext({
  onNext: () => {},
});

const OnboardingPage = () => {
  const role = 'SENIOR';
  const [step, setStep] = useState(1);
  const handleSetStep = (dir: 'NEXT' | 'PREV') => {
    dir === 'NEXT' ? setStep((prev) => prev + 1) : setStep((prev) => prev - 1);
  };

  const Step = () => {
    if (role === 'SENIOR') {
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
          return <Step명함인증 />;
        case 8:
          return (
            <Wrapper>
              <Header title="재직 인증" LeftSvg={ArrowLeftIc} onClickLeft={() => handleSetStep('PREV')} />
              <ProgressBar max={4} current={4} />
              <Content>
                <TitleBox title="인증이 완료되었어요" description="명함 정보를 확인해 주세요" />
                <Step인증완료 onNext={() => handleSetStep('NEXT')} />
              </Content>
            </Wrapper>
          );
        case 9:
          return <Step직무선택 />;
        case 10:
          return <Step재직기간 />;
        case 11:
          return <Step번호입력 />;
      }
    } else {
      switch (step) {
        case 1:
          return <Step약관동의 />;
        case 2:
          return <Step개인정보입력 />;
        case 3:
          return <Step번호입력 />;
        case 4:
          return <Step학교선택 />;
        case 5:
          return <Step이메일입력 />;
        case 6:
          return <Step계열선택 />;
        case 7:
          return <Step학과선택 />;
      }
    }
  };

  return (
    <StepContext.Provider value={{ onNext: () => handleSetStep('NEXT') }}>
      <Layout userRole={role} step={step} handleSetStep={handleSetStep}>
        <Step />
      </Layout>
    </StepContext.Provider>
  );
};

export default OnboardingPage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100dvh;
  padding: 5.8rem 0 3.6rem;
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: 100%;
  padding: 3rem 2rem 0;
`;
