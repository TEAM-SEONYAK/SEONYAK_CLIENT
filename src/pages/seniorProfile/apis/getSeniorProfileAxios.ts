import { authAxios } from '@utils/apis';

export const getSeniorProfileAxios = (seniorId: string) => {
  return authAxios.get(`/senior/${seniorId}`);
};
