import { SignupAPIType } from "@pages/onboarding/type";
import { authAxios } from "@utils/apis";

const signupAxios = (signupInfo: SignupAPIType) => {
  return authAxios.patch(
    '/v1/auth/join',
    signupInfo,
  )
}

export default signupAxios;