import styled from '@emotion/styled';
import { ReactNode } from 'react';
import TitleBox from './TitleBox';
import { ArrowLeftIc } from '../../../assets/svgs';
import { Header } from '../../../components/commons/Header';
import ProgressBar from '../../../components/commons/ProgressBar';
import { JUNIOR_ONBOARDING_STEPS, ONBOARDING_HEADER, SENIOR_ONBOARDING_STEPS } from '../constants';
import convertToGroupStep from '../utils/convertToGroupStep';
import { useLocation, useNavigate } from 'react-router-dom';

const Layout = ({ userRole, children }: { userRole: 'SENIOR' | 'JUNIOR'; children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const step = +location.pathname.slice(18);
  const onboardingStep = userRole === 'SENIOR' ? SENIOR_ONBOARDING_STEPS : JUNIOR_ONBOARDING_STEPS;
  const { title, description } = onboardingStep[step - 1];
  const GROUP_STEP = convertToGroupStep(userRole, step);

  return (
    <Wrapper>
      <Header title={ONBOARDING_HEADER[GROUP_STEP - 1]} LeftSvg={ArrowLeftIc} onClickLeft={() => navigate(-1)} />
      <ProgressBar max={userRole === 'SENIOR' ? 4 : 3} current={GROUP_STEP} />
      <MetaContainer>
        <TitleBox title={title} description={description} />
      </MetaContainer>
      <Content>{children}</Content>
      <ButtonBg />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  height: 100dvh;
  padding: 5.8rem 0 3.6rem;
`;

const MetaContainer = styled.header`
  display: flex;
  flex-direction: column;

  padding: 3rem 2rem 0;
`;

const Content = styled.section`
  padding: 0 2rem;
`;

const ButtonBg = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100vw;
  height: 6.4rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;
