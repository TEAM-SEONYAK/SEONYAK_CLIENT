import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

import * as lottie from 'lottie-web/build/player/lottie_light';
import SpinnerJson from '../../assets/lottie/spinner_light.json';

type LottiePlayer = typeof lottie.default;
const lottiePlayer = lottie as any as LottiePlayer;

const Loading = () => {
  //lottie
  const likecontainer = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    if (likecontainer.current !== null) {
      const animation = lottiePlayer.loadAnimation({
        container: likecontainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: SpinnerJson,
      });

      return () => {
        animation.destroy();
      };
    }
  }, []);

  return (
    <Wrapper>
      <NoMore ref={likecontainer}></NoMore>
    </Wrapper>
  );
};

const NoMore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 999;

  width: 12rem;
  height: 12rem;
`;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

export default Loading;
