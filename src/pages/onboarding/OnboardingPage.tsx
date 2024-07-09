import Layout from './components/Layout';
import SearchBox from './components/SearchBox';
import { Caption, InnerButton, InputBox, TextBox } from './components/TextBox';

const OnboardingPage = () => {
  return (
    <Layout step={1}>
      <>
        <TextBox label="닉네임">
          <InputBox label="닉네임" placeholder="닉네임을 입력해주세요">
            <InnerButton text="중복확인" />
          </InputBox>
          <Caption>8자리 이내, 문자/숫자 가능, 특수문자/기호 입력 불가</Caption>
        </TextBox>
        <SearchBox placeholder="학교명을 입력해 주세요" />
      </>
    </Layout>
  );
};

export default OnboardingPage;
