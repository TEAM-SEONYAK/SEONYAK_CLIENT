import { getRole, getToken } from '@utils/storage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const token = getToken();
  const role = getRole();

  useEffect(() => {
    if (token && role) {
      // 온보딩 완료 후 이탈한 선배 (프로필 등록 안 한 선배)
      if (role === 'SENIOR_PENDING') {
        navigate('/seniorProfile');
      } else {
        navigate(role === 'SENIOR' ? '/promiseList' : '/juniorPromise');
      }
    } else {
      navigate('/join');
    }
  }, [token, role]);

  return null;
};

export default HomePage;
