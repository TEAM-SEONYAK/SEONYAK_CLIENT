import { useEffect } from 'react';
import useGoogleLoginHook from './hooks/useLoginQuery';

const LoginCallback = () => {
  const role = localStorage.getItem('role');
  const { mutation } = useGoogleLoginHook({ role: role || undefined });
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  console.log('리디렉왔어용~ 코드는 : ', code);

  useEffect(() => {
    if (code) mutation.mutate(code);
  }, [code]);

  return null;
};

export default LoginCallback;
