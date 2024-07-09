import { useState } from 'react';
import Step개인정보입력 from './components/commonOnboarding/Step개인정보입력';
import Step계열선택 from './components/commonOnboarding/Step계열선택';
import Step번호입력 from './components/commonOnboarding/Step번호입력';
import Step약관동의 from './components/commonOnboarding/Step약관동의';
import Step학과선택 from './components/commonOnboarding/Step학과선택';
import Step학교선택 from './components/commonOnboarding/Step학교선택';
import Layout from './components/Layout';

const OnboardingPage = () => {
  // 테스트
  const [step, setStep] = useState(1);

  const handleSetNextStep = () => {
    setStep((prev) => prev + 1);
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
        return <Step번호입력 />;
    }
  };

  return (
    <Layout step={step} handleSetNextStep={handleSetNextStep}>
      <Step />
    </Layout>
  );
};

export default OnboardingPage;
