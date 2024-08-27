import { authAxios } from '@utils/apis';
import paths from '../queryKeys';

export const businessCardAxios = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('businessCardImage', file);

    const response = await authAxios.patch(paths.businessCardImage, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
