import { useMutation } from '@tanstack/react-query';
import { ocrNameCardAxios } from '../apis/ocrAxios';

const useOCRBizQuery = () => {
  const mutation = useMutation({
    mutationFn: (imageFile: File) => ocrNameCardAxios(imageFile),
    onError: (error) => {
      console.log('biz-card ocr post Error: ', error);
    },
  });

  return mutation;
};

export default useOCRBizQuery;
