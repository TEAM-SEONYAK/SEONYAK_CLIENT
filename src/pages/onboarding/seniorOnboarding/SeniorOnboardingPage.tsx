import TitleBox from '../components/TitleBox';
import { SENIOR_ONBOARDING_STEPS } from '../constants';

const SeniorOnboardingPage = () => {
  const { title, description } = SENIOR_ONBOARDING_STEPS[0];
  return (
    <div>
      <TitleBox title={title} description={description} />
      <div>SeniorOnboarding</div>
    </div>
  );
};

export default SeniorOnboardingPage;
