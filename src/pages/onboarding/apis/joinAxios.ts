import { authAxios } from '@utils/apis';
import { JoinRequesetType } from '../type';

export const joinAxios = (requestBody: JoinRequesetType) => {
  return authAxios.patch('/v1/auth/join', {
    requestBody,
  });
};
