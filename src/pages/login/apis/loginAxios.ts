import { axios } from '@utils/apis';

export const loginAxios = (authorizationCode: string | undefined) => {
  return axios.post(
    '/v1/auth/login',
    {
      redirectUri: 'seonyak.com/join',
      socialType: 'GOOGLE',
    },
    {
      params: {
        authorizationCode,
      },
    },
  );
};
