import { axios } from '@utils/apis';
import { QueryFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const univNameAxios: QueryFunction<AxiosResponse, string[]> = ({ queryKey }) => {
  return axios.get(queryKey[0]);
};

export const departmentAxios: QueryFunction<AxiosResponse, string[]> = ({ queryKey }) => {
  return axios.get(queryKey[0]);
};
