import styled from '@emotion/styled';
import { useState } from 'react';
import Career from './components/Career';
import Check from './components/Check';
import Example from './components/Example';
import Sentence from './components/Sentence';
import Story from './components/Story';
import TimeSelect from './components/TimeSelect';
import ProgressBar from '../../components/commons/ProgressBar';
import theme from '../../styles/theme';
import { SENIOR_PROFILE_STEPS } from './constants';

const getComponent = (step: number) => {
  switch (step) {
    case 0:
      return <Example />;
    case 1:
      return <Check />;
    case 2:
      return <Sentence />;
    case 3:
      return <Career />;
    case 4:
      return <Story />;
    case 5:
      return <TimeSelect />;
    default:
      return null;
  }
};

const SeniorProfilePage = () => {
  const [step, setStep] = useState(0);
  const btnText = step === 8 ? '프로필 등록하기' : '다음으로';
  const component = getComponent(step);

  return (
    <div>
      {step > 2 && <ProgressBar max={5} current={step - 2} />}
      <Meta>{SENIOR_PROFILE_STEPS[step].meta}</Meta>
      <Description>{SENIOR_PROFILE_STEPS[step].description}</Description>
      {component}
      <button onClick={() => setStep((prev) => prev + 1)}>{btnText}</button>
    </div>
  );
};

export default SeniorProfilePage;

const Meta = styled.p`
  ${theme.fonts.Head1_SB_20};
  width: 18rem;
  color: ${theme.colors.grayScaleBG};
  background-color: red;
`;

const Description = styled.p`
  ${theme.fonts.Body1_M_14};
  color: ${theme.colors.grayScaleMG2};
`;
