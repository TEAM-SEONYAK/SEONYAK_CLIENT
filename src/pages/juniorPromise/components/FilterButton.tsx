import styled from '@emotion/styled';
import React from 'react';
import { ArrowDownIc } from '../../../assets/svgs/index';
interface FilterButtonProps {
  handleFilterActiveBtn: (btnText: string) => void;
  positionChipNum: number;
  fieldChipNum: number;
}
export const FilterButton: React.FC<FilterButtonProps> = ({ handleFilterActiveBtn, positionChipNum, fieldChipNum }) => {
  return (
    <FilterBtnContainer>
      <FilterFieldBtn type="button" onClick={() => handleFilterActiveBtn('계열')} $fieldChipNum={fieldChipNum}>
        <FiledName $fieldChipNum={fieldChipNum}>계열</FiledName>
        {fieldChipNum > 0 && <ChipNum>{fieldChipNum}</ChipNum>}
        <FieldArrowDownIc $fieldchipnum={fieldChipNum + ''} />
      </FilterFieldBtn>

      <FilterPositionBtn type="button" onClick={() => handleFilterActiveBtn('직무')} $positionChipNum={positionChipNum}>
        <PositionName $positionChipNum={positionChipNum}>직무</PositionName>
        {positionChipNum > 0 && <ChipNum>{positionChipNum}</ChipNum>}
        <PositionArrowDown $positionchipnum={positionChipNum + ''} />
      </FilterPositionBtn>
    </FilterBtnContainer>
  );
};
const FilterBtnContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const FilterFieldBtn = styled.button<{ $fieldChipNum: number }>`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme, $fieldChipNum }) => ($fieldChipNum > 0 ? theme.colors.Blue : theme.colors.grayScaleWG)};
  border-radius: 6px;

  background: ${({ theme, $fieldChipNum }) =>
    $fieldChipNum > 0 ? theme.colors.primaryBlue100 : theme.colors.grayScaleLG2};

  ${({ theme }) => theme.fonts.Caption2_SB_12};
`;
const FilterPositionBtn = styled.button<{ $positionChipNum: number }>`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  padding: 0.8rem 1rem;
  border: 1px solid
    ${({ theme, $positionChipNum }) => ($positionChipNum > 0 ? theme.colors.Blue : theme.colors.grayScaleWG)};
  border-radius: 6px;

  background: ${({ theme, $positionChipNum }) =>
    $positionChipNum > 0 ? theme.colors.primaryBlue100 : theme.colors.grayScaleLG2};

  ${({ theme }) => theme.fonts.Caption2_SB_12};
`;
const FiledName = styled.p<{ $fieldChipNum: number }>`
  ${({ theme }) => theme.fonts.Caption2_SB_12};
  color: ${({ theme, $fieldChipNum }) => ($fieldChipNum > 0 ? theme.colors.Blue : theme.colors.grayScaleDG)};
`;
const ChipNum = styled.p`
  color: ${({ theme }) => theme.colors.Blue};
`;
const PositionName = styled.p<{ $positionChipNum: number }>`
  ${({ theme }) => theme.fonts.Caption2_SB_12};
  color: ${({ theme, $positionChipNum }) => ($positionChipNum > 0 ? theme.colors.Blue : theme.colors.grayScaleDG)};
`;

const FieldArrowDownIc = styled(ArrowDownIc)<{ $fieldchipnum: string }>`
  path {
    stroke: ${({ theme, $fieldchipnum }) => ($fieldchipnum > '0' ? theme.colors.Blue : theme.colors.grayScaleDG)};
  }
`;

const PositionArrowDown = styled(ArrowDownIc)<{ $positionchipnum: string }>`
  path {
    stroke: ${({ theme, $positionchipnum }) => ($positionchipnum > '0' ? theme.colors.Blue : theme.colors.grayScaleDG)};
  }
`;
