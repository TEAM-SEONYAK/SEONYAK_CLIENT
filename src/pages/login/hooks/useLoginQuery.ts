import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { loginAxios } from '../apis/loginAxios';
import { useGoogleLogin } from '@react-oauth/google';

interface useGoogleLoginPropType {
  role?: string;
  variant?: 'signup' | 'login'
}
const useGoogleLoginHook = ({ role, variant = 'signup' }: useGoogleLoginPropType) => {
  const navigate = useNavigate();
  return useMutation({
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
};

export const login = useGoogleLogin({
  onSuccess: (response) => {
    const authorizationCode = response.code;
    useGoogleLoginHook({}).mutate(authorizationCode);
  },
  onError: (error) => {
    console.log('Login Failed:', error);
    // navigate('/error');
  },
  flow: 'auth-code',
  redirect_uri: import.meta.env.VITE_APP_REDIRECT_URI
});
