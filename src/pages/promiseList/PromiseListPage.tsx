import { HeaderLogoIc, AlarmIc } from '@assets/svgs';
import { Header } from '@components/commons/Header';
import Nav from '@components/commons/Nav';
import styled from '@emotion/styled';
import PromiseTap from './components/PromiseTap';
import RecentCard from './components/RecentCard';
import Title from './components/Title';
import { useGetPromiseList } from './hooks/queries';
import Loading from '@components/commons/Loading';
import ErrorPage from '@pages/errorPage/ErrorPage';

const PromiseListPage = () => {
  // 유저가 선배일 경우
  const userRole = localStorage.getItem('role') + '';

  const { myNickname, pending, scheduled, past, isLoading, isError } = useGetPromiseList();

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  return (
    <>
      <Header LeftSvg={HeaderLogoIc} RightSvg={AlarmIc} bgColor="gray" />
      <Wrapper>
        <RecentLayout>
          <Title nickname={myNickname} userRole={userRole} count={scheduled.length} />
          <RecentCard
            userRole={userRole}
            nickname={myNickname}
            recentAppointment={scheduled && scheduled[0]}
            appointmentNum={scheduled.length}
          />
        </RecentLayout>
        <PromiseTap myNickname={myNickname} userRole={userRole} pending={pending} scheduled={scheduled} past={past} />
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
