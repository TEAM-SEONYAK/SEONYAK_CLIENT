import { FullBtn } from '@components/commons/FullButton';
import { useState, useEffect } from 'react';
import { formatTime } from '../../utils/formatTime';
import { InnerButton, InputBox, TextBox } from '../TextBox';
import { useContext } from 'react';
import { StepContext } from '@pages/onboarding/OnboardingPage';
import styled from '@emotion/styled';

const Step이메일입력 = () => {
  const [email, setEmail] = useState('');
  const { onNext } = useContext(StepContext);
  // 임시 변수
  const VERIFICATION_CODE = '0000';
  const USER_INPUT = '0000';

  const TIME = 180 * 1000;
  const [timeLeft, setTimeLeft] = useState(TIME);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { minutes, seconds } = formatTime(timeLeft);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(id);
          setIsActive(false);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [isActive, timeLeft]);

  const handleClickTimer = () => {
    setIsActive(true);
    setTimeLeft(TIME);
  };

  return (
    <Wrapper>
      <TextBox label="">
        <InputBox
          label="학교메일"
          placeholder="메일 주소를 입력해 주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}>
          <InnerButton onClick={handleClickTimer} text={isActive ? '재전송' : '인증번호 전송'} />
        </InputBox>
        {isActive && (
          <InputBox label="인증번호" placeholder="전송된 4자리 코드를 입력해 주세요" maxLength={4}>
            <Timer>
              {minutes} : {seconds}
            </Timer>
          </InputBox>
        )}
      </TextBox>
      <FullBtn text="인증 확인" isActive={timeLeft > 0 && USER_INPUT === VERIFICATION_CODE} onClick={onNext} />
    </Wrapper>
  );
};

export default Step이메일입력;

const Wrapper = styled.div`
  padding-top: 2rem;
`;

const Timer = styled.div`
  position: absolute;
  right: 1.5rem;
  bottom: 1.45rem;

  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;
