import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { loginAxios } from '../apis/loginAxios';

interface useGoogleLoginPropType {
  role?: string;
  variant?: 'signup' | 'login'
}
const useGoogleLoginHook = ({ role, variant = 'signup' }: useGoogleLoginPropType) => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
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



  return { mutate };
};

export default useGoogleLoginHook;
