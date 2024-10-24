import styled from '@emotion/styled';

const Review = () => {
  return (
    <Wrapper>
      <Meta>리뷰보기</Meta>
      <ReviewBox>아직 준비 중인 기능입니다</ReviewBox>
    </Wrapper>
  );
};

export default Review;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 3.6rem;
`;
const Meta = styled.p`
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

const ReviewBox = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 4.4rem 8.7rem 4.3rem 8.6rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWG};

  color: ${({ theme }) => theme.colors.grayScaleMG1};
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;
