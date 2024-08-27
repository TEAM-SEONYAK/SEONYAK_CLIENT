import { axios } from '@utils/apis';
import paths from '../queryKeys';

export interface univVerifyPropType {
  email: string;
  univName: string;
  code?: string;
}

export const univVerifyAxios = ({ email, univName }: univVerifyPropType) => {
  return axios.post(paths.univVerify, {
    email,
    univName,
  });
};

export const univVerifycodeAxios = ({ email, univName, code }: univVerifyPropType) => {
  return axios.post(paths.univVerifycode, {
    email,
    univName,
    code,
  });
};
