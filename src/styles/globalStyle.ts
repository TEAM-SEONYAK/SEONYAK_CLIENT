import { css } from '@emotion/react';
import reset from 'emotion-reset';

const globalStyle = css`
  ${reset}
  :root {
    --vh: 100%;
  }

  #root,
  html,
  body {
    max-width: 43rem;
    margin: 0 auto;

    background-color: #f5f5f5;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }

  #root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }

  * {
    max-width: 43rem;
    box-sizing: border-box;

    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }

  html {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgb(0 0 0 / 0%);

    scroll-behavior: smooth;

    user-select: none;

    display: flex;
    justify-content: center;

    font-size: 62.5%;
  }

  body {
    position: relative;
    overscroll-behavior: none;

    line-height: 1;
    touch-action: manipulation;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;

    cursor: pointer;
  }

  button {
    border: none;

    background: none;

    font: inherit;

    cursor: pointer;
  }

  select {
    cursor: pointer;
  }

  textarea {
    outline: none;

    resize: none;
  }
`;

export default globalStyle;
