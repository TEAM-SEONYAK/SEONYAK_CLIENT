import { FullBtn } from '@components/commons/FullButton';
import { useState, useEffect, ChangeEvent, useContext } from 'react';
import { formatTime } from '../../utils/formatTime';
import { InnerButton, InputBox, TextBox } from '../TextBox';
import styled from '@emotion/styled';
import { formatPhone } from '@pages/onboarding/utils/formatPhone';
import WarnDescription from '@components/commons/WarnDescription';
import { AutoCloseModal } from '@components/commons/modal/AutoCloseModal';
import { useNavigate } from 'react-router-dom';
import { usePhoneVerify, usePhoneVerifycode } from '@pages/onboarding/hooks/usePhoneQuery';
import { BtnCloseModal, BtnModalTitle } from '@components/commons/modal/BtnModal';
import { WarningImg } from '@assets/svgs';

const Step번호입력 = () => {
  const ROLE = 'SENIOR'; // 임시
  const navigate = useNavigate();
  const handleClickLink = () => {
    if (ROLE === 'SENIOR') alert('온보딩 끝!');
    else navigate('/juniorOnboarding/4');
  };

  const verifyMutation = usePhoneVerify();
  const verifycodeMutation = usePhoneVerifycode();
  const [isNumError, setIsNumError] = useState(false);
  const [isValidCodeError, setIsValidCodeError] = useState(false);
  const [isDoneModalOpen, setIsDoneModalOpen] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [isAlreadyPhone, setIsAlreadyPhone] = useState(false);
  const [isAlreadyModalOpen, setIsAlreadyModalOpen] = useState(false);

  const TIME = 180 * 1000;
  const [timeLeft, setTimeLeft] = useState(TIME);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isNextActive, setIsNextActive] = useState(false);
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

  useEffect(() => {
    if (verifyCode.length < 4) {
      setIsValidCodeError(false);
      return;
    }
    verifycodeMutation.mutate(
      { phoneNumber: phoneNumber, verificationCode: verifyCode },
      {
        onSuccess: () => {
          setIsNextActive(true);
          setIsValidCodeError(false);
        },
        onError: (error) => {
          if (error.response.data.code === '40902') {
            setIsAlreadyPhone(true);
            setIsNextActive(true);
            setIsValidCodeError(false);
          } else {
            setIsValidCodeError(true);
          }
        },
      },
    );
  }, [verifyCode]);

  const handleClickSend = () => {
    if (isActive) {
      setIsValidCodeError(false);
      setVerifyCode('');
    }
    verifyMutation.mutate(phoneNumber, {
      onSuccess: () => {
        setIsNumError(false);
        setIsActive(true);
        setTimeLeft(TIME);
      },
      onError: () => {
        setIsNumError(true);
      },
    });
  };

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedNum = formatPhone(e.target.value);
    setPhoneNumber(formattedNum);
  };
  const handleChangeVerifycode = (e: ChangeEvent<HTMLInputElement>) => {
    setVerifyCode(e.target.value);
  };

  const handleShowDoneModal = (type: boolean) => {
    setIsDoneModalOpen(type);
  };

  const handleShowAlreadyModal = (type: boolean) => {
    setIsAlreadyModalOpen(type);
  };

  const handleClickButton = () => {
    if (isAlreadyPhone) setIsAlreadyModalOpen(true);
    else {
      setIsDoneModalOpen(true);
      setTimeout(() => {
        handleClickLink();
      }, 2000);
    }
  };

  return (
    <Wrapper>
      <TextBox label="">
        <>
          <InputBox
            label="폰번호"
            placeholder="전화번호를 입력해 주세요"
            value={phoneNumber}
            onChange={handleChangePhone}
            isError={isNumError}>
            <InnerButton onClick={handleClickSend} text={isActive ? '재전송' : '인증번호 전송'} />
          </InputBox>
          {isNumError && <WarnDescription isShown={isNumError} warnText="올바른 휴대전화 번호 형식을 입력해주세요." />}
        </>
        {isActive && (
          <>
            <InputBox
              label="인증번호"
              placeholder="전송된 4자리 코드를 입력해 주세요"
              value={verifyCode}
              onChange={handleChangeVerifycode}
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
      <FullBtn text="인증 확인" isActive={timeLeft > 0 && isNextActive} onClick={handleClickButton} />
      <AutoCloseModal text="인증에 성공했어요" showModal={isDoneModalOpen} handleShowModal={handleShowDoneModal}>
        <DummyImage />
      </AutoCloseModal>
      <BtnCloseModal
        isModalOpen={isAlreadyModalOpen}
        handleModalOpen={handleShowAlreadyModal}
        btnText="로그인 하러 가기"
        handleBtnClick={() => {
          navigate('/login');
        }}>
        <AlreadyPhoneModalView />
      </BtnCloseModal>
    </Wrapper>
  );
};

export default Step번호입력;

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

const AlreadyPhoneModalView = () => {
  const PHONEMODAL_TEXT = `이미 서비스에 가입한 번호예요\n변경을 원하시는 경우\n해당 계정으로 로그인을 하신 후\n이의 신청해주시길 바랍니다`;
  return (
    <ModalWrapper>
      <WarningImg />
      <BtnModalTitle>가입된 계정이 있어요</BtnModalTitle>
      <ModalDescription>{PHONEMODAL_TEXT}</ModalDescription>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const ModalDescription = styled.p`
  display: flex;

  margin-top: 0.5rem;
  padding: 2rem 3.7rem;
  border-radius: 9px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleDG};
  text-align: center;
  white-space: pre-wrap;

  ${({ theme }) => theme.fonts.Body1_M_14};
`;
