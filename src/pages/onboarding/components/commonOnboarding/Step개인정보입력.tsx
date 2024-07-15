import { CameraIc } from '@assets/svgs';
import styled from '@emotion/styled';
import { Caption, InnerButton, InputBox, TextBox } from '../TextBox';

const Step개인정보입력 = () => {
  const handleChangeImage = () => {};

  return (
    <>
      <Wrapper>
        <SubTitle>프로필 사진</SubTitle>
        <ImageInputWrapper>
          <ImageInputLabel>
            <ImgCircle>
              <img src="src/assets/images/dummy.png" alt="테스트용 이미지" />
              <input type="file" accept="image/*" onChange={handleChangeImage} />
            </ImgCircle>
            <CameraIc />
          </ImageInputLabel>
        </ImageInputWrapper>
      </Wrapper>
      <TextBox label="닉네임">
        <InputBox label="닉네임" placeholder="닉네임을 입력해주세요">
          <InnerButton text="중복확인" />
        </InputBox>
        <Caption>8자리 이내, 문자/숫자 가능, 특수문자/기호 입력 불가</Caption>
      </TextBox>
    </>
  );
};

export default Step개인정보입력;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  border: 1px solid ${({ theme }) => theme.colors.grayScaleMG2};
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
