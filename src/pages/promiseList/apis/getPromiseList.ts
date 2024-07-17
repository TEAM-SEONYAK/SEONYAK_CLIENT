// 오늘의 선약, 확정 대기, 예정 약속, 지난 약속 조회 GET
import { authAxios } from '@utils/apis';

export const getPromiseList = async () => {
  try {
    const response = await authAxios.get(`/v1/appointment`);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error('약속 리스트 에러:', error);
    throw error;
  }
};
