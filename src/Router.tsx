import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/home/Home';
import JuniorPromisePage from './pages/juniorPromise/JuniorPromise';
import MyPage from './pages/myPage/MyPage';
import JuniorOnboardingPath from './pages/onboarding/juniorOnboarding/JuniorOnboarding';
import SeniorOnboardingPage from './pages/onboarding/seniorOnboarding/SeniorOnboarding';
import SeniorProfilePage from './pages/seniorProfile/SeniorProfile';

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
        path: 'seniorOnboarding',
        element: <SeniorOnboardingPage />,
      },
      {
        path: 'juniorOnboarding',
        element: <JuniorOnboardingPath />,
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
