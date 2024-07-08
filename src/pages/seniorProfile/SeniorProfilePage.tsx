import styled from '@emotion/styled';
import { useState } from 'react';
import Career from './components/Career';
import Check from './components/Check';
import Example from './components/Example';
import Sentence from './components/Sentence';
import Story from './components/Story';
import TimeSelect from './components/TimeSelect';
import { SENIOR_PROFILE_STEPS } from './constants';
import ProgressBar from '../../components/commons/ProgressBar';
import theme from '../../styles/theme';

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
  const userName = step >= 2 && step <= 4 ? '도현' : '';
  return (
    <div>
      {step >= 2 && step <= 6 && <ProgressBar max={5} current={step - 1} />}
      <Title>
        <Meta>{userName + SENIOR_PROFILE_STEPS[step].meta}</Meta>
        <Description>{SENIOR_PROFILE_STEPS[step].description}</Description>
      </Title>
      {component}
      {step !== 7 && <button onClick={() => setStep((prev) => prev + 1)}>{btnText + step + '번째'}</button>}
    </div>
  );
};

export default SeniorProfilePage;

const Title = styled.div`
  padding: 3rem 0 4px 2rem;
`;

const Meta = styled.p`
  ${theme.fonts.Head1_SB_20};
  color: ${theme.colors.grayScaleBG};
  white-space: pre-wrap;
`;

const Description = styled.p`
  ${theme.fonts.Body1_M_14};
  color: ${theme.colors.grayScaleMG2};
  white-space: pre-wrap;
`;
