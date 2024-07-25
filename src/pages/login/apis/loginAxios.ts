import { axios } from '@utils/apis';

export const loginAxios = (authorizationCode: string) => {
  console.log('🚀 login post 쐈어용 ~ ');
  return axios.post(
    '/v1/auth/login',
    {
      redirectUri: 'http://localhost:5173/login/oauth2/code/google',
      socialType: 'GOOGLE',
    },
    {
      params: {
        authorizationCode,
      },
    },
  );
  // console.log(response);
  // return axios.post(
  //   '/v1/auth/login',
  //   {
  //     redirectUri: 'http://localhost:5173/login/oauth2/code/google',
  //     socialType: 'GOOGLE',
  //   },
  //   {
  //     params: {
  //       authorizationCode,
  //     },
  //   },
  // );
};
