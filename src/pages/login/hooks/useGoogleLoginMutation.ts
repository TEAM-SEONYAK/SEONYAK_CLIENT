import { useMutation } from '@tanstack/react-query';
import { loginAxios } from '../apis/loginAxios';
import { useNavigate } from 'react-router-dom';
import { clearStorage, setRole, setToken, setSeniorNickname } from '@utils/storage';

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

      // 로그인 (이미 가입된 회원)
      // 서버에서 받아오는 role
      if (responseRole) {
        setRole(responseRole);
        // 온보딩 완료 후 이탈한 선배 경우
        if (responseRole === 'SENIOR_PENDING') {
          setSeniorNickname(data.data.data.nickname);
          navigate('/seniorProfile');
        // 가입 완료된 경우
        } else {
          navigate(responseRole === 'SENIOR' ? '/promiseList' : '/juniorPromise');
        }

        // 회원가입
        // join 페이지에서 navigation state로 받아온 role
      } else if (role) {
        navigate(role === 'SENIOR_PENDING' ? '/seniorOnboarding' : '/juniorOnboarding');

        // 존재하지 않는 계정으로 로그인을 시도했을 경우
      } else {
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
