import { CheckItemIc } from '@assets/svgs';
import styled from '@emotion/styled';
interface IFieldList {
  field: string;
}
export const FieldList = ({ field }: IFieldList) => {
  return (
    <FieldWrapper>
      <FieldTitle>{field}</FieldTitle>
      <CheckBox type="checkbox" />
    </FieldWrapper>
  );
};
const FieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 2rem;
  padding: 1rem 0;
`;
const FieldTitle = styled.p`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;

const CheckBox = styled(CheckItemIc)`
  /* 추후 스타일링 변경을 위해 임의로 지정해둔 코드입니다! */
  display: flex;
`;
