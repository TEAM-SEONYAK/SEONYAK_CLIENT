import styled from '@emotion/styled';
import { ReactNode } from 'react';
import TitleBox from './TitleBox';
import { ArrowLeftIc } from '../../../assets/svgs';
import { FullBtn } from '../../../components/commons/FullButton';
import { Header } from '../../../components/commons/Header';
import ProgressBar from '../../../components/commons/ProgressBar';
import { ONBOARDING_HEADER, SENIOR_ONBOARDING_STEPS } from '../constants';
import convertToGroupStep from '../utils/convertToGroupStep';

const Layout = ({
  role,
  step,
  handleSetNextStep,
  children,
}: {
  role: 'SENIOR' | 'JUNIOR';
  step: number;
  handleSetNextStep: () => void;
  children: ReactNode;
}) => {
  const { title, description } = SENIOR_ONBOARDING_STEPS[step - 1];
  const GROUP_STEP = convertToGroupStep(role, step);

  return (
    <Wrapper>
      <Header title={ONBOARDING_HEADER[GROUP_STEP - 1]} LeftSvg={ArrowLeftIc} />
      <ProgressBar max={role === 'SENIOR' ? 4 : 3} current={GROUP_STEP} />
      <Content>
        <TitleBox title={title} description={description} />
        {children}
      </Content>
      <FullBtn text="텍스트" isActive onClick={handleSetNextStep} />
      <ButtonBg />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100dvh;
  padding: 5.8rem 2rem 3.6rem;
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: 100%;
  padding-top: 3rem;
`;

const ButtonBg = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100vw;
  height: 6.4rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;
