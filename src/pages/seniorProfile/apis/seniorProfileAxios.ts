import { seniorProfileAPIType } from '@pages/seniorProfile/types';
import { testAuthAxios } from '@utils/apis';

// export const seniorProfileAxios = ({ catchphrase, career, award, story, preferredTimeList }: seniorProfileAPIType) => {
//   return authAxios.patch(
//     '/v1/senior/profile',
//     {
//       catchphrase, career, award, story, preferredTimeList,
//     },
//   )
// }

export const seniorProfileAxios = ({ catchphrase, career, award, story, preferredTimeList }: seniorProfileAPIType) => {
  return testAuthAxios.patch('/v1/senior/profile', {
    catchphrase,
    career,
    award,
    story,
    preferredTimeList,
  });
};
