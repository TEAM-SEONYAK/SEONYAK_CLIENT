import styled from '@emotion/styled';

interface TitleBoxProps {
  title: string;
  description: string;
}

const TitleBox = ({ title, description }: TitleBoxProps) => {
  return (
    <Wrapper>
      <Heading1>{title}</Heading1>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default TitleBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Heading1 = styled.h1`
  ${({ theme }) => theme.fonts.Head1_B_20};
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;
