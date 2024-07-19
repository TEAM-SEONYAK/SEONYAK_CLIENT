import { useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import { loginAxios } from '../apis/loginAxios';
import { useNavigate } from 'react-router-dom';

interface useGoogleLoginPropType {
  role?: string;
  variant?: 'signup' | 'login'
}
const useGoogleLoginHook = ({ role, variant = 'signup' }: useGoogleLoginPropType) => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (authorizationCode: string) => loginAxios(authorizationCode),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.data.data.accessToken);
      const responseRole = data.data.data.role;
      if (responseRole) {
        localStorage.setItem('role', responseRole);
        navigate('/');
      } else if (variant === 'login') {
        alert('가입되지 않은 회원입니다.');
      } else {
        role === 'SENIOR' ? navigate('/seniorOnboarding')
          : role === 'JUNIOR' && navigate('/juniorOnboarding');
      }
    },
    onError: (error) => {
      console.error('login post Error: ', error);
      navigate('/error');
    },
  });

  const login = useGoogleLogin({
    onSuccess: (response) => {
      const authorizationCode = response.code;
      mutation.mutate(authorizationCode);
    },
    onError: (error) => {
      console.log('Login Failed:', error);
      navigate('/error');
    },
    flow: 'auth-code',
    redirect_uri: 'seonyak.com'
  });

  return { login, mutation };
};

export default useGoogleLoginHook;
