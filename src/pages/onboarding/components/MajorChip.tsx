import { CancelIc } from '@assets/svgs';
import styled from '@emotion/styled';

interface majorChipPropType {
  major: string;
  handleClose: (deleteMajor: string) => void;
}

const MajorChip = ({ major, handleClose }: majorChipPropType) => {
  return (
    <Wrapper>
      <Text>{major}</Text>
      <CancelIc onClick={() => handleClose(major)} style={{cursor: 'pointer'}}/>
    </Wrapper>
  );
};

export default MajorChip;

const Wrapper = styled.div`
  display: flex;

  width: fit-content;
  padding: 0 0.4rem 0 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScaleLG2};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleWG};
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Caption3_M_12};
  align-self: center;

  white-space: nowrap;
`;
