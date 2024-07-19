import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';
import globalStyle from './styles/globalStyle';
import theme from './styles/theme';

const App = () => {
  // const navigate = useNavigate();

  const setScreenSize = () => {
    // vh 관련
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // window width 관련
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  // useEffect(() => {
  //   if (!localStorage.getItem('accessToken')) navigate('/join');
  // }, []);
  //

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <Outlet />
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(var(--vh, 1vh) * 100 - 44px);
  border: none;

  background-color: #fff;
`;
