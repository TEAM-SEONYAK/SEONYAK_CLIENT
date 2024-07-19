import { testAuthAxios } from '@utils/apis';

export const businessCardAxios = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('businessCardImage', file);

    const response = await testAuthAxios.patch('/v1/businesscard-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
