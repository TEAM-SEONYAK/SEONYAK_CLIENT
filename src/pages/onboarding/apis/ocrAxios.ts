import { axios } from '@utils/apis';
import paths from '../queryKeys';

export const ocrUnivAxios = (imageFile: File) => {
  return axios.post(
    paths.univ,
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
    paths.businessCard,
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
