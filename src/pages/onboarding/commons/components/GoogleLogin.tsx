import styled from '@emotion/styled';
import { useGoogleLogin } from '@react-oauth/google';
import GoogleIcon from '../../../../assets/svgs/googleLogo.svg?react';
import theme from '../../../../styles/theme';

const GoogleLogin = () => {
  const login = useGoogleLogin({
    onSuccess: (res) => {
      console.log({ res });
    },
    onError: (err) => {
      console.log({ err });
    },
  });

  return (
    <Wrapper onClick={() => login()}>
      <GoogleIcon
        style={{
          width: '33px',
          height: '33px',
          margin: '10px',
        }}
      />
      <Text>구글로 시작하기</Text>
    </Wrapper>
  );
};

export default GoogleLogin;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 33.5rem;
  height: 5.6rem;
  border-radius: 5px;

  background-color: ${theme.colors.grayScaleBG};

  color: white;

  cursor: pointer;
`;

const Text = styled.span`
  display: flex;

  padding-left: 5.85rem;

  ${theme.fonts.Head2_SB_18};
  text-align: center;
`;
