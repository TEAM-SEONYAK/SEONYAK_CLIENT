// 후배 약속 신청 POST
import { authAxios } from '@utils/apis';

export const getSeniorTimeAxios = async (seniorId: number) => {
  try {
    const response = await authAxios.get(`/api/v1/senior/time/${seniorId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
