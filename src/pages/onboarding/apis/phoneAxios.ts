import { axios } from '@utils/apis';
import paths from '../queryKeys';

export const phoneVerifyAxios = (phoneNumber: string) => {
  return axios.post(paths.phoneVerify, {
    phoneNumber,
  });
};

export interface phoneVerifycodePropType {
  phoneNumber: string;
  verificationCode: string;
}

export const phoneVerifycodeAxios = ({ phoneNumber, verificationCode }: phoneVerifycodePropType) => {
  return axios.post(paths.phonVerifyCode, {
    phoneNumber,
    verificationCode,
  });
};
