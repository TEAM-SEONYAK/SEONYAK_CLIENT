import * as _axios from 'axios';

export const axios = _axios.default.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authAxios = _axios.default.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
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

// 추후 삭제
export const testAuthAxios = _axios.default.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

testAuthAxios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MjEyNTY4MzMsImV4cCI6MTc4MTczNjgzMywibWVtYmVySWQiOjQ3fQ.3g0AGA6ZsLBIfSt7_M5ZKTaU1dncXM76M7RI-2TKSOROJHK6fRysM6gIQwymaSFmA0cmtCy9NOryJ-BG4C5wnQ`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
