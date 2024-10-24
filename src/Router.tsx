import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';

import JuniorPromisePage from './pages/juniorPromise/JuniorPromisePage';
import SignupPage from './pages/login/SignupPage';
import PromiseListPage from './pages/promiseList/PromiseListPage';
import SeniorProfilePage from './pages/seniorProfile/SeniorProfilePage';
import Step약관동의 from '@pages/onboarding/components/commonOnboarding/Step약관동의';
import Step개인정보입력 from '@pages/onboarding/components/commonOnboarding/Step개인정보입력';
import Step학교선택 from '@pages/onboarding/components/commonOnboarding/Step학교선택';
import Step계열선택 from '@pages/onboarding/components/commonOnboarding/Step계열선택';
import Step학과선택 from '@pages/onboarding/components/commonOnboarding/Step학과선택';
import Step졸업인증 from '@pages/onboarding/components/seniorOnboarding/Step졸업인증';
import Step명함인증 from '@pages/onboarding/components/seniorOnboarding/Step명함인증';
import Step직무선택 from '@pages/onboarding/components/seniorOnboarding/Step직무선택';
import Step재직기간 from '@pages/onboarding/components/seniorOnboarding/Step재직기간';
import Step번호입력 from '@pages/onboarding/components/commonOnboarding/Step번호입력';
import Step이메일입력 from '@pages/onboarding/components/juniorOnboarding/Step이메일입력';
import Layout from '@pages/onboarding/components/Layout';
import JoinPage from '@pages/join/JoinPage';
import ErrorPage from '@pages/errorPage/ErrorPage';
import StepComplete from '@pages/onboarding/components/juniorOnboarding/StepComplete';
import LoginCallback from '@pages/login/LoginCallback';
import JuniorPromiseRequestPage from '@pages/juniorPromiseRequest/JuniorPromiseRequestPage';
import HomePage from '@pages/home/HomePage';
import PromiseDetail from '@pages/promiseDetail/PromiseDetailPage';
import PromiseDetailPageJunior from '@pages/promiseDetail/PromiseDetailPageJunior';

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
