import { nicknameAxios } from '@pages/onboarding/apis/nicknameAxios';
import { useMutation } from '@tanstack/react-query';

const useNicknameValid = () => {
  const mutation = useMutation({
    mutationFn: (nickname: string) => nicknameAxios(nickname),
  });

  return mutation;
};

export default useNicknameValid;
