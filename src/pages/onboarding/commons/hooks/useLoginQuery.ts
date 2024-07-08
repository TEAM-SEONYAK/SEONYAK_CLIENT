import { useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import { loginAxios } from '../apis/loginAxios';

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
      console.log({ response });
      mutation.mutate(authorizationCode);
      console.log({ authorizationCode });
      alert('Login successful! Please close this window manually.');
    },
    onError: (error) => {
      console.log('Login Failed:', error);
    },
    flow: 'auth-code',
    redirect_uri: 'https://api.seonyak-dev.kro.kr/login/oauth2/code/google',
  });

  return { login, mutation };
};

export default useGoogleLoginHook;
