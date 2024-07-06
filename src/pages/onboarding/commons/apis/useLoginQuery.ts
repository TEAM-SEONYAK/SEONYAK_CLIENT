import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type LoginResponse = {
  code: string;
  data: {
    accessToken: string;
  };
};

const login = (google_accessToken: string) => {
  console.log('login called');

  return axios
    .post('/api/v1/auth/login', {
      google_accessToken,
    })
    .then(({ data }) => data as LoginResponse);
};

export const useLoginQuery = (google_accessToken: string) => {
  const data = useQuery({
    queryKey: ['login'],
    queryFn: () => login(google_accessToken),
    enabled: !!google_accessToken,
    staleTime: Infinity,
  });
  return data;
};
