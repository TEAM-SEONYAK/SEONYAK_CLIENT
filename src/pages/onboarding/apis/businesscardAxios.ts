import { authAxios } from '@utils/apis';
import onboardingKeys from '../queryKeys';

export const businessCardAxios = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('businessCardImage', file);

    const response = await authAxios.patch(onboardingKeys.businessCardImage[0], formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
