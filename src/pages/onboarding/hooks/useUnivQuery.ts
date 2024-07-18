import { univVerifyAxios, univVerifycodeAxios, univVerifyPropType } from "@pages/onboarding/apis/univAxios";
import { useMutation } from "@tanstack/react-query"

export const useUnivVerify = () => {
  const mutation = useMutation({
    mutationFn: ({ email, univName }: univVerifyPropType) => univVerifyAxios({ email, univName }),
    onError: (error) => {
      console.log('phone verify post Error: ', error);
    }
  });

  return mutation;
}

export const useUnivVerifycode = () => {
  const mutation = useMutation({
    mutationFn: ({ email, univName, code }: univVerifyPropType) => univVerifycodeAxios({ email, univName, code }),
    onError: (error) => {
      console.log('phone verifycode post Error: ', error);
    }
  });

  return mutation;
}