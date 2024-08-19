import { StartProfile1Img, StartProfile2Img } from '@assets/images';
import { CameraIc } from '@assets/svgs';
import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { Caption, InnerButton, InputBox, TextBox } from '../TextBox';
import { FullBtn } from '@components/commons/FullButton';
import useNicknameValid from '@pages/onboarding/hooks/useNicknameQuery';
import { useProfileQuery } from '@pages/onboarding/hooks/useProfileImgQuery';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { JoinContextType } from '@pages/onboarding/type';
import usePresignedUrl from '@pages/onboarding/hooks/usePresignedUrl';

const Step개인정보입력 = () => {
  const { data, setData } = useOutletContext<JoinContextType>();

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(data.nickname);
  const mutation = useNicknameValid();
  const [isNicknameError, setNicknameError] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  const [file, setFile] = useState<File>();
  const [imageFile, setImageFile] = useState(data.imageUrl);
  console.log(data);
  const startImgArr = [StartProfile1Img, StartProfile2Img];
  const startImg = useMemo(() => startImgArr[Math.floor(Math.random() * 2)], []);

  const {
    isSuccess,
    response: { url, fileName },
  } = usePresignedUrl();
  const { mutate } = useProfileQuery();

  useEffect(() => {
    if (!isSuccess || !file) return;
    mutate({ url, image: file });
  }, [isSuccess, url, file]);

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
    console.log('💕', e.target.files[0]);
    console.log('💙', fileName, url);

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageFile(URL.createObjectURL(file));
    };
  };

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

  const handleClickLink = () => {
    setData((prev) => ({
      ...prev,
      imageUrl: imageFile,
      image: response.fileName,
      nickname: nickname,
    }));
    navigate(pathname.includes('senior') ? '/seniorOnboarding/3' : '/juniorOnboarding/3');
  };

  return (
    <>
      <div style={{ padding: '0 2rem' }}>
        <Wrapper>
          <SubTitle>프로필 사진</SubTitle>
          <ImageInputWrapper>
            <ImageInputLabel>
              <ImgCircle>
                <img src={imageFile ? imageFile : startImg} alt="프로필 이미지" />
                <input type="file" accept="image/*" onChange={handleChangeImage} />
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
      </div>
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
