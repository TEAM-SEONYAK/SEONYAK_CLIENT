// 약속 상세 페이지 조회 GET
import { authAxios } from '@utils/apis';

export const getPromiseDetail = async (appointmentId: number) => {
  try {
    const response = await authAxios.get(`/v1/appointment/${appointmentId}`);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log('약속 상세 페이지 조회 에러: ', error);
    throw error;
  }
};
