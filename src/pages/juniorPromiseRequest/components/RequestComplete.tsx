import { ImgPromiseCompleteIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
interface SeniorNamePropType {
  seniorNickname: string;
}

const RequestComplete = ({ seniorNickname }: SeniorNamePropType) => {
  const navigate = useNavigate();

  const handleMyPromise = () => {
    // 나의 약속 페이지 이동 라우터 설정
    navigate('/promiseList');
  };

  const handleGoHome = () => {
    navigate('/juniorPromise');
  };
  return (
    <Wrapper>
      <Title>
        {seniorNickname} 선배님과의
        <br /> 약속 신청이 완료됐어요!
      </Title>
      <ImgPromiseCompleteIc />
      <FullBtn paddingBottom={5.6} isActive={true} text={'나의 약속으로'} onClick={handleMyPromise} />
      <HomeBtn onClick={handleGoHome}>홈으로</HomeBtn>
    </Wrapper>
  );
};

export default RequestComplete;

const Title = styled.div`
  ${({ theme }) => theme.fonts.Head1_B_20};
  position: fixed;
  top: 9.642rem;

  text-align: center;
`;

const HomeBtn = styled.div`
  position: fixed;
  bottom: 2.4rem;
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
  z-index: 10;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
  ${({ theme }) => theme.fonts.Head1_B_20};
`;
