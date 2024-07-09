import { InnerButton, InputBox, TextBox } from '../TextBox';

const Step번호입력 = () => {
  return (
    <>
      <TextBox label="">
        <InputBox label="폰번호" placeholder="전화번호를 입력해 주세요">
          <InnerButton text="인증번호 전송" />
        </InputBox>
        <InputBox label="인증번호" placeholder="전송된 4자리 코드를 입력해 주세요" />
      </TextBox>
    </>
  );
};

export default Step번호입력;
