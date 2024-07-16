import styled from '@emotion/styled';
import { ReactNode } from 'react';
import TitleBox from './TitleBox';
import { ArrowLeftIc } from '../../../assets/svgs';
import { Header } from '../../../components/commons/Header';
import ProgressBar from '../../../components/commons/ProgressBar';
import { ONBOARDING_HEADER, SENIOR_ONBOARDING_STEPS } from '../constants';
import convertToGroupStep from '../utils/convertToGroupStep';

const Layout = ({
  userRole,
  step,
  handleSetStep,
  children,
}: {
  userRole: 'SENIOR' | 'JUNIOR';
  step: number;
  handleSetStep: (dir: 'NEXT' | 'PREV') => void;
  children: ReactNode;
}) => {
  const { title, description } = SENIOR_ONBOARDING_STEPS[step - 1];
  const GROUP_STEP = convertToGroupStep(userRole, step);

  return (
    <Wrapper>
      <Header
        title={ONBOARDING_HEADER[GROUP_STEP - 1]}
        LeftSvg={ArrowLeftIc}
        onClickLeft={() => handleSetStep('PREV')}
      />
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
