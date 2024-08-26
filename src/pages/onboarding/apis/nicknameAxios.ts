import { axios } from '@utils/apis';
import onboardingKeys from '../queryKeys';

export const nicknameAxios = (nickname: string) => {
  return axios.post(onboardingKeys.nickname[0], {
    nickname,
  });
};
