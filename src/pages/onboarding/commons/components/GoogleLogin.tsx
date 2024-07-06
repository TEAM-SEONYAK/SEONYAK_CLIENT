import styled from '@emotion/styled';
import { useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import GoogleIcon from '../../../../assets/svgs/googleLogo.svg?react';
import theme from '../../../../styles/theme';
import { useLoginQuery } from '../apis/useLoginQuery';
import axios from 'axios';

const GoogleLogin = () => {
  const [token, setToken] = useState('');
  const { data } = useLoginQuery(token);

  const login = useGoogleLogin({
    onSuccess: async (res) => {
      console.log({ res });
      const { access_token } = res;
      setToken(access_token);
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
