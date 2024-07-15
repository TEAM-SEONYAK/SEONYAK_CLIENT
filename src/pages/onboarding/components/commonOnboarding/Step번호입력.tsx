import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { formatTime } from '../../utils/formatTime';
import { InnerButton, InputBox, TextBox } from '../TextBox';

const Step번호입력 = () => {
  // 3분 타이머
  const [timeLeft, setTimeLeft] = useState(180 * 1000);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { minutes, seconds } = formatTime(timeLeft);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) {
      return;
    }

    const id = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(id);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [isActive, timeLeft]);

  // 버튼 클릭시 타이머 시작
  const handleStart = () => {
    setIsActive(true);
  };

  return (
    <>
      <TextBox label="">
        <InputBox label="폰번호" placeholder="전화번호를 입력해 주세요">
          <InnerButton onClick={handleStart} text="인증번호 전송" />
        </InputBox>
        <InputBox label="인증번호" placeholder="전송된 4자리 코드를 입력해 주세요">
          <Timer>
            {minutes} : {seconds}
          </Timer>
        </InputBox>
      </TextBox>
    </>
  );
};

export default Step번호입력;

const Timer = styled.div`
  position: absolute;

  right: 1.5rem;
  bottom: 1.45rem;

  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;
