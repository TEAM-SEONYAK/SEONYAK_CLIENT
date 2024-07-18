import signupAxios from "@pages/onboarding/apis/signupAxios"
import { SignupAPIType } from "@pages/onboarding/type"
import { useMutation } from "@tanstack/react-query"

const useSignupQuery = () => {
  const mutation = useMutation({
    mutationFn: (signupInfo: SignupAPIType) => signupAxios(signupInfo),
    onError: (error) => {
      console.log('signup patch Error: ', error)
    }
  });

  return mutation;
};

export default useSignupQuery;
