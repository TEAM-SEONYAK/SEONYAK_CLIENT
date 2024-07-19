import { useMutation } from '@tanstack/react-query';
import { businessCardAxios } from '../apis/businesscardAxios';

export const useBusinessCardQuery = () => {
  const mutation = useMutation({
    mutationFn: (image: File) => businessCardAxios(image),
    onError: (error) => {
      console.log('명함 업로드 에러: ', error);
    },
  });

  return mutation;
};
