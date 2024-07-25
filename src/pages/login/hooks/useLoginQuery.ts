import { useMutation } from '@tanstack/react-query';
import { loginAxios } from '../apis/loginAxios';
import { useNavigate } from 'react-router-dom';

interface useGoogleLoginPropType {
  role?: string;
  variant?: 'signup' | 'login';
}
const useGoogleLoginHook = ({ role = 'SENIOR', variant = 'signup' }: useGoogleLoginPropType) => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (authorizationCode: string) => loginAxios(authorizationCode),
    onSuccess: (data) => {
      console.log('🟢성공하셨어용~🟢');
      localStorage.setItem('accessToken', data.data.data.accessToken);
      const responseRole = data.data.data.role;
      if (responseRole) {
        console.log('💕');
        localStorage.setItem('role', responseRole);
        navigate('/');
      } else if (variant === 'login') {
        console.log('🟡');
        alert('가입되지 않은 회원입니다.');
      } else {
        console.log('🔴', role);
        role === 'SENIOR' ? navigate('/seniorOnboarding') : role === 'JUNIOR' && navigate('/juniorOnboarding');
      }
    },
    onError: (error) => {
      console.error('🔴login post Error: ', error);
    },
  });

  const login = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_APP_GOOGLE_AUTH_REDIRECT_URI}&response_type=code&scope=email`;
  };
  return { login, mutation };
};

export default useGoogleLoginHook;
