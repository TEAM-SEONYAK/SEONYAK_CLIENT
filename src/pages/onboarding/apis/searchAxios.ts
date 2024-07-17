import { axios } from '@utils/apis';

export const univNameAxios = async (univName: string) => {
  return await axios.get('/v1/search/univ', {
    params: {
      univName,
    },
  });
};

export const departmentAxios = async (univName: string, deptName: string) => {
  return await axios.get('/v1/search/dept', {
    params: {
      univName,
      deptName,
    },
  });
};
