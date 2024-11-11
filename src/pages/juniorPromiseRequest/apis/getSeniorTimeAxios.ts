// 선배 선호 시간대 GET
import { authAxios } from '@utils/apis';

export const getSeniorTimeAxios = async (seniorId: number) => {
  try {
    const response = await authAxios.get(`/api/v1/senior/time/${seniorId}`);

    return response.data.data.preferredTimeList;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
