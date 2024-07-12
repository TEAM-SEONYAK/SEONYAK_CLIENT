import { ArrowLeftIc } from '@assets/svgs';
import { Header } from '@components/commons/Header';
import styled from '@emotion/styled';

const PromiseDetail = () => {
  return (
    <>
      <Header LeftSvg={ArrowLeftIc} title="자세히 보기" />
      <Wrapper>
        <Layout>
          <TitleContainer>
            <Title>아가라고요 후배님의 정보</Title>
            <Content>홍익대학교 조형대학 디자인컨버전스학부</Content>
          </TitleContainer>

          <TitleContainer>
            <Title>예솔 선배님과 상담하고 싶은 내용</Title>
            <ContentContainer>
              <Content>면접에 관해서 물어보고 싶어요</Content>
              <Content>면접에 관해서 물어보고 싶어요</Content>
              <Content>면접에 관해서 물어보고 싶어요</Content>
              {/* <WrittenContent>
                저는 기술적 전문성과 혁신적인 아이디어로 고객의 니즈를 해결하는 개발자입니다. 오랜 기간 쌓아온 경험과
                노하우를 바탕으로 고객님의 요구사항을 신속하고 정확하게 파악하여 최적의 솔루션을 제공해 드리겠습니다.
                마치 제가 직접 운영하는 가게처럼 열정을 다해 고객 맞춤형 서비스를 설계하겠습니다.는 가게처럼 열정을 다해
                고객 맞춤형 서비스를 설계하겠습니다.습니다.다
              </WrittenContent> */}
            </ContentContainer>
          </TitleContainer>

          <TimeContainer>
            <Title>희망하는 약속 시간</Title>
            <Description>세 가지 시간 중 하나를 필수로 선택해주세요</Description>
            <ContentContainer>
              <Content>2024년 7월 7일 20:30 - 21:00</Content>
              <Content>2024년 7월 7일 20:30 - 21:00</Content>
              <Content>2024년 7월 7일 20:30 - 21:00</Content>
            </ContentContainer>
          </TimeContainer>
        </Layout>

        <BtnWrapper>
          <DeclineBtn type="button">거절하기</DeclineBtn>
          <AcceptBtn type="button">수락하기</AcceptBtn>
        </BtnWrapper>
        <BtnBackground />
      </Wrapper>
    </>
  );
};

export default PromiseDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1.765rem 0 2.035rem;

  width: 100vw;
  height: 100%;
  margin-top: 4.4rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
  border-top: 1px solid ${({ theme }) => theme.colors.grayScaleLG2};
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
  margin-bottom: 11.6rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.Title1_SB_16}
  color: ${({ theme }) => theme.colors.grayScaleBG}
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Content = styled.div`
  width: 100%;
  padding: 1.1rem 0 1.1rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScaleLG1};
  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Body1_M_14}
`;

const WrittenContent = styled.div`
  padding: 1rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScaleLG1};
  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.span`
  margin: 0.4rem 0 1rem 0;
  color: ${({ theme }) => theme.colors.grayScaleMG2};
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const BtnWrapper = styled.div`
  position: fixed;
  z-index: 3;
  bottom: 0;
  width: 100%;
  padding: 0 2.035rem 0 1.965rem;
  display: flex;
  gap: 1rem;
  margin-bottom: 3.977rem;
`;

const DeclineBtn = styled.button`
  border-radius: 5px;
  width: 10.6rem;
  padding: 1.55rem 0;
  background-color: ${({ theme }) => theme.colors.grayScaleBG};
  color: ${({ theme }) => theme.colors.grayScaleWhite};
  ${({ theme }) => theme.fonts.Head2_SB_18}
  cursor: pointer;
`;

const AcceptBtn = styled.button`
  border-radius: 5px;
  width: 21.9rem;
  padding: 1.55rem 0;
  background-color: ${({ theme }) => theme.colors.grayScaleMG2};
  color: ${({ theme }) => theme.colors.grayScaleWhite};
  cursor: pointer;
  ${({ theme }) => theme.fonts.Head2_SB_18}
`;

const BtnBackground = styled.div`
  width: 100%;
  height: 6.1rem;
  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
  z-index: 2;
  position: fixed;
  bottom: 0;
`;
