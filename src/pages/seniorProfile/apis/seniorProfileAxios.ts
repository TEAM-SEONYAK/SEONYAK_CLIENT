import { seniorProfileAPIType } from '@pages/seniorProfile/types';
import { authAxios } from '@utils/apis';

export const seniorProfileAxios = ({ catchphrase, career, award, story, preferredTimeList }: seniorProfileAPIType) => {
  return authAxios.patch('/v1/senior/profile', {
    catchphrase,
    career,
    award,
    story,
    preferredTimeList,
  });
};
