import { ReloadIc } from '@assets/svgs';
import styled from '@emotion/styled';

export const BottomSheetBg = () => {
  return (
    <>
      <Background>
        <TitleWrapper>
          <Line />
          <Title>원하는 선배를 찾아볼까요?</Title>
          <Desc>계열, 직무로 원하는 선배를 찾을 수 있어요.</Desc>
        </TitleWrapper>
        <ButtonWrapper>
          <ReloadIcon type="reset">
            <ReloadIc />
          </ReloadIcon>
          <ExitBottomSheet type="button">적용할래요</ExitBottomSheet>
        </ButtonWrapper>
      </Background>
    </>
  );
};

const Background = styled.form`
  display: flex;
  flex-direction: column;
  gap: 43.5rem;

  width: 100%;
  height: 61rem;
  border-radius: 16px 16px 0 0;

  background: pink;

  /* background: ${({ theme }) => theme.colors.grayScaleWhite}; */
`;
const TitleWrapper = styled.header`
  margin-bottom: 0.4rem;
  padding: 2rem 0 0 2rem;
`;

const Line = styled.div`
  width: 4.4rem;
  height: 0;
  margin: 0 0 3rem 14.5rem;
  border: 1.5px solid ${({ theme }) => theme.colors.grayScaleLG2};
`;
const Title = styled.h1`
  ${({ theme }) => theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const Desc = styled.p`
  ${({ theme }) => theme.fonts.Caption1_R_12};
  color: ${({ theme }) => theme.colors.grayScaleMG1};
`;

const ButtonWrapper = styled.footer`
  display: flex;
  gap: 1.1rem;
  justify-content: center;
  align-items: center;

  padding: 0.3rem 2rem;
`;
const ReloadIcon = styled.button`
  width: 5rem;
  height: 5rem;
  padding: 1.8rem 1.8rem 1.898rem 1.9rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.grayScaleLG2};
`;

const ExitBottomSheet = styled.button`
  width: 27.4rem;
  height: 5rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.grayScaleMG1};

  color: ${({ theme }) => theme.colors.grayScaleWhite};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;
