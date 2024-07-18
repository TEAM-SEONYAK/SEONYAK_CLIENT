import styled from '@emotion/styled';
import { SearchIc } from '../../../assets/svgs';

interface searchBoxPropType {
  autoFocus?: boolean;
  placeholder: string;
  handleInputClick?: () => void;
  searchValue?: string;
  handleSearchValue?: (selectedValue: string) => void;
}

const SearchBox = ({
  placeholder,
  handleInputClick,
  searchValue,
  handleSearchValue,
  autoFocus = false,
}: searchBoxPropType) => {
  // eslint-disable-next-line no-undef
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchValue && handleSearchValue(e.target.value);
  };
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onClick={handleInputClick}
        onChange={handleInputChange}
        autoFocus={autoFocus}
      />
      <SearchIcon />
    </InputWrapper>
  );
};

export default SearchBox;

const InputWrapper = styled.div`
  display: flex;

  width: 100%;
  padding: 0.9rem 0.5rem 0.9rem 1.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.4rem 0;
  ${({ theme }) => theme.fonts.Title2_M_16};
  border: none;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleBG};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScaleMG2};
  }
`;

const SearchIcon = styled(SearchIc)`
  width: 3.3rem;
  height: 3.3rem;
`;
