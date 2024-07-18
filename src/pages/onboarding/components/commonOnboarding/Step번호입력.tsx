import { FullBtn } from '@components/commons/FullButton';
import { useState, useEffect, ChangeEvent } from 'react';
import { formatTime } from '../../utils/formatTime';
import { InnerButton, InputBox, TextBox } from '../TextBox';
import styled from '@emotion/styled';
import { formatPhone } from '@pages/onboarding/utils/formatPhone';
import WarnDescription from '@components/commons/WarnDescription';
import { AutoCloseModal } from '@components/commons/modal/AutoCloseModal';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePhoneVerify, usePhoneVerifycode } from '@pages/onboarding/hooks/usePhoneQuery';
import { BtnCloseModal, BtnModalTitle } from '@components/commons/modal/BtnModal';
import { WarningImg } from '@assets/svgs';
import axios from 'axios';
import { 이미_사용중인_전화번호_에러코드 } from '@pages/onboarding/constants';
import { SuccessImg } from '@assets/images';

const Step번호입력 = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleClickLink = () => {
    if (navigate(pathname.includes('senior')) alert('온보딩 끝!');
    else navigate('/juniorOnboarding/4');
  };

  const verifyMutation = usePhoneVerify();
  const verifycodeMutation = usePhoneVerifycode();

  const [isError, setIsError] = useState({
    isNumError: false,
    isValidCodeError: false,
  });
  const setValidCodeError = (value: boolean) => {
    setIsError((prev) => ({
      ...prev,
      isValidCodeError: value,
    }));
  };
  const setNumError = (value: boolean) => {
    setIsError((prev) => ({
      ...prev,
      isNumError: value,
    }));
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const [isDoneModalOpen, setIsDoneModalOpen] = useState(false);
  const [isAlreadyPhone, setIsAlreadyPhone] = useState(false);
  const [isAlreadyModalOpen, setIsAlreadyModalOpen] = useState(false);

  const TIME = 180 * 1000;
  const [timeLeft, setTimeLeft] = useState(TIME);
  const { minutes, seconds } = formatTime(timeLeft);

  const [isActive, setIsActive] = useState<boolean>(false);

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
      setValidCodeError(false);
      setVerificationCode('');
    }
    verifyMutation.mutate(phoneNumber, {
      onSuccess: () => {
        setNumError(false);
        setIsActive(true);
        setTimeLeft(TIME);
      },
      onError: () => {
        setNumError(true);
      },
    });
  };

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedNum = formatPhone(e.target.value);
    setPhoneNumber(formattedNum);
  };

  const handleChangeVerifycode = (e: ChangeEvent<HTMLInputElement>) => {
    const verifyValue = e.target.value;
    setVerificationCode(verifyValue);

    if (verifyValue.length < 4) {
      setValidCodeError(false);
      return;
    }
  };

  const handleShowDoneModal = (type: boolean) => {
    setIsDoneModalOpen(type);
  };

  const handleShowAlreadyModal = (type: boolean) => {
    setIsAlreadyModalOpen(type);
  };

  const handleClickButton = () => {
    verifycodeMutation.mutate(
      { phoneNumber: phoneNumber, verificationCode },
      {
        onSuccess: () => {
          setValidCodeError(false);
          setIsDoneModalOpen(true);
          setTimeout(() => {
            handleClickLink();
          }, 2000);
        },
        onError: (error) => {
          if (
            axios.isAxiosError(error) &&
            error.response &&
            error.response.data.code === 이미_사용중인_전화번호_에러코드
          ) {
            setIsAlreadyModalOpen(true);
            setValidCodeError(false);
          } else {
            setValidCodeError(true);
          }
        },
      },
    );

    if (isAlreadyPhone) setIsAlreadyModalOpen(true);
    else {
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
            isError={isError.isNumError}>
            <InnerButton onClick={handleClickSend} text={isActive ? '재전송' : '인증번호 전송'} />
          </InputBox>
          {isError.isNumError && (
            <WarnDescription isShown={isError.isNumError} warnText="올바른 휴대전화 번호 형식을 입력해주세요." />
          )}
        </>
        {isActive && (
          <>
            <InputBox
              label="인증번호"
              placeholder="전송된 4자리 코드를 입력해 주세요"
              value={verificationCode}
              onChange={handleChangeVerifycode}
              maxLength={4}
              isError={isError.isValidCodeError}>
              <Timer>
                {minutes} : {seconds}
              </Timer>
            </InputBox>
            <WarnDescription isShown={isError.isValidCodeError} warnText="코드가 틀렸어요. 다시 한번 확인해 주세요." />
          </>
        )}
      </TextBox>
      <FullBtn
        text="인증 확인"
        isActive={timeLeft > 0 && verificationCode.length == 4 && !isError.isValidCodeError}
        onClick={handleClickButton}
      />
      <AutoCloseModal text="인증에 성공했어요" showModal={isDoneModalOpen} handleShowModal={handleShowDoneModal}>
        <Img src={SuccessImg} alt="" />
      </AutoCloseModal>
      <BtnCloseModal
        isModalOpen={isAlreadyModalOpen}
        handleModalOpen={handleShowAlreadyModal}
        btnText="로그인 하러 가기"
        handleBtnClick={() => {
          navigate('/login');
        }}>
        <AlreadyModalView />
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

const Img = styled.img`
  width: 27rem;
  height: 17rem;
`;

export const AlreadyModalView = () => {
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
