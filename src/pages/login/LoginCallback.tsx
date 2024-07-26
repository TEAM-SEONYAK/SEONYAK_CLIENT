import { useEffect } from 'react';
import useGoogleLoginMutation from './hooks/useGoogleLoginMutation';

const LoginCallback = () => {
  const role = localStorage.getItem('role');
  const { mutate: login } = useGoogleLoginMutation({ role: role || undefined });
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  console.log('리디렉왔어용~ 코드는 : ', code);

  useEffect(() => {
    if (code) login(code);
  }, [code]);

  return null;
};

export default LoginCallback;
