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
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MjEzODYyNTgsImV4cCI6MTc4MTg2NjI1OCwibWVtYmVySWQiOjJ9.YTtOIDAgg-qZhuiwA4ZxXeyKBpV6UU1XsSAlxNy1sr_2P1Hl7iL94b0EoR1zxuJfUlcgBH8oY0UZ4kj1VzNGyg',
  },
});

// authAxios.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );
