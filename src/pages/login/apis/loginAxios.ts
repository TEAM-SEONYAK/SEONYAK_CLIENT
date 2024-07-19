import { axios } from '@utils/apis';

export const loginAxios = (authorizationCode: string | undefined) => {
  return axios.post(
    '/v1/auth/login',
    {
      redirectUri: 'http://192.168.45.137:5173/',
      socialType: 'GOOGLE',
    },
    {
      params: {
        authorizationCode,
      },
    },
  );
};
