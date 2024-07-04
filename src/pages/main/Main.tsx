import styled from '@emotion/styled';

const Main = () => {
  return <TestDiv>메인 테스트 할게요</TestDiv>;
};

export default Main;

const TestDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.Red};
  ${({ theme }) => theme.fonts.Head1_B_20};
`;
