import { axios } from '@utils/apis';

export const loginAxios = (authorizationCode: string) => {
  return axios.post(
    '/auth/login',
    {
      redirectUri: import.meta.env.VITE_APP_GOOGLE_AUTH_REDIRECT_URI,
      socialType: 'GOOGLE',
    },
    {
      params: {
        authorizationCode,
      },
    }
  );
};
