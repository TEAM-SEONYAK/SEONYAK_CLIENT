import styled from '@emotion/styled';
import { SearchIc } from '../../../assets/svgs';

interface searchBoxPropType {
  placeholder: string;
  handleInputClick?: () => void;
  searchValue: string;
  // eslint-disable-next-line no-unused-vars
  handleSearchValue: (selectedValue: string) => void;
}

const SearchBox = ({ placeholder, handleInputClick, searchValue, handleSearchValue }: searchBoxPropType) => {
  // eslint-disable-next-line no-undef
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchValue(e.target.value);
  };
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onClick={handleInputClick}
        onChange={handleInputChange}
      />
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
