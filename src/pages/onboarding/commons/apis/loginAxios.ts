import axios from 'axios';

export const loginAxios = (authorizationCode: string | undefined) => {
  return axios.post(
    'https://api.seonyak-dev.kro.kr/api/v1/auth/login',
    {
      redirectUri: 'https://api.seonyak-dev.kro.kr/login/oauth2/code/google',
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
