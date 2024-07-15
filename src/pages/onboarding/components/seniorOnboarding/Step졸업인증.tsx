import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import { Caption, InnerButton, InputBox, TextBox } from '../TextBox';

const Step졸업인증 = () => {
  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('야', e.target.files[0]);
  };
  return (
    <Wrapper>
      <TextBox label="졸업증명서">
        <InputBox label="졸업증명서" type="file" placeholder="파일 첨부하기" onChange={handleChangeFile}>
          <InnerButton text="첨부파일" />
        </InputBox>
        <Caption>JPEG, JPG, PNG, PDF 형식만 첨부 가능해요 (최대 50BM)</Caption>
      </TextBox>
    </Wrapper>
  );
};

export default Step졸업인증;

const Wrapper = styled.div`
  padding-top: 2rem;
`;
