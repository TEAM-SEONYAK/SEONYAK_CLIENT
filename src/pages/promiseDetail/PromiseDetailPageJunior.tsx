// 유저가 후배일경우
import { ArrowLeftIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import { Header } from '@components/commons/Header';
import styled from '@emotion/styled';
import ProfileContainer from '@pages/promiseList/components/ProfileContainer';
// import { profileCardDataType } from '@pages/promiseList/types/type';

const PromiseDetailPageJunior = () => {
  const profileCardData = {
    appointmentId: 1,
    appointmentStatus: 'PENDING',
    nickname: '조승희',
    image: 'https://example.com/senior1.jpg',
    company: 'SOPT Makers',
    field: '공학계열',
    position: '개발',
    detailPosition: 'FE챕터장',
    level: '2년차',
  };
  return (
    <>
      <Header LeftSvg={ArrowLeftIc} title="자세히 보기" />
      <Wrapper>
        <Layout>
          <TitleContainer>
            <Title>예솔 선배님의 프로필</Title>
            <PromiseDiv>
              <ProfileContainer userRole="JUNIOR" type="default" profileCardData={profileCardData} isarrow="false" />
            </PromiseDiv>
          </TitleContainer>

          <TitleContainer>
            <Title>나의 정보</Title>
            <Content>홍익대학교 조형대학 디자인컨버전스학부</Content>
          </TitleContainer>

          <TitleContainer>
            <Title>예솔 선배님과 상담하고 싶은 내용</Title>
            <WrittenContent>
              저는 기술적 전문성과 혁신적인 아이디어로 고객의 니즈를 해결하는 개발자입니다. 오랜 기간 쌓아온 경험과
              노하우를 바탕으로 고객님의 요구사항을 신속하고 정확하게 파악하여 최적의 솔루션을 제공해 드리겠습니다. 마치
              제가 직접 운영하는 가게처럼 열정을 다해 고객 맞춤형 서비스를 설계하겠습니다.는 가게처럼 열정을 다해 고객
              맞춤형 서비스를 설계하겠습니다.습니다.다
            </WrittenContent>
          </TitleContainer>
        </Layout>
        <BtnWrapper>
          <FullBtn
            text="이미 신청한 선약은 취소할 수 없어요"
            onClick={() => {
              console.log('hi');
            }}
          />
          <BtnBackground />
        </BtnWrapper>
      </Wrapper>
    </>
  );
};

export default PromiseDetailPageJunior;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1.974rem 0 2.026rem;
  gap: 3rem;

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
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const PromiseDiv = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 1rem 0 1rem 1.209rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScaleLG1};
  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
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

const BtnBackground = styled.div`
  width: 100%;
  height: 6.1rem;
  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
  z-index: 2;
  position: fixed;
  bottom: 0;
`;
