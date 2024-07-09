import styled from '@emotion/styled';
import PromiseTap from './PromiseTap';
import Title from './Title';
import { TempLogoIc, AlarmIc } from '../../../assets/svgs';
import { Header } from '../../../components/commons/Header';
import Nav from '../../../components/commons/Nav';

const Layout = () => {
  return (
    <Wrapper>
      <Header LeftSvg={TempLogoIc} RightSvg={AlarmIc} />
      <RecentLayout>
        <Title name="예솔" userRole="SENIOR" count={1} />
      </RecentLayout>
      <PromiseTap />
      <Nav />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};
`;

const RecentLayout = styled.div`
  width: 100vw;
  height: 31.5rem;
  padding: 1.5rem 2rem 0;
`;
