import { useMutation } from '@tanstack/react-query';
import { profileImageAxios, uploadProfileImageAxios } from '../apis/profileImageAxios';

export const useProfileQuery = () => {
  return useMutation({
    mutationFn: ({ url, image }: { url: string; image: File }) => uploadProfileImageAxios(url, image),
    onSuccess: (res) => {
      console.log('🚀', res);
    },
    onError: (error) => {
      console.log('프로필 이미지 업로드 에러: ', error);
    },
  });
};
