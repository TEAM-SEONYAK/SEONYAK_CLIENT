import { axios } from '@utils/apis';
import onboardingKeys from '../queryKeys';

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
    onboardingKeys.businessCard[0],
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
