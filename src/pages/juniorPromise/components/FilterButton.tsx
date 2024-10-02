import styled from '@emotion/styled';
import { ArrowDownIc } from '../../../assets/svgs/index';
interface FilterButtonPropTypes {
  handleFilterActiveBtn: (btnText: string) => void;
  chipPositionName: string[];
  chipFieldName: string[];
}
export const FilterButton = (props: FilterButtonPropTypes) => {
  const { handleFilterActiveBtn, chipPositionName, chipFieldName } = props;

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

      <FilterPositionBtn
        type="button"
        onClick={() => handleFilterActiveBtn('직무')}
        $chipPositionNameNum={chipPositionName.length}>
        <PositionName $positionChipNum={chipPositionName.length}>직무</PositionName>
        {chipPositionName.length > 0 && <ChipNum>{chipPositionName.length}</ChipNum>}
        <PositionArrowDown chippositionname={chipPositionName.length + ''} />
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
const FilterPositionBtn = styled.button<{ $chipPositionNameNum: number }>`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  padding: 0.8rem 1rem;
  border: 1px solid
    ${({ theme, $chipPositionNameNum }) => ($chipPositionNameNum > 0 ? theme.colors.Blue : theme.colors.grayScaleWG)};
  border-radius: 6px;

  background: ${({ theme, $chipPositionNameNum }) =>
    $chipPositionNameNum > 0 ? theme.colors.primaryBlue100 : theme.colors.grayScaleLG2};

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

const PositionArrowDown = styled(ArrowDownIc)<{ chippositionname: string }>`
  path {
    stroke: ${({ theme, chippositionname }) => (chippositionname > '0' ? theme.colors.Blue : theme.colors.grayScaleDG)};
  }
`;
