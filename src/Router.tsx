import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
// import HomePage from './pages/home/HomePage';
import JuniorPromisePage from './pages/juniorPromise/JuniorPromisePage';
import LoginPage from './pages/login/LoginPage';
import OnboardingPage from './pages/onboarding/OnboardingPage';
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
        path: 'onboarding',
        element: <OnboardingPage />,
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
