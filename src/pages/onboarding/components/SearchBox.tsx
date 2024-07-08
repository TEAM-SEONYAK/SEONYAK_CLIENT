import styled from '@emotion/styled';

const SearchBox = () => {
  return (
    <div>
      <Input type="text" />
    </div>
  );
};

export default SearchBox;

const Input = styled.input`
  display: flex;
  align-items: center;
`;
