import styled from '@emotion/styled';
import React from 'react';
import { ArrowDownIc } from '../../../assets/svgs/index';
interface FilterButtonProps {
  handleFilterActiveBtn: (btnText: string) => void;
  positionChipNum: number;
  chipFieldName: string[];
}
export const FilterButton: React.FC<FilterButtonProps> = ({
  handleFilterActiveBtn,
  positionChipNum,
  chipFieldName,
}) => {
  return (
    <FilterBtnContainer>
      <FilterFieldBtn
        type="button"
        onClick={() => handleFilterActiveBtn('계열')}
        $chipFieldNameNum={chipFieldName.length}>
        <FiledName $chipFieldNameNum={chipFieldName.length}>계열</FiledName>
        {chipFieldName.length > 0 && <ChipNum>{chipFieldName.length}</ChipNum>}
        <FieldArrowDownIc chipfieldname={chipFieldName.length + ''} />
      </FilterFieldBtn>

      <FilterPositionBtn type="button" onClick={() => handleFilterActiveBtn('직무')} $positionChipNum={positionChipNum}>
        <PositionName $positionChipNum={positionChipNum}>직무</PositionName>
        {positionChipNum > 0 && <ChipNum>{positionChipNum}</ChipNum>}
        <PositionArrowDown positionchipnum={positionChipNum + ''} />
        <PositionArrowDown positionchipnum={positionChipNum + ''} />
      </FilterPositionBtn>
    </FilterBtnContainer>
  );
};
const FilterBtnContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const FilterFieldBtn = styled.button<{ $chipFieldNameNum: number }>`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  padding: 0.8rem 1rem;
  border: 1px solid
    ${({ theme, $chipFieldNameNum }) => ($chipFieldNameNum > 0 ? theme.colors.Blue : theme.colors.grayScaleWG)};
  border-radius: 6px;

  background: ${({ theme, $chipFieldNameNum }) =>
    $chipFieldNameNum > 0 ? theme.colors.primaryBlue100 : theme.colors.grayScaleLG2};

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
const FiledName = styled.p<{ $chipFieldNameNum: number }>`
  ${({ theme }) => theme.fonts.Caption2_SB_12};
  color: ${({ theme, $chipFieldNameNum }) => ($chipFieldNameNum > 0 ? theme.colors.Blue : theme.colors.grayScaleDG)};
`;
const ChipNum = styled.p`
  color: ${({ theme }) => theme.colors.Blue};
`;
const PositionName = styled.p<{ $positionChipNum: number }>`
  ${({ theme }) => theme.fonts.Caption2_SB_12};
  color: ${({ theme, $positionChipNum }) => ($positionChipNum > 0 ? theme.colors.Blue : theme.colors.grayScaleDG)};
`;

const FieldArrowDownIc = styled(ArrowDownIc)<{ chipfieldname: string }>`
  path {
    stroke: ${({ theme, chipfieldname }) => (chipfieldname > '0' ? theme.colors.Blue : theme.colors.grayScaleDG)};
  }
`;

const PositionArrowDown = styled(ArrowDownIc)<{ positionchipnum: string }>`
  path {
    stroke: ${({ theme, positionchipnum }) => (positionchipnum > '0' ? theme.colors.Blue : theme.colors.grayScaleDG)};
  }
`;
