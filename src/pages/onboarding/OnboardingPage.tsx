import Step학과선택 from './components/commonOnboarding/Step학과선택';
import Layout from './components/Layout';

const OnboardingPage = () => {
  return (
    <Layout step={4}>
      <Step학과선택 />
    </Layout>
  );
};

export default OnboardingPage;
