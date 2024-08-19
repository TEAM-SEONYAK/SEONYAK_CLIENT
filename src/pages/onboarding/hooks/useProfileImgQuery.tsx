import { useMutation } from '@tanstack/react-query';
import { uploadProfileImageAxios } from '../apis/profileImageAxios';

export const useProfileQuery = () => {
  return useMutation({
    mutationFn: ({ url, image }: { url: string; image: File }) => uploadProfileImageAxios(url, image),
  });
};
