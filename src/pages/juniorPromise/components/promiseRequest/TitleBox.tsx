import styled from '@emotion/styled';
import { SELECT_JUNIOR_TITLE } from '@pages/juniorPromise/constants/constants';

interface TitleBoxProps {
  num: number;
}

const TitleBox = ({ num }: TitleBoxProps) => {
  const titleDescription = SELECT_JUNIOR_TITLE[num];

  return (
    <Wrapper>
      <Layout>
        <Title>{titleDescription.title}</Title>
        <Description>{titleDescription.description}</Description>
      </Layout>
    </Wrapper>
  );
};

export default TitleBox;

const Title = styled.h3`
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;
const Description = styled.span`
  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  width: 100vw;
  height: 4.9rem;
`;
