import { ReloadIc } from '@assets/svgs';
import styled from '@emotion/styled';

interface BottomSheetPropType {
  isSheetOpen: boolean;
  handleSheetOpen: () => void;
  handleSheetClose: () => void;
}

export const BottomSheetBg = ({ isSheetOpen, handleSheetOpen, handleSheetClose }: BottomSheetPropType) => {
  return (
    <TestBg>
      <TestBtn $isSheetOpen={isSheetOpen} onClick={handleSheetOpen}>
        바텀시트 올리는 버튼
      </TestBtn>
      <BottomSheetWrapper $isSheetOpen={isSheetOpen}>
        <TitleLayout>
          <Line />
          <Title>원하는 선배를 찾아볼까요?</Title>
          <Desc>계열, 직무로 원하는 선배를 찾을 수 있어요.</Desc>
        </TitleLayout>
        <ButtonLayout>
          <ReloadIcon type="reset">
            <ReloadIc />
          </ReloadIcon>
          <ExitBottomSheet type="button" onClick={handleSheetClose}>
            적용할래요
          </ExitBottomSheet>
        </ButtonLayout>
      </BottomSheetWrapper>
    </TestBg>
  );
};

const TestBg = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  height: 70.2rem;

  background: ${({ theme }) => theme.colors.Blue};
`;

const TestBtn = styled.button<{ $isSheetOpen: boolean }>`
  display: ${({ $isSheetOpen }) => ($isSheetOpen ? 'none' : 'flex')};
`;

const BottomSheetWrapper = styled.form<{ $isSheetOpen: boolean }>`
  display: ${({ $isSheetOpen }) => ($isSheetOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 43.5rem;
  position: absolute;
  z-index: 1;

  width: 100%;
  height: 61rem;
  margin-top: 5.7rem;
  border-radius: 16px 16px 0 0;

  background: ${({ theme }) => theme.colors.grayScaleWhite};
`;
const TitleLayout = styled.header`
  margin-bottom: 0.4rem;
  padding: 2rem 0 0 2rem;
`;

const Line = styled.div`
  width: 4.7rem;
  height: 0.3rem;
  margin: 1.4rem 16.4rem;
  border-radius: 5px;

  background: ${({ theme }) => theme.colors.grayScaleLG2};
`;
const Title = styled.h1`
  ${({ theme }) => theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const Desc = styled.p`
  ${({ theme }) => theme.fonts.Caption1_R_12};
  color: ${({ theme }) => theme.colors.grayScaleMG1};
`;

const ButtonLayout = styled.footer`
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
