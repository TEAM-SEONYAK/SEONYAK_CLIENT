import styled from '@emotion/styled';
import PromiseTap from './PromiseTap';
import RecentCard from './RecentCard';
import Title from './Title';
import { TempLogoIc, AlarmIc } from '../../../assets/svgs';
import { Header } from '../../../components/commons/Header';
import Nav from '../../../components/commons/Nav';

const Layout = () => {
  return (
    <>
      <Header LeftSvg={TempLogoIc} RightSvg={AlarmIc} />
      <Wrapper>
        <RecentLayout>
          <Title name="예솔" userRole="SENIOR" count={1} />
          <RecentCard />
        </RecentLayout>
        <PromiseTap />
        <Nav />
      </Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  height: 100%;
  margin-top: 4.4rem;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};
`;

const RecentLayout = styled.div`
  width: 100vw;
  padding: 1.5rem 2rem 0;
`;
