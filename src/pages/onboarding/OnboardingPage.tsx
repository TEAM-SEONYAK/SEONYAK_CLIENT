import Step개인정보입력 from './components/commonOnboarding/Step개인정보입력';
import Layout from './components/Layout';

const OnboardingPage = () => {
  return (
    <Layout step={1}>
      <Step개인정보입력 />
    </Layout>
  );
};

export default OnboardingPage;
