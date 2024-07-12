import { ReloadIc } from '@assets/svgs';
import styled from '@emotion/styled';
import React from 'react';

interface BottomBarPropType {
  handleSheetClose: () => void;
}

const BottomBar: React.FC<BottomBarPropType> = ({ handleSheetClose }) => {
  return (
    <ButtonLayout>
      <ReloadBtn type="reset">
        <ReloadIcon />
      </ReloadBtn>
      <ExitBottomSheet type="button" onClick={handleSheetClose}>
        적용하기
      </ExitBottomSheet>
    </ButtonLayout>
  );
};

export default BottomBar;

const ReloadIcon = styled(ReloadIc)`
  width: 2rem;
  height: 2rem;
`;

const ButtonLayout = styled.footer`
  display: flex;
  gap: 1.1rem;
  justify-content: center;
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 9.4rem;
  margin-bottom: 2.6rem;
  padding: 1.5rem 0 3rem;

  background: ${({ theme }) => theme.colors.grayScaleWhite};
  box-shadow: 0 -8px 30px rgb(0 0 0 / 10%);
`;

const ReloadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5rem;
  height: 5rem;
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
