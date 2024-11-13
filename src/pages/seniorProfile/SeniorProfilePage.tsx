import { ArrowLeftIc } from '@assets/svgs';
import styled from '@emotion/styled';
import Complete from '@pages/seniorProfile/components/Complete';
import Init from '@pages/seniorProfile/components/Init';
import PreView from '@pages/seniorProfile/components/preView/index';
import { seniorProfileRegisterType, seniorProfileInitial } from '@pages/seniorProfile/types';
import { useEffect, useState } from 'react';
import Career from './components/Career';
import Example from './components/Example';
import Sentence from './components/Sentence';
import Story from './components/Story';
import TimeSelect from './components/TimeSelect';
import { SENIOR_PROFILE_STEPS } from './constants';
import { Header } from '../../components/commons/Header';
import ProgressBar from '../../components/commons/ProgressBar';
import theme from '../../styles/theme';
import { useNavigate } from 'react-router-dom';
import { getSeniorNickname } from '@utils/storage';

const SeniorProfilePage = () => {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<seniorProfileRegisterType>(seniorProfileInitial);

  const navigate = useNavigate();
  const nickname = getSeniorNickname();
  const userName = step >= 2 && step <= 4 ? nickname : '';

  useEffect(() => {
    if (!nickname) navigate('/');
  }, [nickname]);

  const getComponent = () => {
    switch (step) {
      case 0:
        return <Init setStep={setStep} />;
      case 1:
        return <Example setStep={setStep} />;
      case 2:
        return <Sentence profile={profile} setProfile={setProfile} setStep={setStep} />;
      case 3:
        return <Career profile={profile} setProfile={setProfile} setStep={setStep} />;
      case 4:
        return <Story profile={profile} setProfile={setProfile} setStep={setStep} />;
      case 5:
        return <TimeSelect profile={profile} setProfile={setProfile} setStep={setStep} />;
      case 6:
        return <PreView setStep={setStep} profile={profile} seniorId="" />;
      case 7:
        return <Complete />;
      default:
        return null;
    }
  };

  return (
    <>
      {step > 1 && step < 7 && (
        <>
          <Header
            title={step == 2 ? '' : '프로필 등록'}
            LeftSvg={ArrowLeftIc}
            onClickLeft={() => setStep((prev) => prev - 1)}
          />
          {step > 1 && <ProgressBar max={5} current={step - 1} />}
          <Title>
            <Meta>{userName + SENIOR_PROFILE_STEPS[step].meta}</Meta>
            <Description>{SENIOR_PROFILE_STEPS[step].description}</Description>
          </Title>
        </>
      )}
      {getComponent()}
    </>
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
