import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { FullBtn } from './components/commons/Button';
import Input from './components/commons/Input';
import ProgressBar from './components/commons/ProgressBar';
import globalStyle from './styles/globalStyle';
import theme from './styles/theme';

const App = () => {
  const setScreenSize = () => {
    // vh 관련
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // window width 관련
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}px`);
  };

  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  const onClickTest = () => {
    alert('hi');
  };

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <ProgressBar max={10} current={1} />
        <Input
          placeholder="주요 경력 및 이력을 최대 60자까지 작성해주세요"
          wordLimit={200}
          height={24.1}
          inputVal={inputVal}
          setInputVal={setInputVal}
        />
        <FullBtn isActive={true} text="다음으로" onClick={onClickTest} />
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100vw;
  min-height: calc(var(--vh, 1vh) * 100);
  border: none;

  background-color: #fff;
`;
