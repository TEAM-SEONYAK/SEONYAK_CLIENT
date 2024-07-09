import styled from '@emotion/styled';
import { ReactNode } from 'react';
import TitleBox from './TitleBox';
import { AlarmIc, TempLogoIc } from '../../../assets/svgs';
import { FullBtn } from '../../../components/commons/FullButton';
import { Header } from '../../../components/commons/Header';
import ProgressBar from '../../../components/commons/ProgressBar';
import { SENIOR_ONBOARDING_STEPS } from '../constants';

const Layout = ({ step, children }: { step: number; children: ReactNode }) => {
  const { title, description } = SENIOR_ONBOARDING_STEPS[step - 1];
  return (
    <Wrapper>
      <Header title="타이틀" LeftSvg={TempLogoIc} RightSvg={AlarmIc} />
      <ProgressBar max={10} current={step} />
      <Content>
        <TitleBox title={title} description={description} />
        {children}
      </Content>
      <FullBtn
        text="텍스트"
        isActive
        onClick={() => {
          console.log('클릭하셨다');
        }}
      />
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
