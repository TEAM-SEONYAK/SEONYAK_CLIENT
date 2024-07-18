import { StartProfile1Img, StartProfile2Img } from '@assets/images';
import { CameraIc } from '@assets/svgs';
import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import { ChangeEvent, useMemo, useState } from 'react';
import { Caption, InnerButton, InputBox, TextBox } from '../TextBox';
import { FullBtn } from '@components/commons/FullButton';
import useNicknameValid from '@pages/onboarding/hooks/useNicknameQuery';
import { useLocation, useNavigate } from 'react-router-dom';

const Step개인정보입력 = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleClickLink = () => {
    navigate(pathname.includes('senior') ? '/seniorOnboarding/3' : '/juniorOnboarding/3');
  };

  const [nickname, setNickname] = useState('');
  const mutation = useNicknameValid();
  const [isNicknameError, setNicknameError] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  const [imageFile, setImageFile] = useState('');
  const startImgArr = [StartProfile1Img, StartProfile2Img];
  const startImg = useMemo(() => startImgArr[Math.floor(Math.random() * 2)], []);

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageFile(reader.result as string);
    };
  };
  // 임시 변수 (서버 통신 응답)
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);

    if (e.target.value.length == 0) {
      setNicknameError(false);
      setIsNicknameValid(false);
    }
  };
  const handleCheckNickname = () => {
    mutation.mutate(nickname, {
      onSuccess: () => {
        setIsNicknameValid(true);
      },
      onError: () => {
        setNicknameError(true);
        setIsNicknameValid(false);
      },
    });
  };

  return (
    <>
      <Wrapper>
        <SubTitle>프로필 사진</SubTitle>
        <ImageInputWrapper>
          <ImageInputLabel>
            <ImgCircle>
              <img src={imageFile ? imageFile : startImg} alt="프로필 이미지" />
              <input type="file" accept="image/*" onChange={(e) => handleChangeImage(e)} />
            </ImgCircle>
            <CameraIc />
          </ImageInputLabel>
        </ImageInputWrapper>
      </Wrapper>
      <TextBox label="닉네임">
        <InputBox
          label="닉네임"
          placeholder="닉네임을 입력해 주세요"
          isError={isNicknameError}
          value={nickname}
          onChange={handleChangeInput}>
          <InnerButton text="중복확인" onClick={handleCheckNickname} />
        </InputBox>
        {isNicknameError ? (
          <WarnDescription isShown={isNicknameError} warnText="닉네임이 조건을 충족하지 않아요." />
        ) : (
          <Caption isValid={isNicknameValid}>
            {isNicknameValid ? '사용 가능한 닉네임이에요' : '8자리 이내, 문자/숫자 가능, 특수문자/기호 입력 불가'}
          </Caption>
        )}
      </TextBox>
      <FullBtn onClick={handleClickLink} isActive={isNicknameValid} />
    </>
  );
};

export default Step개인정보입력;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-top: 2rem;
`;

const SubTitle = styled.h2`
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

const ImageInputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageInputLabel = styled.label`
  position: relative;

  & > svg {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const ImgCircle = styled.div`
  overflow: hidden;

  width: 11.7rem;
  height: 11.7rem;
  border-radius: 117px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > input {
    display: none;
  }
`;
