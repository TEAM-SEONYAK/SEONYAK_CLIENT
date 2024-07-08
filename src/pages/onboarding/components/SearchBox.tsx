import styled from '@emotion/styled';
import { CancelIc, SearchIc } from '../../../assets/svgs';

const SearchBox = () => {
  return (
    <InputWrapper>
      <Input type="text" />
      <IconWrapper>
        <CancelIc />
        <SearchIc />
      </IconWrapper>
    </InputWrapper>
  );
};

export default SearchBox;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;
const Input = styled.input`
  position: absolute;

  width: 100%;
  height: 5.1rem;
  padding: 1rem 3.8rem 1rem 1.5rem;
  ${({ theme }) => theme.fonts.Title2_M_16};
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleBG};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScaleMG2};
  }
`;

const IconWrapper = styled.i`
  position: absolute;
  top: 0.9rem;
  right: 0.5rem;
`;
