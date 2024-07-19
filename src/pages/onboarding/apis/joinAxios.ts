import { authAxios } from '@utils/apis';
import { JoinPropType, JoinRequesetType } from '../type';

export const joinAxios = (requestBody: JoinPropType) => {
  const request: JoinRequesetType = {
    ...requestBody,
    image: '',
    isSubscribed: requestBody.isSubscribed[4],
  };
  return authAxios.patch('/v1/auth/join', {
    request,
  });
};
