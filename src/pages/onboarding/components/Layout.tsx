import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { AlarmIc, TempLogoIc } from '../../../assets/svgs';
import { FullBtn } from '../../../components/commons/FullButton';
import { Header } from '../../../components/commons/Header';
import ProgressBar from '../../../components/commons/ProgressBar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <div>
        <Header title="타이틀" LeftSvg={TempLogoIc} RightSvg={AlarmIc} />
        <ProgressBar max={5} current={2} />
      </div>
      {children}
      <FullBtn
        text="텍스트"
        isActive
        onClick={() => {
          console.log('클릭하셨다');
        }}
      />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100dvh;
  padding: 5.8rem 2rem 3.6rem;
`;
