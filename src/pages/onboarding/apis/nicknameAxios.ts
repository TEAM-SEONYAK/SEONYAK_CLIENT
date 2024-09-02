import { axios } from '@utils/apis';

export const nicknameAxios = (nickname: string) => {
  return axios.post('/v1/nickname', {
    nickname,
  });
};
