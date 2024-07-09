import styled from '@emotion/styled';
import RecentCard from './commons/RecentCard';

const PromiseListPage = () => {
  return (
    <TempWrapper>
      <RecentCard />
    </TempWrapper>
  );
};

export default PromiseListPage;

const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.grayScaleLG2};
`;
