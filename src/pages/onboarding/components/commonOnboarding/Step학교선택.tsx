import styled from '@emotion/styled';
import SearchBox from '../SearchBox';

const Step학교선택 = () => {
  return (
    <Wrapper>
      <SearchBox placeholder="학교명을 입력해 주세요" />;
    </Wrapper>
  );
};

export default Step학교선택;

const Wrapper = styled.div`
  padding-top: 2rem;
`;
