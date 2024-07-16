import { useContext, useState } from 'react';
import SelectBox from '../SelectBox';
import { StepContext } from '@pages/onboarding/OnboardingPage';
import { FullBtn } from '@components/commons/FullButton';

const Step재직기간 = () => {
  const PLACEHOLDER = '연차를 선택해 주세요';
  const [select, setSelect] = useState(PLACEHOLDER);
  const { onNext } = useContext(StepContext);

  const handleSetSelect = (value: string) => {
    setSelect(value);
  };

  return (
    <>
      <SelectBox select={select} onSetSelect={handleSetSelect} placeholder={PLACEHOLDER} />
      <FullBtn isActive={select !== ''} onClick={onNext} />
    </>
  );
};

export default Step재직기간;
