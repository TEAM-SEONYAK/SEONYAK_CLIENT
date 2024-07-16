import { ChangeEvent } from 'react';
import { InputBox, TextBox } from '../TextBox';

import styled from '@emotion/styled';

const Step인증완료 = ({ onNext }: { onNext: () => void }) => {
  const company = '네이버';
  const phoneNum = '전화번호';

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    // file을 multipart/form-data 로 통신
    // 통신 성공 시 navigate
  };

  return (
    <>
      <TextBox label="회사명">
        <InputBox label="회사명" placeholder="회사명을 입력해주세요" value={company} />
      </TextBox>
      <TextBox label="전화번호">
        <InputBox label="전화번호" placeholder="닉네임을 입력해주세요" value={phoneNum} />
      </TextBox>
      <Caption>
        {`현재 입력된 정보가 잘못되어 있어도 괜찮아요 !\n이후 인증 절차(전화번호)와 마이페이지(회사명)에서 수정이 가능해요`}
      </Caption>
      <ButtonWrapper>
        <BlackButton>
          <input type="file" accept="image/*" capture="environment" onChange={handleChangeFile} />
          다시찍기
        </BlackButton>
        <BlueButton type="button" onClick={onNext}>
          다음으로
        </BlueButton>
      </ButtonWrapper>
    </>
  );
};

export default Step인증완료;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;

  width: 100%;
  padding: 3.6rem 2rem;
`;

const BlackButton = styled.label`
  flex-grow: 1;

  padding: 1.5rem 0;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.grayScaleBG};

  ${({ theme }) => theme.fonts.Head2_SB_18}
  color: ${({ theme }) => theme.colors.grayScaleWhite};
  text-align: center;

  & > input {
    display: none;
  }
`;
const BlueButton = styled.button`
  flex-grow: 1;

  padding: 1.55rem 0;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.Blue};

  ${({ theme }) => theme.fonts.Head2_SB_18}
  color: ${({ theme }) => theme.colors.grayScaleWhite};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayScaleMG2};

    cursor: default;
  }
`;

const Caption = styled.p`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  margin-bottom: 11.2rem;

  color: ${({ theme }) => theme.colors.grayScaleMG2};
  text-align: center;
  white-space: pre-line;
  ${({ theme }) => theme.fonts.Caption1_R_12};
`;
