import styled from '@emotion/styled';

const GrayLine = () => {
  return <Wrapper />;
};

export default GrayLine;

const Wrapper = styled.div`
  width: 100%;
  height: 1rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWG};
`;
