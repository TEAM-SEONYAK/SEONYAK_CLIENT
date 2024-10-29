import { FullBtn } from '@components/commons/FullButton';
import { useState, useEffect, ChangeEvent } from 'react';
import { formatTime } from '../../utils/formatTime';
import { InnerButton, InputBox, TextBox } from '../TextBox';
import styled from '@emotion/styled';
import WarnDescription from '@components/commons/WarnDescription';
import { AutoCloseModal } from '@components/commons/modal/AutoCloseModal';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUnivVerify, useUnivVerifycode } from '@pages/onboarding/hooks/useUnivQuery';
import { BtnCloseModal } from '@components/commons/modal/BtnModal';
import { AlreadyModalView } from '@pages/onboarding/components/commonOnboarding/Step번호입력';
import axios from 'axios';
import { 이미_가입된_계정_이메일_에러코드 } from '@pages/onboarding/constants';
import { SuccessImg } from '@assets/images';
import googleLogin from '@pages/login/utils/googleLogin';

const Step이메일입력 = () => {
  const navigate = useNavigate();
  const { univName } = useLocation().state;

  const handleClickLink = () => {
    navigate('/juniorOnboarding/6');
  };

  const verifyMutation = useUnivVerify();
  const verifycodeMutation = useUnivVerifycode();
  const [isEmailError, setIsEmailError] = useState(false);
  const [isValidCodeError, setIsValidCodeError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const TIME = 180 * 1000;
  const [timeLeft, setTimeLeft] = useState(TIME);
  const { minutes, seconds } = formatTime(timeLeft);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isAlreadyModalOpen, setIsAlreadyModalOpen] = useState(false);

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

  const handleClickSend = () => {
    if (isActive) {
      setIsValidCodeError(false);
      setCode('');
    }
    verifyMutation.mutate(
      {
        email,
        univName,
      },
      {
        onSuccess: () => {
          setIsEmailError(false);
          setIsActive(true);
          setTimeLeft(TIME);
        },
        onError: (error) => {
          if (
            axios.isAxiosError(error) &&
            error.response &&
            error.response.data.code === 이미_가입된_계정_이메일_에러코드
          ) {
            setIsAlreadyModalOpen(true);
          } else {
            setIsEmailError(true);
          }
        },
      }
    );
  };

  const handleChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
    const codeInput = e.target.value;
    setCode(codeInput);

    if (codeInput.length < 4) {
      setIsValidCodeError(false);
    }
  };

  const handleShowModal = (type: boolean) => {
    setIsModalOpen(type);
  };

  const handleClickButton = () => {
    verifycodeMutation.mutate(
      { email, univName, code },
      {
        onSuccess: () => {
          setIsModalOpen(true);
          setTimeout(() => {
            handleClickLink();
          }, 2000);
        },
        onError: () => {
          setIsValidCodeError(true);
        },
      },
    );
  };

  const handleShowAlreadyModal = (type: boolean) => {
    setIsAlreadyModalOpen(type);
  };

  return (
    <Wrapper>
      <div style={{ padding: '0 2rem' }}>
        <TextBox label="">
          <>
            <InputBox
              label="학교메일"
              placeholder="메일 주소를 입력해 주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isError={isEmailError}>
              <InnerButton onClick={handleClickSend} text={isActive ? '재전송' : '인증번호 전송'} />
            </InputBox>
            {isEmailError && <WarnDescription isShown={isEmailError} warnText="유효하지 않은 메일이에요." />}
          </>
          {isActive && (
            <>
              <InputBox
                label="인증번호"
                placeholder="전송된 4자리 코드를 입력해 주세요"
                value={code}
                onChange={handleChangeCode}
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
      </div>
      <FullBtn text="인증 확인" isActive={code.length == 4 && !isValidCodeError} onClick={handleClickButton} />
      <AutoCloseModal text="인증에 성공했어요" showModal={isModalOpen} handleShowModal={handleShowModal}>
        <Img src={SuccessImg} alt="" />
      </AutoCloseModal>
      <BtnCloseModal
        isModalOpen={isAlreadyModalOpen}
        handleModalOpen={handleShowAlreadyModal}
        btnText="로그인 하러 가기"
        handleBtnClick={googleLogin}>
        <AlreadyModalView />
      </BtnCloseModal>
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

const Img = styled.img`
  width: 27rem;
  height: 17rem;
`;
