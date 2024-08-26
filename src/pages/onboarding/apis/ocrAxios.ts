import { axios } from '@utils/apis';

export const ocrUnivAxios = (imageFile: File) => {
  return axios.post(
    '/ocr/univ',
    {
      imageFile,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

export const ocrNameCardAxios = (imageFile: File) => {
  return axios.post(
    '/ocr/business-card',
    {
      imageFile,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};
