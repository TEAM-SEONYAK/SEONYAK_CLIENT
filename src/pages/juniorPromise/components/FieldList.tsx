import { CheckItemIc } from '@assets/svgs';
import styled from '@emotion/styled';
interface IFieldList {
  field: string;
  selectedField: boolean[];
  handleChipField: (fieldId: number) => void;
  fieldId: number;
}
export const FieldList = (props: IFieldList) => {
  const { field, selectedField, handleChipField, fieldId } = props;
  const isSelected = selectedField[fieldId];
  return (
    <FieldWrapper onClick={() => handleChipField(fieldId)}>
      <FieldTitle isSelected={isSelected}>{field}</FieldTitle>
      <CheckBox isselected={isSelected + ''} />
    </FieldWrapper>
  );
};

const FieldWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 1rem;
  justify-content: space-between;

  padding: 1rem 0;
`;
const FieldTitle = styled.p<{ isSelected: boolean }>`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme, isSelected }) => (isSelected === true ? theme.colors.Blue : theme.colors.grayScaleDG)};
`;

const CheckBox = styled(CheckItemIc)<{ isselected: string }>`
  fill: ${({ theme, isselected }) => (isselected === 'true' ? theme.colors.Blue : theme.colors.grayScaleDG)};
`;
