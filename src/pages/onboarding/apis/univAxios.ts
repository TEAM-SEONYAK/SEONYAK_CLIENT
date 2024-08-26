import { axios } from '@utils/apis';
import onboardingKeys from '../queryKeys';

export interface univVerifyPropType {
  email: string;
  univName: string;
  code?: string;
}

export const univVerifyAxios = ({ email, univName }: univVerifyPropType) => {
  return axios.post(onboardingKeys.univVerify[0], {
    email,
    univName,
  });
};

export const univVerifycodeAxios = ({ email, univName, code }: univVerifyPropType) => {
  return axios.post(onboardingKeys.univVerifycode[0], {
    email,
    univName,
    code,
  });
};
