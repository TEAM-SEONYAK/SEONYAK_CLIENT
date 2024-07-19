import { useMutation } from '@tanstack/react-query';
import { ocrUnivAxios } from '../apis/ocrAxios';

const useOCRUnivQuery = () => {
  const mutation = useMutation({
    mutationFn: (imageFile: File) => ocrUnivAxios(imageFile),
    onError: (error) => {
      console.log('univ ocr post Error: ', error);
    },
  });

  return mutation;
};

export default useOCRUnivQuery;
