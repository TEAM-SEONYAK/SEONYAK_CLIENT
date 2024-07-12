import styled from '@emotion/styled';
import { SearchIc } from '../../../assets/svgs';

interface searchBoxPropType {
  placeholder: string;
  handleInputClick?: () => void;
}

const SearchBox = ({ placeholder, handleInputClick }: searchBoxPropType) => {
  return (
    <InputWrapper>
      <Input type="text" placeholder={placeholder} onClick={handleInputClick} />
      <SearchIcon />
    </InputWrapper>
  );
};

export default SearchBox;

const InputWrapper = styled.div`
  display: flex;
  padding: 0.9rem 0.5rem 0.9rem 1.5rem;
  width: 33.5rem;
  background-color: ${({ theme }) => theme.colors.grayScaleLG1};
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.4rem 0 0.4rem;
  ${({ theme }) => theme.fonts.Title2_M_16};
  border: none;

  color: ${({ theme }) => theme.colors.grayScaleBG};
  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScaleMG2};
  }
`;

const SearchIcon = styled(SearchIc)`
  width: 3.3rem;
  height: 3.3rem;
`;
