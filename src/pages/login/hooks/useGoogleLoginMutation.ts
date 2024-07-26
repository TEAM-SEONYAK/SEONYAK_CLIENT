import { useMutation } from '@tanstack/react-query';
import { loginAxios } from '../apis/loginAxios';
import { useNavigate } from 'react-router-dom';

interface useGoogleLoginPropType {
  role?: string;
  variant?: 'signup' | 'login';
}
const useGoogleLoginMutation = ({ role = 'SENIOR', variant = 'signup' }: useGoogleLoginPropType) => {
  const navigate = useNavigate();
  return useMutation({
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
};

export default useGoogleLoginMutation;
