import { axios } from '@utils/apis';

export const ocrUnivAxios = (imageFile: File) => {
  return axios.post(
    '/api/v1/ocr/univ',
    {
      imageFile,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};

export const ocrNameCardAxios = (imageFile: File) => {
  return axios.post(
    '/api/v1/ocr/business-card',
    {
      imageFile,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};
