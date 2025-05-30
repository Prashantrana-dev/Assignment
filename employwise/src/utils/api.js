import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
