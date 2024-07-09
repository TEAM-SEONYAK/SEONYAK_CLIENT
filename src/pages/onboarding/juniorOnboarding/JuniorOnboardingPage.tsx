import Layout from '../components/Layout';
import SearchBox from '../components/SearchBox';

const JuniorOnboardingPage = () => {
  return (
    <Layout step={1}>
      <>
        <h1>테스트1</h1>
        <h2>테스트2</h2>
        <SearchBox placeholder="학교명을 입력해 주세요" />
      </>
    </Layout>
  );
};

export default JuniorOnboardingPage;
