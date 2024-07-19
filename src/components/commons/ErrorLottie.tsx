import { useState, useRef, useEffect } from 'react';
import Lottie from 'lottie-web';

// Lottie 컴포넌트 정의
const LottieComponent = ({ animationData, ...restProps }) => {
  // Lottie 애니메이션 컨테이너에 대한 ref
  const animationContainer = useRef(null);
  const [animationInstance, setAnimationInstance] = useState(null);

  // Lottie 애니메이션 로드 및 초기화
  useEffect(() => {
    // Lottie 애니메이션 옵션 설정
    const animationOptions = {
      container: animationContainer.current,
      renderer: 'svg',
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    // Lottie 애니메이션 로드
    const animation = Lottie.loadAnimation(animationOptions);
    // Lottie 애니메이션 상태 업데이트
    setAnimationInstance(animation);

    //  컴포넌트 unmount 시 애니메이션 제거
    return () => {
      animation.destroy();
    };
  }, [animationData]);

  return <div ref={animationContainer} {...restProps} />;
};

export default LottieComponent;
