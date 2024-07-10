import { ReloadIc } from '@assets/svgs';
import { keyframes } from '@emotion/react';
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
  height: 100dvh;

  background: ${({ theme }) => theme.colors.Blue};
`;

const TestBtn = styled.button<{ $isSheetOpen: boolean }>`
  display: flex;
  display: ${({ $isSheetOpen }) => ($isSheetOpen ? 'none' : 'flex')};
`;

// 바텀시트 올라오는 애니메이션
const SheetOpenAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// 바텀시트 내려가는 애니메이션
const SheetCloseAnimation = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const BottomSheetWrapper = styled.form<{ $isSheetOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  z-index: 1;

  width: 100%;
  height: auto;
  border-radius: 16px 16px 0 0;

  background: ${({ theme }) => theme.colors.grayScaleWhite};

  opacity: ${({ $isSheetOpen }) => ($isSheetOpen ? 1 : 0)};
  animation: ${({ $isSheetOpen }) =>
    $isSheetOpen ? `${SheetOpenAnimation} 250ms ease-out` : `${SheetCloseAnimation} 250ms ease-out`};
  transition:
    transform 250ms ease-out,
    opacity 250ms ease-out;

  transform: ${({ $isSheetOpen }) => ($isSheetOpen ? 'translateY(0)' : 'translateY(100%)')};
`;

const TitleLayout = styled.header`
  padding: 1.4rem 16.1rem 1.6rem 2rem;
`;

const Line = styled.div`
  width: 4.7rem;
  height: 0.3rem;
  margin: 0 14.4rem 3.3rem;
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

// import { ReloadIc } from '@assets/svgs';
// import { keyframes } from '@emotion/react';
// import styled from '@emotion/styled';

// interface BottomSheetPropType {
//   isSheetOpen: boolean;
//   handleSheetOpen: () => void;
//   handleSheetClose: () => void;
// }

// export const BottomSheetBg = ({ isSheetOpen, handleSheetOpen, handleSheetClose }: BottomSheetPropType) => {
//   return (
//     <TestBg>
//       <TestBtn $isSheetOpen={isSheetOpen} onClick={handleSheetOpen}>
//         바텀시트 올리는 버튼
//       </TestBtn>
//       <BottomSheetWrapper $isSheetOpen={isSheetOpen}>
//         <TitleLayout>
//           <Line />
//           <Title>원하는 선배를 찾아볼까요?</Title>
//           <Desc>계열, 직무로 원하는 선배를 찾을 수 있어요.</Desc>
//         </TitleLayout>
//         <ButtonLayout>
//           <ReloadIcon type="reset">
//             <ReloadIc />
//           </ReloadIcon>
//           <ExitBottomSheet type="button" onClick={handleSheetClose}>
//             적용할래요
//           </ExitBottomSheet>
//         </ButtonLayout>
//       </BottomSheetWrapper>
//     </TestBg>
//   );
// };

// const TestBg = styled.div`
//   position: relative;
//   z-index: 2;

//   width: 100%;
//   height: 100dvh;

//   background: ${({ theme }) => theme.colors.Blue};
// `;

// const TestBtn = styled.button<{ $isSheetOpen: boolean }>`
//   display: flex;
//   display: ${({ $isSheetOpen }) => ($isSheetOpen ? 'none' : 'flex')};
// `;

// // 바텀시트 올라오는 애니메이션
// const SheetOpenAnimation = keyframes`
//   from {
//     transform: translateY(100%);
//     opacity: 0;
//   }

//   to {
//     transform: translateY(0);
//     opacity: 1;
//   }
// `;

// // 바텀시트 내려가는 애니메이션
// const SheetCloseAnimation = keyframes`
//   from {
//     transform: translateY(0);
//     opacity: 1;
//   }

//   to {
//     transform: translateY(100%);
//     opacity: 0;
//   }
// `;

// const BottomSheetWrapper = styled.form<{ $isSheetOpen: boolean }>`
//   display: flex;
//   flex-direction: column;

//   /* gap: 43.5rem; */
//   position: bottom;
//   top: 0;
//   z-index: 1;

//   width: 100%;
//   height: auto;
//   border-radius: 16px 16px 0 0;

//   background: ${({ theme }) => theme.colors.grayScaleWhite};

//   opacity: ${({ $isSheetOpen }) => ($isSheetOpen ? 1 : 0)};
//   animation: ${({ $isSheetOpen }) =>
//     $isSheetOpen ? `${SheetOpenAnimation} 250ms ease-out` : `${SheetCloseAnimation} 250ms ease-out`};
//   transition:
//     transform 250ms ease-out,
//     opacity 250ms ease-out;

//   transform: ${({ $isSheetOpen }) => ($isSheetOpen ? 'translateY(0)' : 'translateY(100%)')};
// `;

// const TitleLayout = styled.header`
//   padding: 1.4rem 16.1rem 1.6rem 2rem;
// `;

// const Line = styled.div`
//   width: 4.7rem;
//   height: 0.3rem;
//   margin: 0 14.4rem 3.3rem;
//   border-radius: 5px;

//   background: ${({ theme }) => theme.colors.grayScaleLG2};
// `;
// const Title = styled.h1`
//   ${({ theme }) => theme.fonts.Head2_SB_18};
//   color: ${({ theme }) => theme.colors.grayScaleBG};
// `;

// const Desc = styled.p`
//   ${({ theme }) => theme.fonts.Caption1_R_12};
//   color: ${({ theme }) => theme.colors.grayScaleMG1};
// `;

// const ButtonLayout = styled.footer`
//   display: flex;
//   gap: 1.1rem;
//   justify-content: center;
//   align-items: center;

//   padding: 0.3rem 2rem;
// `;
// const ReloadIcon = styled.button`
//   width: 5rem;
//   height: 5rem;
//   padding: 1.8rem 1.8rem 1.898rem 1.9rem;
//   border-radius: 8px;

//   background: ${({ theme }) => theme.colors.grayScaleLG2};
// `;

// const ExitBottomSheet = styled.button`
//   width: 27.4rem;
//   height: 5rem;
//   border-radius: 8px;

//   background: ${({ theme }) => theme.colors.grayScaleMG1};

//   color: ${({ theme }) => theme.colors.grayScaleWhite};

//   ${({ theme }) => theme.fonts.Head2_SB_18};
// `;
