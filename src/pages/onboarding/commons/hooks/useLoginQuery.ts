import { useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import { loginAxios } from '../apis/loginAxios';

type successResponse = {
  code: string;
  data: {
    accessToken: string;
  };
};

type failureResponse = {
  code: string;
  message: string;
};

const useGoogleLoginHook = () => {
  const mutation = useMutation({
    mutationFn: (authorizationCode: string) => loginAxios(authorizationCode),
    onSuccess: (data) => {
      console.log('Access Token:', data.data.accessToken);
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });

  const login = useGoogleLogin({
    onSuccess: (response) => {
      const authorizationCode = response.code;
      mutation.mutate(authorizationCode);
    },
    onError: (error) => {
      console.log('Login Failed:', error);
    },
    flow: 'auth-code',
  });

  return { login, mutation };
};

export default useGoogleLoginHook;
