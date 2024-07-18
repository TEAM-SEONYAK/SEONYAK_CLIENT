import { ChangeEvent, useState } from 'react';
import { Caption, InputBox, TextBox } from '../TextBox';

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Step인증완료 = () => {
  const navigate = useNavigate();
  const handleClickLink = () => {
    navigate('/seniorOnboarding/9');
  };
  const [company, setCompany] = useState('네이버');
  const [phoneNum, setPhoneNum] = useState('전화번호');

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    // file을 multipart/form-data 로 통신
    // 통신 성공 시 navigate
  };

  return (
    <Wrapper>
      <TextBox label="회사명">
        <InputBox label="회사명" placeholder="회사명을 입력해주세요" value={company} />
      </TextBox>
      <TextBox label="전화번호">
        <InputBox label="전화번호" placeholder="연락처를 입력해주세요" value={phoneNum} />
        <Caption>{`회사명과 전화번호를 확인해 주세요`}</Caption>
      </TextBox>
      <BottomCaption>
        현재 입력된 정보가 잘못되어 있어도 괜찮아요 !<br />
        이후 인증 절차(전화번호)와 마이페이지(회사명)에서 수정이 가능해요
      </BottomCaption>

      <ButtonWrapper>
        <BlackButton>
          <input type="file" accept="image/*" capture="environment" onChange={handleChangeFile} />
          다시찍기
        </BlackButton>
        <BlueButton type="button" onClick={handleClickLink}>
          다음으로
        </BlueButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Step인증완료;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 2rem;
`;
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

const BottomCaption = styled.p`
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
