import { CheckItemIc } from '@assets/svgs';
import styled from '@emotion/styled';

interface FieldListPropTypes {
  field: string;
  handleChipField: (fieldName: string) => void;
  chipFieldName: string[];
}

export const FieldList = (props: FieldListPropTypes) => {
  const { field, handleChipField, chipFieldName } = props;
  const isSelected = chipFieldName.includes(field);

  const handleSelect = () => {
    handleChipField(field);
  };
  return (
    <FieldWrapper onClick={handleSelect}>
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
  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.Blue : theme.colors.grayScaleDG)};
`;

const CheckBox = styled(CheckItemIc)<{ isselected: string }>`
  fill: ${({ theme, isselected }) => (isselected === 'true' ? theme.colors.Blue : theme.colors.grayScaleDG)};
`;
