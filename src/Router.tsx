import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/home/Home';
import JuniorPromise from './pages/juniorPromise/JuniorPromise';
import MyPage from './pages/myPage/MyPage';
import JuniorOnboarding from './pages/onboarding/juniorOnboarding/JuniorOnboarding';
import SeniorOnboarding from './pages/onboarding/seniorOnboarding/SeniorOnboarding';
import SeniorProfile from './pages/seniorProfile/SeniorProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'seniorOnboarding',
        element: <SeniorOnboarding />,
      },
      {
        path: 'juniorOnboarding',
        element: <JuniorOnboarding />,
      },
      {
        path: 'seniorProfile',
        element: <SeniorProfile />,
      },
      {
        path: 'juniorPromise',
        element: <JuniorPromise />,
      },
      {
        path: 'myPage',
        element: <MyPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
