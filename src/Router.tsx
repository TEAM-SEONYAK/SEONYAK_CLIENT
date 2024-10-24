import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import App from './App';

import Layout from '@pages/onboarding/components/Layout';
import LoginCallback from '@pages/login/LoginCallback';
import HomePage from '@pages/home/HomePage';
import JoinPage from '@pages/join/JoinPage';

const SignupPage = lazy(() => import('./pages/login/SignupPage'));
const Step약관동의 = lazy(() => import('@pages/onboarding/components/commonOnboarding/Step약관동의'));
const Step개인정보입력 = lazy(() => import('@pages/onboarding/components/commonOnboarding/Step개인정보입력'));
const Step학교선택 = lazy(() => import('@pages/onboarding/components/commonOnboarding/Step학교선택'));
const Step계열선택 = lazy(() => import('@pages/onboarding/components/commonOnboarding/Step계열선택'));
const Step학과선택 = lazy(() => import('@pages/onboarding/components/commonOnboarding/Step학과선택'));
const Step졸업인증 = lazy(() => import('@pages/onboarding/components/seniorOnboarding/Step졸업인증'));
const Step명함인증 = lazy(() => import('@pages/onboarding/components/seniorOnboarding/Step명함인증'));
const Step직무선택 = lazy(() => import('@pages/onboarding/components/seniorOnboarding/Step직무선택'));
const Step재직기간 = lazy(() => import('@pages/onboarding/components/seniorOnboarding/Step재직기간'));
const Step번호입력 = lazy(() => import('@pages/onboarding/components/commonOnboarding/Step번호입력'));
const Step이메일입력 = lazy(() => import('@pages/onboarding/components/juniorOnboarding/Step이메일입력'));
const StepComplete = lazy(() => import('@pages/onboarding/components/juniorOnboarding/StepComplete'));

const SeniorProfilePage = lazy(() => import('@pages/seniorProfile/SeniorProfilePage'));

const JuniorPromisePage = lazy(() => import('./pages/juniorPromise/JuniorPromisePage'));
const JuniorPromiseRequestPage = lazy(() => import('./pages/juniorPromiseRequest/JuniorPromiseRequestPage'));

const PromiseListPage = lazy(() => import('./pages/promiseList/PromiseListPage'));
const PromiseDetail = lazy(() => import('@pages/promiseDetail/PromiseDetailPage'));
const PromiseDetailPageJunior = lazy(() => import('@pages/promiseDetail/PromiseDetailPageJunior'));

const ErrorPage = lazy(() => import('@pages/errorPage/ErrorPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'join',
        element: <JoinPage />,
      },
      {
        path: 'promiseList/promiseDetail',
        element: <PromiseDetail />,
      },
      {
        path: 'promiseList/promiseDetailJunior',
        element: <PromiseDetailPageJunior />,
      },
      {
        path: 'promiseList',
        element: <PromiseListPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'auth/google',
        element: <LoginCallback />,
      },
      {
        path: 'seniorOnboarding',
        element: <Layout userRole="SENIOR" />,
        children: [
          {
            index: true,
            element: <Navigate to="1" />,
          },
          {
            path: '1',
            element: <Step약관동의 />,
          },
          {
            path: '2',
            element: <Step개인정보입력 />,
          },
          {
            path: '3',
            element: <Step학교선택 />,
          },
          {
            path: '4',
            element: <Step계열선택 />,
          },
          {
            path: '5',
            element: <Step학과선택 />,
          },
          {
            path: '6',
            element: <Step졸업인증 />,
          },
          {
            path: '7',
            element: <Step명함인증 />,
          },
          {
            path: '8',
            element: <Step직무선택 />,
          },
          {
            path: '9',
            element: <Step재직기간 />,
          },
          {
            path: '10',
            element: <Step번호입력 />,
          },
        ],
      },
      {
        path: 'juniorOnboarding',
        element: <Layout userRole="JUNIOR" />,
        children: [
          {
            index: true,
            element: <Navigate to="1" />,
          },
          {
            path: '1',
            element: <Step약관동의 />,
          },
          {
            path: '2',
            element: <Step개인정보입력 />,
          },
          {
            path: '3',
            element: <Step번호입력 />,
          },
          {
            path: '4',
            element: <Step학교선택 />,
          },
          {
            path: '5',
            element: <Step이메일입력 />,
          },
          {
            path: '6',
            element: <Step계열선택 />,
          },
          {
            path: '7',
            element: <Step학과선택 />,
          },
          {
            path: 'complete',
            element: <StepComplete />,
          },
        ],
      },
      {
        path: 'seniorProfile',
        element: <SeniorProfilePage />,
      },
      {
        path: 'juniorPromise',
        element: <JuniorPromisePage />,
      },
      {
        path: 'juniorPromiseRequest',
        element: <JuniorPromiseRequestPage />,
      },
      {
        path: 'error',
        element: <ErrorPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
