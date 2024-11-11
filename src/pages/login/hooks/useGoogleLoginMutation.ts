import { useMutation } from '@tanstack/react-query';
import { loginAxios } from '../apis/loginAxios';
import { useNavigate } from 'react-router-dom';
import { clearStorage, setRole, setToken } from '@utils/storage';

interface useGoogleLoginPropType {
  role?: string;
}
const useGoogleLoginMutation = ({ role }: useGoogleLoginPropType) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (authorizationCode: string) => loginAxios(authorizationCode),
    onSuccess: (data) => {
      setToken(data.data.data.accessToken);

      const responseRole = data.data.data.role;
      if (responseRole) {
        // 로그인 (이미 가입된 회원)
        setRole(responseRole);
        navigate(responseRole === 'SENIOR' ? '/promiseList' : '/juniorPromise');
      } else if (role) {
        // 회원가입
        navigate(role === 'SENIOR' ? '/seniorOnboarding' : '/juniorOnboarding');
      } else {
        // 존재하지 않는 계정으로 로그인을 시도했을 경우
        console.error('🔴 존재하지 않는 계정');
        alert('존재하지 않는 계정이예요. 회원가입을 진행해주세요.');
        navigate('/');
        clearStorage();
      }
    },
    onError: (error) => {
      console.error('🔴login post Error: ', error);
    },
  });
};

export default useGoogleLoginMutation;
