import { clearStorage, getToken } from '@utils/storage';
import * as _axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;

export const axios = _axios.default.create({
  baseURL: `${baseUrl}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authAxios = _axios.default.create({
  baseURL: `${baseUrl}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

authAxios.interceptors.request.use(
  (config) => {
    const accessToken = getToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authAxios.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response.data.code === '40076') {
      alert(`세션이 만료되었습니다.\n다시 로그인해주세요.`);
      clearStorage();
      location.href = '/';
    }
    return Promise.reject(err);
  }
);
