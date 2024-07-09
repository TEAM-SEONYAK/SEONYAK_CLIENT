import Step계열선택 from './components/commonOnboarding/Step계열선택';
import Layout from './components/Layout';

const OnboardingPage = () => {
  return (
    <Layout step={4}>
      <Step계열선택 />
    </Layout>
  );
};

export default OnboardingPage;
