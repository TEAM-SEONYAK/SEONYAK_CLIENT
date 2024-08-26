import { axios } from '@utils/apis';

export interface univVerifyPropType {
  email: string;
  univName: string;
  code?: string;
}

export const univVerifyAxios = ({ email, univName }: univVerifyPropType) => {
  return axios.post('/univ/verify', {
    email,
    univName,
  });
};

export const univVerifycodeAxios = ({ email, univName, code }: univVerifyPropType) => {
  return axios.post('/univ/verifycode', {
    email,
    univName,
    code,
  });
};
