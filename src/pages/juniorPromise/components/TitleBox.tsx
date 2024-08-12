import styled from '@emotion/styled';

interface TitleBoxProps {
  title: string;
  description: string;
}

const TitleBox = ({ title, description }: TitleBoxProps) => {
  return (
    <Wrapper>
      <Heading2>{title}</Heading2>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default TitleBox;

const Heading2 = styled.h3`
  ${({ theme }) => theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;
const Description = styled.span`
  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;

  height: 4.9rem;
  margin-top: 1rem;
`;
