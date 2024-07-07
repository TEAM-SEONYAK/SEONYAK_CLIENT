import { Caption, InnerButton, InputBox, TextBox } from '../components/TextBox';

const SeniorOnboardingPage = () => {
  return (
    <div>
      <TextBox label="닉네임">
        <InputBox label="닉네임" placeholder="닉네임을 입력해주세요">
          <InnerButton text="중복확인" />
        </InputBox>
        <Caption>8자리 이내, 문자/숫자 가능, 특수문자/기호 입력 불가</Caption>
      </TextBox>
    </div>
  );
};

export default SeniorOnboardingPage;
