import { Header } from '@components/commons/Header';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { ArrowLeftIc } from '../../../assets/svgs';

interface bottomSheetPropType {
  handleClose: () => void;
  children: ReactNode;
}
const BottomSheet = ({ handleClose, children }: bottomSheetPropType) => {
  return (
    <Wrapper>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={handleClose} />
      <Divider />
      {children}
    </Wrapper>
  );
};

export default BottomSheet;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100vw;
  height: 100vh;
  padding-top: 4rem;

  background-color: white;
`;

const Divider = styled.hr`
  width: 100%;
  height: 0;
  stroke-width: 1.4px;
  stroke: ${({ theme }) => theme.colors.grayScaleLG2};
`;
