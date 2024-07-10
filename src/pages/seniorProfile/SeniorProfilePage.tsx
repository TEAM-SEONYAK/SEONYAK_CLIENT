import { ArrowLeftIc } from '@assets/svgs';
import styled from '@emotion/styled';
import { seniorProfileAPIType, seniorProfileInitial } from '@pages/seniorProfile/types';
import { useState } from 'react';
import Career from './components/Career';
import Check from './components/Check';
import Example from './components/Example';
import Sentence from './components/Sentence';
import Story from './components/Story';
import TimeSelect from './components/TimeSelect';
import { SENIOR_PROFILE_STEPS } from './constants';
import { FullBtn } from '../../components/commons/FullButton';
import { Header } from '../../components/commons/Header';
import ProgressBar from '../../components/commons/ProgressBar';
import theme from '../../styles/theme';

const SeniorProfilePage = () => {
  const [step, setStep] = useState(5);
  const [profile, setProfile] = useState<seniorProfileAPIType>(seniorProfileInitial);
  const [isNextActive, setIsNextActive] = useState(true);
  const userName = step >= 2 && step <= 4 ? '도현' : '';
  const getComponent = () => {
    switch (step) {
      case 0:
        return <Example profile={profile} setProfile={setProfile} />;
      case 1:
        return <Check profile={profile} setProfile={setProfile} />;
      case 2:
        return <Sentence profile={profile} setProfile={setProfile} />;
      case 3:
        return <Career profile={profile} setProfile={setProfile} />;
      case 4:
        return <Story profile={profile} setProfile={setProfile} />;
      case 5:
        return <TimeSelect profile={profile} setProfile={setProfile} setIsNextActive={setIsNextActive} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {step > 0 && (
        <Header
          title="프로필 등록"
          LeftSvg={ArrowLeftIc}
          onClickLeft={() => setStep((prev) => prev - 1)}
          bgColor="white"
        />
      )}
      {step >= 2 && step <= 6 && <ProgressBar max={5} current={step - 1} />}
      <Title>
        <Meta>{userName + SENIOR_PROFILE_STEPS[step].meta}</Meta>
        <Description>{SENIOR_PROFILE_STEPS[step].description}</Description>
      </Title>
      {getComponent()}
      {step !== 7 && (
        <FullBtn
          isActive={isNextActive}
          text={step === 6 ? '프로필 등록하기' : '다음으로'}
          onClick={() => setStep((prev) => prev + 1)}
        />
      )}
    </div>
  );
};

export default SeniorProfilePage;

const Title = styled.div`
  padding: 8.8rem 0 4px 2rem;
`;

const Meta = styled.p`
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
