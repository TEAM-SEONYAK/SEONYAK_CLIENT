import { authAxios } from '@utils/apis';

export const seniorCardAxios = (seniorId: string) => {
  return authAxios.get(`/senior/card/${seniorId}`);
};
