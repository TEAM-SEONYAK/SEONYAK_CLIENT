import { HeaderLogoIc, AlarmIc } from '@assets/svgs';
import { Header } from '@components/commons/Header';
import Nav from '@components/commons/Nav';
import styled from '@emotion/styled';
import PromiseTap from './components/PromiseTap';
import RecentCard from './components/RecentCard';
import Title from './components/Title';
import { SENIOR_DATA, JUNIOR_DATA } from './constants/constants';
// import { useGetPromiseDetail } from '@pages/promiseDetail/hooks/queries';

const PromiseListPage = () => {
  // 유저가 선배일 경우
  const userRole = 'JUNIOR';
  const promiseData = userRole === 'SENIOR' ? SENIOR_DATA : JUNIOR_DATA;

  return (
    <>
      <Header LeftSvg={HeaderLogoIc} RightSvg={AlarmIc} bgColor="gray" />
      <Wrapper>
        <RecentLayout>
          <Title nickname={promiseData.myNickname} userRole={userRole} count={promiseData.scheduled.length} />
          <RecentCard
            userRole={userRole}
            nickname={promiseData.myNickname}
            recentAppointment={promiseData.scheduled && promiseData.scheduled[0]}
            appointmentNum={promiseData.scheduled.length}
          />
        </RecentLayout>
        <PromiseTap
          myNickname={promiseData.myNickname}
          userRole={userRole}
          pending={promiseData.pending}
          scheduled={promiseData.scheduled}
          past={promiseData.past}
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
