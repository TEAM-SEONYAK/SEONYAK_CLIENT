import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import styled from '@emotion/styled';
import FinalJson from '../../assets/lottie/final.json';

const GetTreasureLottie = () => {
  //lottie
  const likecontainer = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    console.log(FinalJson);

    if (likecontainer.current !== null) {
      const animation = Lottie.loadAnimation({
        container: likecontainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: FinalJson,
      });

      return () => {
        animation.destroy();
      };
    }
  }, []);

  return (
    <div>
      <NoMore ref={likecontainer}></NoMore>
    </div>
  );
};

const NoMore = styled.div`
  position: absolute;
  z-index: 1000;

  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export default GetTreasureLottie;
