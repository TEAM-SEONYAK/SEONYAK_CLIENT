import { axios } from '@utils/apis';

export const phoneVerifyAxios = (phoneNumber: string) => {
  return axios.post('/phone/verify', {
    phoneNumber,
  });
};

export interface phoneVerifycodePropType {
  phoneNumber: string;
  verificationCode: string;
}

export const phoneVerifycodeAxios = ({ phoneNumber, verificationCode }: phoneVerifycodePropType) => {
  return axios.post('/phone/verifycode', {
    phoneNumber,
    verificationCode,
  });
};
