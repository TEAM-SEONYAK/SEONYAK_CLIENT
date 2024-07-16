import { nicknameAxios } from "@pages/onboarding/apis/nicknameAxios"
import { useMutation } from "@tanstack/react-query"

const useNicknameValid = () => {
  const mutation = useMutation({
    mutationFn: (nickname: string) => nicknameAxios(nickname),
    onError: (error) => {
      console.log('nickname post Error: ', error)
    }
  });

  return mutation;
};

export default useNicknameValid;
