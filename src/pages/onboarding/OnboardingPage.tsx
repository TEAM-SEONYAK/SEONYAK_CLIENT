import { ArrowLeftIc } from '@assets/svgs';
import { Header } from '@components/commons/Header';
import ProgressBar from '@components/commons/ProgressBar';
import styled from '@emotion/styled';
import Layout from '@pages/onboarding/components/Layout';
import { createContext, useState } from 'react';
import Step개인정보입력 from './components/commonOnboarding/Step개인정보입력';
import Step계열선택 from './components/commonOnboarding/Step계열선택';
import Step번호입력 from './components/commonOnboarding/Step번호입력';
import Step약관동의 from './components/commonOnboarding/Step약관동의';
import Step학과선택 from './components/commonOnboarding/Step학과선택';
import Step학교선택 from './components/commonOnboarding/Step학교선택';
import Step인증완료 from './components/seniorOnboarding/Step인증완료';
import Step재직기간 from './components/seniorOnboarding/Step재직기간';
import Step졸업인증 from './components/seniorOnboarding/Step졸업인증';
import Step직무선택 from './components/seniorOnboarding/Step직무선택';
import TitleBox from './components/TitleBox';
import Step명함인증 from './components/seniorOnboarding/Step명함인증';
import Step이메일입력 from './components/juniorOnboarding/Step이메일입력';
import { Outlet } from 'react-router-dom';

export const StepContext = createContext({
  onNext: () => {},
});

const OnboardingPage = () => {
  const role = 'SENIOR';
  return (
    <Layout userRole={role}>
      <Outlet />
    </Layout>
  );
};

export default OnboardingPage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100dvh;
  padding: 5.8rem 0 3.6rem;
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: 100%;
  padding: 3rem 2rem 0;
`;
