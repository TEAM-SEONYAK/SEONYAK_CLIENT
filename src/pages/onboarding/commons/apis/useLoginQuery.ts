import { useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type successResponse = {
  code: string;
  data: {
    accessToken: string;
  };
};

type failureResponse = {
  code: string;
  message: string;
}

const loginAxios = (authorizationCode: string) => {
  return axios.post(
    'https://www.seonyak.p-e.kr/api/v1/auth/login',
    {
      redirectUri: 'https://www.seonyak.p-e.kr/login/oauth2/code/google',
      socialType: 'GOOGLE',
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        authorizationCode,
      },
    },
  );
};

const useGoogleLoginHook = () => {
  const mutation = useMutation({
    mutationFn: (authorizationCode) => loginAxios(authorizationCode),
    onSuccess: (data: successResponse) => {
      console.log('Access Token:', data.data.accessToken);
    },
    onError: (error: failureResponse) => {
      console.error('Error:', error);
    },
  });

  const login = useGoogleLogin({
    onSuccess: (response) => {
      const authorizationCode = response.code;
      mutation.mutate({ authorizationCode });
    },
    onError: (error) => {
      console.log('Login Failed:', error);
    },
    flow: 'auth-code',
  });

  return { login, mutation };
};

export default useGoogleLoginHook;
