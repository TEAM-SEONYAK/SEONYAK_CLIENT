import { useMutation } from '@tanstack/react-query';
import { profileImgAxios } from '../apis/profileImgAxios';

export const useProfileQuery = () => {
  const mutation = useMutation({
    mutationFn: (image: File) => profileImgAxios(image),
    onError: (error) => {
      console.log('프로필 이미지 업로드 에러: ', error);
    },
  });

  return mutation;
};
