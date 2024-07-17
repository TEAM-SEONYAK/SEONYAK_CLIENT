import { phoneVerifyAxios, phoneVerifycodeAxios, phoneVerifycodePropType } from "@pages/onboarding/apis/phoneAxios"
import { useMutation } from "@tanstack/react-query"

export const usePhoneVerify = () => {
  const mutation = useMutation({
    mutationFn: (phoneNumber: string) => phoneVerifyAxios(phoneNumber),
    onError: (error) => {
      console.log('phone verify post Error: ', error);
    }
  });

  return mutation;
}

export const usePhoneVerifycode = () => {
  const mutation = useMutation({
    mutationFn: ({ phoneNumber, verificationCode }: phoneVerifycodePropType) => phoneVerifycodeAxios({ phoneNumber, verificationCode }),
    onError: (error) => {
      console.log('phone verifycode post Error: ', error);
    }
  })
}