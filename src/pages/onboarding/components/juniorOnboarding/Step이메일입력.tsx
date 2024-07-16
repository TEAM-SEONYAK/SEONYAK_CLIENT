import { FullBtn } from '@components/commons/FullButton';
import { useState, useEffect } from 'react';
import { formatTime } from '../../utils/formatTime';
import { InnerButton, InputBox, TextBox } from '../TextBox';
import { useContext } from 'react';
import { StepContext } from '@pages/onboarding/OnboardingPage';
import styled from '@emotion/styled';
import WarnDescription from '@components/commons/WarnDescription';
import { AutoCloseModal } from '@components/commons/modal/AutoCloseModal';

const Step이메일입력 = () => {
  const [isEmailError, setIsEmailError] = useState(false);
  const [isValidCodeError, setIsValidCodeError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleShowModal = (type: boolean) => {
    setIsModalOpen(type);
  };

  const handleClickButton = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      onNext();
    }, 2000);
  };

  return (
    <Wrapper>
      <TextBox label="">
        <>
          <InputBox
            label="학교메일"
            placeholder="메일 주소를 입력해 주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isError={isEmailError}>
            <InnerButton onClick={handleClickTimer} text={isActive ? '재전송' : '인증번호 전송'} />
          </InputBox>
          {isEmailError && <WarnDescription isShown={isEmailError} warnText="유효하지 않은 메일이에요." />}
        </>
        {isActive && (
          <>
            <InputBox
              label="인증번호"
              placeholder="전송된 4자리 코드를 입력해 주세요"
              maxLength={4}
              isError={isValidCodeError}>
              <Timer>
                {minutes} : {seconds}
              </Timer>
            </InputBox>
            {isValidCodeError && (
              <WarnDescription isShown={isValidCodeError} warnText="코드가 틀렸어요. 다시 한번 확인해 주세요." />
            )}
          </>
        )}
      </TextBox>
      <FullBtn
        text="인증 확인"
        isActive={timeLeft > 0 && USER_INPUT === VERIFICATION_CODE}
        onClick={handleClickButton}
      />
      <AutoCloseModal text="인증에 성공했어요" showModal={isModalOpen} handleShowModal={handleShowModal}>
        <DummyImage />
      </AutoCloseModal>
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

const DummyImage = styled.div`
  width: 27rem;
  height: 17rem;

  background-color: red;
`;
