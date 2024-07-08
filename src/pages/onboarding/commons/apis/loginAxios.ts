import axios from 'axios';

export const loginAxios = (authorizationCode: string | undefined) => {
  return axios.post(
    'https://api.seonyak-dev.kro.kr/api/v1/auth/login',
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
