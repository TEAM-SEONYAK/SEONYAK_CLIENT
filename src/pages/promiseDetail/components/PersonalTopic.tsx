import styled from '@emotion/styled';

const PersonalTopic = () => {
  return (
    <Wrapper>
      <Title>예솔 선배님과 상담하고 싶은 내용</Title>
      <WrittenContent>
        저는 기술적 전문성과 혁신적인 아이디어로 고객의 니즈를 해결하는 개발자입니다. 오랜 기간 쌓아온 경험과 노하우를
        바탕으로 고객님의 요구사항을 신속하고 정확하게 파악하여 최적의 솔루션을 제공해 드리겠습니다. 마치 제가 직접
        운영하는 가게처럼 열정을 다해 고객 맞춤형 서비스를 설계하겠습니다.는 가게처럼 열정을 다해 고객 맞춤형 서비스를
        설계하겠습니다.습니다.다
      </WrittenContent>
    </Wrapper>
  );
};

export default PersonalTopic;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const WrittenContent = styled.div`
  padding: 1rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScaleLG1};
  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Body1_M_14};
`;
