import { authAxios } from '@utils/apis';
import paths from '../queryKeys';

export const profileImgAxios = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('profileImage', file);

    const response = await authAxios.patch(paths.profileImage, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
