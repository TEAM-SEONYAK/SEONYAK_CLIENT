import styled from '@emotion/styled';
import { useRef, useEffect } from 'react';

import * as lottie from 'lottie-web/build/player/lottie_light';
import WelcomeJson from '@assets/lottie/welcome.json';

type LottiePlayer = typeof lottie.default;
const lottiePlayer = lottie as any as LottiePlayer;

const Welcome = () => {
  const likecontainer = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    if (likecontainer.current !== null) {
      const animation = lottiePlayer.loadAnimation({
        container: likecontainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: WelcomeJson,
      });

      return () => {
        animation.destroy();
      };
    }
  }, []);

  return (
    <Wrapper>
      <Container ref={likecontainer}></Container>
    </Wrapper>
  );
};

const Container = styled.div`
  z-index: 3;

  width: 35rem;
  height: 35rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  bottom: 0;
  left: 50%;
  z-index: 3;

  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
`;
export default Welcome;
