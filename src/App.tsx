import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import Main from './pages/main/Main';
import globalStyle from './styles/globalStyle';
import theme from './styles/theme';

const App = () => {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <Main />
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  min-height: calc(var(--vh, 1vh) * 100);
  border: none;

  background-color: '#FFFFFF';
`;
