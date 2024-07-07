import TitleBox from '../components/TitleBox';
import { STEP_TITLE } from '../constants';

const SeniorOnboardingPage = () => {
  const { title, description } = STEP_TITLE[0];
  return (
    <div>
      <TitleBox title={title} description={description} />
      <div>SeniorOnboarding</div>
    </div>
  );
};

export default SeniorOnboardingPage;
