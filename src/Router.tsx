import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
// import HomePage from './pages/home/HomePage';
import JuniorPromisePage from './pages/juniorPromise/JuniorPromisePage';
import JuniorOnboardingPage from './pages/onboarding/juniorOnboarding/JuniorOnboardingPage';
import SeniorOnboardingPage from './pages/onboarding/seniorOnboarding/SeniorOnboardingPage';
import PromiseListPage from './pages/promiseList/PromiseListPage';
import SeniorProfilePage from './pages/seniorProfile/SeniorProfilePage';

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
        path: 'seniorOnboarding',
        element: <SeniorOnboardingPage />,
      },
      {
        path: 'juniorOnboarding',
        element: <JuniorOnboardingPage />,
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
