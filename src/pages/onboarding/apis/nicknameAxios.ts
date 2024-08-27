import { axios } from '@utils/apis';
import paths from '../queryKeys';

export const nicknameAxios = (nickname: string) => {
  return axios.post(paths.nickname, {
    nickname,
  });
};
