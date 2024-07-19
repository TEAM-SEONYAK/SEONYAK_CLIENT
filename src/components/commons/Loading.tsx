import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import styled from '@emotion/styled';
import SpinnerJson from '../../assets/lottie/spinner.json';

const Loading = () => {
  //lottie
  const likecontainer = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    console.log(SpinnerJson);

    if (likecontainer.current !== null) {
      const animation = Lottie.loadAnimation({
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
  top: 40%;
  z-index: 10;

  width: 12rem;
  height: 12rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

export default Loading;
