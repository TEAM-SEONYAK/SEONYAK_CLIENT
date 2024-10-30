import { useMutation } from '@tanstack/react-query';
import { uploadBusinessCardAxios } from '../apis/businesscardAxios';

export const useBusinessCardQuery = () => {
  return useMutation({
    mutationFn: ({ url, image }: { url: string; image: File }) => uploadBusinessCardAxios(url, image),
  });
};
