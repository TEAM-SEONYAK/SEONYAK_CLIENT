import { axios } from '@utils/apis';
import onboardingKeys from '../queryKeys';

export const univNameAxios = (univName: string) => {
  return axios.get(onboardingKeys.searchUniv[0], {
    params: {
      univName,
    },
  });
};

export const departmentAxios = (univName: string, deptName: string) => {
  return axios.get(onboardingKeys.searchDept[0], {
    params: {
      univName,
      deptName,
    },
  });
};
