import { axios } from '@utils/apis';

export const univNameAxios = (univName: string) => {
  return axios.get('/search/univ', {
    params: {
      univName,
    },
  });
};

export const departmentAxios = (univName: string, deptName: string) => {
  return axios.get('/search/dept', {
    params: {
      univName,
      deptName,
    },
  });
};
