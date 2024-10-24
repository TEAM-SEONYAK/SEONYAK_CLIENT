import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { lazy, Suspense } from 'react';

import Layout from '@pages/onboarding/components/Layout';
import LoginCallback from '@pages/login/LoginCallback';
import HomePage from '@pages/home/HomePage';
import JoinPage from '@pages/join/JoinPage';
import ErrorPage from '@pages/errorPage/ErrorPage';
import Loading from '@components/commons/Loading';

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

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'join',
        element: (
          <Suspense fallback={<Loading />}>
            <JoinPage />
          </Suspense>
        ),
      },
      {
        path: 'promiseList/promiseDetail',
        element: (
          <Suspense fallback={<Loading />}>
            <PromiseDetail />
          </Suspense>
        ),
      },
      {
        path: 'promiseList/promiseDetailJunior',
        element: (
          <Suspense fallback={<Loading />}>
            <PromiseDetailPageJunior />
          </Suspense>
        ),
      },
      {
        path: 'promiseList',
        element: (
          <Suspense fallback={<Loading />}>
            <PromiseListPage />
          </Suspense>
        ),
      },
      {
        path: 'signup',
        element: (
          <Suspense fallback={<Loading />}>
            <SignupPage />
          </Suspense>
        ),
      },
      {
        path: 'auth/google',
        element: (
          <Suspense fallback={<Loading />}>
            <LoginCallback />
          </Suspense>
        ),
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
            element: (
              <Suspense fallback={<Loading />}>
                <Step약관동의 />
              </Suspense>
            ),
          },
          {
            path: '2',
            element: (
              <Suspense fallback={<Loading />}>
                <Step개인정보입력 />
              </Suspense>
            ),
          },
          {
            path: '3',
            element: (
              <Suspense fallback={<Loading />}>
                <Step학교선택 />
              </Suspense>
            ),
          },
          {
            path: '4',
            element: (
              <Suspense fallback={<Loading />}>
                <Step계열선택 />
              </Suspense>
            ),
          },
          {
            path: '5',
            element: (
              <Suspense fallback={<Loading />}>
                <Step학과선택 />
              </Suspense>
            ),
          },
          {
            path: '6',
            element: (
              <Suspense fallback={<Loading />}>
                <Step졸업인증 />
              </Suspense>
            ),
          },
          {
            path: '7',
            element: (
              <Suspense fallback={<Loading />}>
                <Step명함인증 />
              </Suspense>
            ),
          },
          {
            path: '8',
            element: (
              <Suspense fallback={<Loading />}>
                <Step직무선택 />
              </Suspense>
            ),
          },
          {
            path: '9',
            element: (
              <Suspense fallback={<Loading />}>
                <Step재직기간 />
              </Suspense>
            ),
          },
          {
            path: '10',
            element: (
              <Suspense fallback={<Loading />}>
                <Step번호입력 />
              </Suspense>
            ),
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
            element: (
              <Suspense fallback={<Loading />}>
                <Step약관동의 />
              </Suspense>
            ),
          },
          {
            path: '2',
            element: (
              <Suspense fallback={<Loading />}>
                <Step개인정보입력 />
              </Suspense>
            ),
          },
          {
            path: '3',
            element: (
              <Suspense fallback={<Loading />}>
                <Step번호입력 />
              </Suspense>
            ),
          },
          {
            path: '4',
            element: (
              <Suspense fallback={<Loading />}>
                <Step학교선택 />
              </Suspense>
            ),
          },
          {
            path: '5',
            element: (
              <Suspense fallback={<Loading />}>
                <Step이메일입력 />
              </Suspense>
            ),
          },
          {
            path: '6',
            element: (
              <Suspense fallback={<Loading />}>
                <Step계열선택 />
              </Suspense>
            ),
          },
          {
            path: '7',
            element: (
              <Suspense fallback={<Loading />}>
                <Step학과선택 />
              </Suspense>
            ),
          },
          {
            path: 'complete',
            element: (
              <Suspense fallback={<Loading />}>
                <StepComplete />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'seniorProfile',
        element: (
          <Suspense fallback={<Loading />}>
            <SeniorProfilePage />
          </Suspense>
        ),
      },
      {
        path: 'juniorPromise',
        element: (
          <Suspense fallback={<Loading />}>
            <JuniorPromisePage />
          </Suspense>
        ),
      },
      {
        path: 'juniorPromiseRequest',
        element: (
          <Suspense fallback={<Loading />}>
            <JuniorPromiseRequestPage />
          </Suspense>
        ),
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
