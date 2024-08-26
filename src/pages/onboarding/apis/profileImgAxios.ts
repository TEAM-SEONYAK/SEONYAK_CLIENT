import { authAxios } from '@utils/apis';

export const profileImgAxios = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('profileImage', file);

    const response = await authAxios.patch('/profile-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
