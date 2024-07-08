import axios from 'axios';

axios.defaults.baseURL = '/api';
axios.defaults.withCredentials = true;

export const auth = axios.create({
  headers: {
    Authorization: '',
  },
});
