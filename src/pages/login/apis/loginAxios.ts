import { axios } from '@utils/apis';

export const loginAxios = (authorizationCode: string | undefined) => {
  return axios.post(
    '/v1/auth/login',
    {
      redirectUri: 'http://localhost:5173',
      socialType: 'GOOGLE',
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        authorizationCode,
      },
    },
  );
};
