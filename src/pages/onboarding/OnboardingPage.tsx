import Step학교선택 from './components/commonOnboarding/Step학교선택';
import Layout from './components/Layout';

const OnboardingPage = () => {
  return (
    <Layout step={3}>
      <Step학교선택 />
    </Layout>
  );
};

export default OnboardingPage;
