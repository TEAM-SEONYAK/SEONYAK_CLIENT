import { useContext } from 'react';
import SelectBox from '../SelectBox';
import { StepContext } from '@pages/onboarding/OnboardingPage';
import { FullBtn } from '@components/commons/FullButton';

const Step재직기간 = () => {
  const { onNext } = useContext(StepContext);
  return (
    <>
      <SelectBox />
      <FullBtn isActive onClick={onNext} />
    </>
  );
};

export default Step재직기간;
