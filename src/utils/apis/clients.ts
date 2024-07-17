import axios from 'axios';

export const client = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
});
