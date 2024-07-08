import axios from 'axios';

export const loginAxios = (authorizationCode: string | undefined) => {
  return axios.post(
    'https://www.seonyak.p-e.kr/api/v1/auth/login',
    {
      redirectUri: 'https://www.seonyak.p-e.kr/login/oauth2/code/google',
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
