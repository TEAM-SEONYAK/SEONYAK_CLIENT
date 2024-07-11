import { TempLogoIc, AlarmIc } from '@assets/svgs';
import { Header } from '@components/commons/Header';
import Nav from '@components/commons/Nav';
import styled from '@emotion/styled';
import PromiseTap from './components/PromiseTap';
import RecentCard from './components/RecentCard';
import Title from './components/Title';
import { SENIOR_DATA, JUNIOR_DATA } from './constants/constants';

const PromiseListPage = () => {
  const userRole = 'SENIOR';

  return (
    <>
      <Header LeftSvg={TempLogoIc} RightSvg={AlarmIc} />
      <Wrapper>
        <RecentLayout>
          <Title nickname="예솔" userRole={userRole} count={SENIOR_DATA.scheduledAppointments.length} />
          <RecentCard
            userRole={userRole}
            recentAppointment={SENIOR_DATA.scheduledAppointments[0]}
            appointmentNum={SENIOR_DATA.scheduledAppointments.length}
          />
        </RecentLayout>
        <PromiseTap
          userRole="SENIOR"
          pending={SENIOR_DATA.pending}
          scheduled={SENIOR_DATA.scheduled}
          past={SENIOR_DATA.past}
        />
        <Nav />
      </Wrapper>
    </>
  );
};

export default PromiseListPage;

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
