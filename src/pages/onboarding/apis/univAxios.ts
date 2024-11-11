import { axios } from '@utils/apis';

export interface univVerifyPropType {
  email: string;
  univName?: string;
  code?: string;
}

export const univVerifyAxios = ({ email, univName }: univVerifyPropType) => {
  return axios.post('/api/v1/univ/verify', {
    univName,
    univMail: email,
  });
};

export const univVerifycodeAxios = ({ email, code }: univVerifyPropType) => {
  return axios.post('/api/v1/univ/verifycode', {
    univEmail: email,
    verificationCode: code,
  });
};
