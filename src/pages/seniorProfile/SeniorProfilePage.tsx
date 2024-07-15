import { ArrowLeftIc } from '@assets/svgs';
import styled from '@emotion/styled';
import Complete from '@pages/seniorProfile/components/Complete';
import Init from '@pages/seniorProfile/components/Init';
import PreView from '@pages/seniorProfile/components/PreView';
import { seniorProfileAPIType, seniorProfileInitial } from '@pages/seniorProfile/types';
import { useState } from 'react';
import Career from './components/Career';
import Example from './components/Example';
import PreView from './components/preView';
import Sentence from './components/Sentence';
import Story from './components/Story';
import TimeSelect from './components/TimeSelect';
import { SENIOR_PROFILE_STEPS } from './constants';
import { Header } from '../../components/commons/Header';
import ProgressBar from '../../components/commons/ProgressBar';
import theme from '../../styles/theme';

const getComponent = (step: number, profile: seniorProfileAPIType) => {
  switch (step) {
    case 0:
      return <Example />;
    case 1:
      return <PreView profile={profile} />;
    case 2:
      return <Sentence />;
    case 3:
      return <Career />;
    case 4:
      return <Story />;
    case 5:
      return <TimeSelect />;
    case 6:
      return <PreView profile={profile} />;
    default:
      return null;
  }
};

const SeniorProfilePage = () => {
  const [step, setStep] = useState(6);
  const [profile, setProfile] = useState<seniorProfileAPIType>(seniorProfileInitial);
  const btnText = step === 8 ? '프로필 등록하기' : '다음으로';
  const component = getComponent(step, profile);
  const userName = step >= 2 && step <= 4 ? '도현' : '';
  const getComponent = () => {
    switch (step) {
      case 0:
        return <Init setStep={setStep} />;
      case 1:
        return <Example setStep={setStep} />;
      case 2:
        return <PreView profile={profile} variant="secondary" setStep={setStep} />;
      case 3:
        return <Sentence profile={profile} setProfile={setProfile} setStep={setStep} />;
      case 4:
        return <Career profile={profile} setProfile={setProfile} setStep={setStep} />;
      case 5:
        return <Story profile={profile} setProfile={setProfile} setStep={setStep} />;
      case 6:
        return <TimeSelect profile={profile} setProfile={setProfile} setStep={setStep} />;
      case 7:
        return <PreView profile={profile} setStep={setStep} />;
      case 8:
        return <Complete />;
      default:
        return null;
    }
  };

  return (
    <div>
      {step > 1 && step < 8 && (
        <>
          <Header
            title={step == 2 ? '' : '프로필 등록'}
            LeftSvg={ArrowLeftIc}
            onClickLeft={() => setStep((prev) => prev - 1)}
            bgColor="white"
          />
          {step > 2 && <ProgressBar max={5} current={step - 2} />}
          <Title>
            <Meta>{userName + SENIOR_PROFILE_STEPS[step].meta}</Meta>
            <Description>{SENIOR_PROFILE_STEPS[step].description}</Description>
          </Title>
        </>
      )}
      {getComponent()}
    </div>
  );
};

export default SeniorProfilePage;

const Title = styled.div`
  padding: 8.8rem 0 4px 2rem;
`;

export const Meta = styled.p`
  padding-bottom: 0.4rem;

  ${theme.fonts.Head1_SB_20};
  color: ${theme.colors.grayScaleBG};
  white-space: pre-wrap;
`;

const Description = styled.p`
  ${theme.fonts.Body1_M_14};
  color: ${theme.colors.grayScaleMG2};
  white-space: pre-wrap;
`;
