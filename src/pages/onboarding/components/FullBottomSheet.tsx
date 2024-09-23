import { Header } from '@components/commons/Header';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { ArrowLeftIc } from '../../../assets/svgs';

interface bottomSheetPropType {
  handleClose: () => void;
  children: ReactNode;
  isSheetOpen: boolean;
}
const FullBottomSheet = ({ isSheetOpen, handleClose, children }: bottomSheetPropType) => {
  return (
    isSheetOpen && (
      <Wrapper>
        <Header LeftSvg={ArrowLeftIc} onClickLeft={handleClose} />
        <Divider />
        {children}
      </Wrapper>
    )
  );
};

export default FullBottomSheet;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);

  z-index: 10;

  width: 100vw;
  height: 100vh;
  padding-top: 4rem;

  background-color: white;
`;

const Divider = styled.hr`
  width: 100%;
  border: 1.4px solid ${({ theme }) => theme.colors.grayScaleLG2};
`;
