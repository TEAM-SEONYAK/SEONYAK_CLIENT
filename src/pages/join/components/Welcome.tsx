import styled from '@emotion/styled';
import Lottie from 'lottie-web';
import { useRef, useEffect } from 'react';
import WelcomeJson from '@assets/lottie/welcome.json';

const Welcome = () => {
  const likecontainer = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    if (likecontainer.current !== null) {
      const animation = Lottie.loadAnimation({
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
