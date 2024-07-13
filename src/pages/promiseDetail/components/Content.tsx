import styled from '@emotion/styled';

const Content = () => {
  return (
    <TitleContainer>
      <Title>나의 정보</Title>
      <ContentDiv>홍익대학교 조형대학 디자인컨버전스학부</ContentDiv>
    </TitleContainer>
  );
};

export default Content;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const ContentDiv = styled.div`
  width: 100%;
  padding: 1.1rem 0 1.1rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScaleLG1};
  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Body1_M_14}
`;
