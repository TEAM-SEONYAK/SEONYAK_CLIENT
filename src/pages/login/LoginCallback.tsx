import { useEffect } from 'react';
import useGoogleLoginMutation from './hooks/useGoogleLoginMutation';

const LoginCallback = () => {
  const params = new URLSearchParams(window.location.search);
  const role = params.get('state');
  const code = params.get('code');
  
  const { mutate: login } = useGoogleLoginMutation({ role: role || undefined });

  useEffect(() => {
    if (code) login(code);
  }, [code]);

  return null;
};

export default LoginCallback;
