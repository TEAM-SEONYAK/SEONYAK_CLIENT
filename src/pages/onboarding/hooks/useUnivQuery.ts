import { univVerifyAxios, univVerifycodeAxios, univVerifyPropType } from '@pages/onboarding/apis/univAxios';
import { useMutation } from '@tanstack/react-query';

export const useUnivVerify = () => {
  const mutation = useMutation({
    mutationFn: ({ email, univName }: univVerifyPropType) => univVerifyAxios({ email, univName }),
    onError: (error) => {
      console.error('phone verify post Error: ', error);
    },
  });

  return mutation;
};

export const useUnivVerifycode = () => {
  const mutation = useMutation({
    mutationFn: ({ email, code }: univVerifyPropType) => univVerifycodeAxios({ email, code }),
    onError: (error) => {
      console.error('phone verifycode post Error: ', error);
    },
  });

  return mutation;
};
