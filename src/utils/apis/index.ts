import * as _axios from 'axios';

export const axios = _axios.default.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

export const authAxios = _axios.default.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

authAxios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
