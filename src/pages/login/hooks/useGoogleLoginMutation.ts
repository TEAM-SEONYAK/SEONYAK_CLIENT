import { useMutation } from '@tanstack/react-query';
import { loginAxios } from '../apis/loginAxios';
import { useNavigate } from 'react-router-dom';

interface useGoogleLoginPropType {
  role?: string;
}
const useGoogleLoginMutation = ({ role = 'SENIOR' }: useGoogleLoginPropType) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (authorizationCode: string) => loginAxios(authorizationCode),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.data.data.accessToken);

      const responseRole = data.data.data.role;
      if (responseRole) {
        // 로그인 (이미 가입된 회원)
        console.log('🍀로그인');
        localStorage.setItem('role', responseRole);
        navigate('/');
      } else {
        // 회원가입
        console.log('🥰회원가입');
        navigate(role === 'SENIOR' ? '/seniorOnboarding' : '/juniorOnboarding');
      }
    },
    onError: (error) => {
      console.error('🔴login post Error: ', error);
    },
  });
};

export default useGoogleLoginMutation;
