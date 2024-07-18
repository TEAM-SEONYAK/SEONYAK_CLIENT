import { axios } from "@utils/apis"

export const phoneVerifyAxios = (phoneNumber: string) => {
  return axios.post(
    '/v1/phone/verify',
    {
      phoneNumber,
    }
  )
};

export interface phoneVerifycodePropType {
  phoneNumber: string;
  verificationCode: string;
}

export const phoneVerifycodeAxios = ({ phoneNumber, verificationCode }: phoneVerifycodePropType) => {
  return axios.post(
    '/v1/phone/verifycode',
    {
      phoneNumber,
      verificationCode,
    }
  )
};
