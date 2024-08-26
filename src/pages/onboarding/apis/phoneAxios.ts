import { axios } from '@utils/apis';
import onboardingKeys from '../queryKeys';

export const phoneVerifyAxios = (phoneNumber: string) => {
  return axios.post(onboardingKeys.phoneVerify[0], {
    phoneNumber,
  });
};

export interface phoneVerifycodePropType {
  phoneNumber: string;
  verificationCode: string;
}

export const phoneVerifycodeAxios = ({ phoneNumber, verificationCode }: phoneVerifycodePropType) => {
  return axios.post(onboardingKeys.phonVerifyCode[0], {
    phoneNumber,
    verificationCode,
  });
};
