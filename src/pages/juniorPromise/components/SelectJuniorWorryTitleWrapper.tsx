import styled from '@emotion/styled';
import { SELECT_JUNIOR_TITLE } from '../constants/constants';

const titleDescription = SELECT_JUNIOR_TITLE[1];

const SelectJuniorWorryTitle = () => {
  return (
    <Wrapper>
      <Layout>
        <TimeSelectionTitle>{titleDescription.title}</TimeSelectionTitle>
        <TimeSelectionDescription>{titleDescription.description}</TimeSelectionDescription>
      </Layout>
    </Wrapper>
  );
};

export default SelectJuniorWorryTitle;

const TimeSelectionTitle = styled.h3`
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;
const TimeSelectionDescription = styled.span`
  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  width: 100vw;
  height: 4.9rem;
`;
