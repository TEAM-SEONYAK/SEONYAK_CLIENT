import styled from '@emotion/styled';
import { SearchIc } from '../../../assets/svgs';

const SearchBox = () => {
  return (
    <div>
      <Input type="text" />
      <SearchIc />
    </div>
  );
};

export default SearchBox;

const Input = styled.input`
  width: 100%;
  height: 5.1rem;
  padding: 1rem 1.5rem;
  ${({ theme }) => theme.fonts.Title2_M_16};
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleBG};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScaleMG2};
  }
`;
