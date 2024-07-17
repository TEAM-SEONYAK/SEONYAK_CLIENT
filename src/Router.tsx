import PromiseDetail from '@pages/promiseDetail/PromiseDetailPage';
import PromiseDetailPageJunior from '@pages/promiseDetail/PromiseDetailPageJunior';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
// import HomePage from './pages/home/HomePage';
import JuniorPromisePage from './pages/juniorPromise/JuniorPromisePage';
import LoginPage from './pages/login/LoginPage';
import OnboardingPage from './pages/onboarding/OnboardingPage';
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
import Step인증완료 from '@pages/onboarding/components/seniorOnboarding/Step인증완료';
import Step이메일입력 from '@pages/onboarding/components/juniorOnboarding/Step이메일입력';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <PromiseListPage />,
      },
      {
        path: 'promiseDetail',
        element: <PromiseDetail />,
      },
      {
        path: 'promiseDetailJunior',
        element: <PromiseDetailPageJunior />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'seniorOnboarding',
        element: <OnboardingPage />,
        children: [
          {
            index: true,
            element: <Navigate to="step1" />,
          },
          {
            path: 'step1',
            element: <Step약관동의 />,
          },
          {
            path: 'step2',
            element: <Step개인정보입력 />,
          },
          {
            path: 'step3',
            element: <Step학교선택 />,
          },
          {
            path: 'step4',
            element: <Step계열선택 />,
          },
          {
            path: 'step5',
            element: <Step학과선택 />,
          },
          {
            path: 'step6',
            element: <Step졸업인증 />,
          },
          {
            path: 'step7',
            element: <Step명함인증 />,
          },
          {
            path: 'step8',
            element: <Step인증완료 />,
          },
          {
            path: 'step9',
            element: <Step직무선택 />,
          },
          {
            path: 'step10',
            element: <Step재직기간 />,
          },
          {
            path: 'step11',
            element: <Step번호입력 />,
          },
        ],
      },
      {
        path: 'juniorOnboarding',
        element: <OnboardingPage />,
        children: [
          {
            index: true,
            element: <Navigate to="step1" />,
          },
          {
            path: 'step1',
            element: <Step약관동의 />,
          },
          {
            path: 'step2',
            element: <Step개인정보입력 />,
          },
          {
            path: 'step3',
            element: <Step번호입력 />,
          },
          {
            path: 'step4',
            element: <Step학교선택 />,
          },
          {
            path: 'step5',
            element: <Step이메일입력 />,
          },
          {
            path: 'step6',
            element: <Step계열선택 />,
          },
          {
            path: 'step7',
            element: <Step학과선택 />,
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
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
