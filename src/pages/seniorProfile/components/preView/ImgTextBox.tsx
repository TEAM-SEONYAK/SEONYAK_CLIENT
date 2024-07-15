import styled from '@emotion/styled';

const ImgTextBox = ({ src, text }: { src?: string; text: string }) => {
  return (
    <Wrapper>
      <Img src={src} />
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default ImgTextBox;

const Wrapper = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  padding: 1.1rem 1.2rem;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScaleWG};
`;

const Img = styled.img`
  background-color: ${({ theme }) => theme.colors.grayScaleLG2};
  width: 5.5rem;
  height: 100;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body1_M_14};
  white-space: wrap;
  width: 23.8rem;
`;
