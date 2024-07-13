import styled from '@emotion/styled';

interface IPositionList {
  position: string;
  selectedPosition: number;
  // eslint-disable-next-line no-unused-vars
  handleChipPosition: (positionId: number) => void;
  positionId: number;
}
export const PositionList = ({ position, selectedPosition, handleChipPosition, positionId }: IPositionList) => {
  return (
    <>
      <PositionTitle $isSelected={selectedPosition === positionId} onClick={() => handleChipPosition(positionId)}>
        {position}
      </PositionTitle>
    </>
  );
};

const PositionTitle = styled.p<{ $isSelected: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
  border: 1px solid
    ${({ theme, $isSelected }) => ($isSelected ? theme.colors.transparentBlue_50 : theme.colors.grayScaleLG2)};
  border-radius: 8px;

  background: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.primaryBlue50 : theme.colors.grayScaleLG2)};

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.Blue : theme.colors.grayScaleDG)};
`;
