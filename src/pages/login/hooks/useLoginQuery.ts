import { useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import { loginAxios } from '../apis/loginAxios';

const useGoogleLoginHook = () => {
  const mutation = useMutation({
    mutationFn: (authorizationCode: string) => loginAxios(authorizationCode),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.data.data.accessToken);
    },
    onError: (error) => {
      console.error('login post Error: ', error);
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
