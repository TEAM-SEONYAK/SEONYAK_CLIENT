import { InputBox, TextBox } from '../TextBox';

const Step인증완료 = () => {
  const company = '네이버';
  const phoneNum = '전화번호';

  return (
    <>
      <TextBox label="회사명">
        <InputBox label="회사명" placeholder="회사명을 입력해주세요" value={company} />
      </TextBox>
      <TextBox label="전화번호">
        <InputBox label="전화번호" placeholder="닉네임을 입력해주세요" value={phoneNum} />
      </TextBox>
    </>
  );
};

export default Step인증완료;
