import { FullBtn } from '@components/commons/FullButton';
import styled from '@emotion/styled';

interface SeniorNamePropType {
  senior: string;
}

const JuniorPromiseComplete = ({ senior = '도리' }: SeniorNamePropType) => {
  const handleMyPromise = () => {
    // 나의 약속 페이지 이동 라우터 설정
    console.log('나의 약속으로 버튼 클릭');
  };
  return (
    <Wrapper>
      <Title>
        {senior} 선배님과의
        <br /> 약속 신청이 완료됐어요!
      </Title>
      <Img />
      <FullBtn isActive={true} text={'나의 약속으로'} onClick={handleMyPromise} />
      <HomeBtn>홈으로</HomeBtn>
    </Wrapper>
  );
};

export default JuniorPromiseComplete;

const Title = styled.div`
  ${({ theme }) => theme.fonts.Head1_B_20};
  position: fixed;
  top: 9.642rem;

  text-align: center;
`;

const HomeBtn = styled.div`
  position: fixed;
  bottom: 1.2rem;
  z-index: 9;

  color: ${({ theme }) => theme.colors.grayScaleMG1};
  text-decoration: underline;
  ${({ theme }) => theme.fonts.Title2_R_16};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
  ${({ theme }) => theme.fonts.Head1_B_20};
`;

const Img = styled.div`
  position: fixed;
  bottom: 12.7rem;

  width: 33.1rem;
  height: 32.1rem;

  background-color: ${({ theme }) => theme.colors.grayScaleLG2};
`;
