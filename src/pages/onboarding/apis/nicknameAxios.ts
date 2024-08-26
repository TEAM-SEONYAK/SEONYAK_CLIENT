import { axios } from '@utils/apis';

export const nicknameAxios = (nickname: string) => {
  return axios.post('/nickname', {
    nickname,
  });
};
