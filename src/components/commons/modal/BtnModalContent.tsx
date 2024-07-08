import styled from '@emotion/styled';

const BtnModalContent = () => {
  return <Wrapper></Wrapper>;
};

export default BtnModalContent;

const Wrapper = styled.div`
  width: 24.5rem;
  height: 11.9rem;
  padding: 1.1rem 0 1.2rem 2rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};
`;
