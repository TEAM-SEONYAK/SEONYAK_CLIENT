import { axios } from '@utils/apis';

export const univNameAxios = (univName: string) => {
  return axios.get('/api/v1/search/univ', {
    params: {
      univName,
    },
  });
};

export const departmentAxios = (univName: string, deptName: string) => {
  return axios.get('/api/v1/search/dept', {
    params: {
      univName,
      deptName,
    },
  });
};
