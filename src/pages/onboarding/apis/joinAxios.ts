import { authAxios } from '@utils/apis';
import { JoinPropType } from '../type';

export const joinAxios = (requestBody: JoinPropType) => {
  // 불필요한 데이터 필터링
  const { imageFile, ...request } = requestBody;

  return authAxios.patch('/v1/auth/join', { ...request, isSubscribed: requestBody.isSubscribed[4] });
};
