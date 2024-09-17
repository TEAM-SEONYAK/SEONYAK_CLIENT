import styled from '@emotion/styled';

const Toaster = ({ text }: { text: string }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Toaster;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 10.5rem;
  left: 50%;
  z-index: 3;

  padding: 0.8rem 2rem;
  border-radius: 40px;

  background-color: ${({ theme }) => theme.colors.primaryBlue50};
  transform: translateX(-50%);
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.primaryBlue400};
  ${({ theme }) => theme.fonts.Caption2_SB_12};
`;
