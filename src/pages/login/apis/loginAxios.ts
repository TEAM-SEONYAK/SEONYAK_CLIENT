import { axios } from '@utils/apis';

export const loginAxios = (authorizationCode: string) => {
  console.log('🚀 login post 쐈어용 ~ ');
  return axios.post(
    '/v1/auth/login',
    {
      redirectUri: 'http://localhost:5173/auth/google',
      socialType: 'GOOGLE',
    },
    {
      params: {
        authorizationCode,
      },
    },
  );
};
