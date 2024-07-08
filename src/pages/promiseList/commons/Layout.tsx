import styled from '@emotion/styled';
import Title from './Title';
import { TempLogoIc, AlarmIc } from '../../../assets/svgs';
import { Header } from '../../../components/commons/Header';
import Nav from '../../../components/commons/Nav';

const Layout = () => {
  return (
    <>
      <Header LeftSvg={TempLogoIc} RightSvg={AlarmIc} />
      <Wrapper>
        <Title name="예솔" userRole="SENIOR" count={1} />
      </Wrapper>
      <Nav />
    </>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100vw;
  padding: 1.5rem 2rem 0;
`;
