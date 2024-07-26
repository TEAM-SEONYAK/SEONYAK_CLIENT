import { useMutation } from '@tanstack/react-query';
import { loginAxios } from '../apis/loginAxios';
import { useNavigate } from 'react-router-dom';

interface useGoogleLoginPropType {
  role?: string;
}
const useGoogleLoginMutation = ({ role }: useGoogleLoginPropType) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (authorizationCode: string) => loginAxios(authorizationCode),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.data.data.accessToken);

      const responseRole = data.data.data.role;
      if (responseRole) {
        // 로그인 (이미 가입된 회원)
        localStorage.setItem('role', responseRole);
        navigate('/');
      } else if (role) {
        // 회원가입
        navigate(role === 'SENIOR' ? '/seniorOnboarding' : '/juniorOnboarding');
      } else {
        // 로그인인데, role 정보를 서버에서 받지 못한 상황
        console.error('🔴 로그인 과정에서 Role 정보를 서버에서 받지 못했어요.');
      }
    },
    onError: (error) => {
      console.error('🔴login post Error: ', error);
    },
  });
};

export default useGoogleLoginMutation;
