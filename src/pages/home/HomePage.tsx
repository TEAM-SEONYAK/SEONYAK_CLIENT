import { getRole, getToken } from '@utils/storage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const token = getToken();
  const role = getRole();

  useEffect(() => {
    if (token && role) {
      navigate(role === 'SENIOR' ? '/promiseList' : '/juniorPromise');
    } else {
      navigate('/join');
    }
  }, [token, role]);

  return null;
};

export default HomePage;
