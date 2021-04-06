import axios, { AxiosInstance } from 'axios';
import { APIConfig } from './interfaces';

export const makeAPI = (
  { apiEndpoint }: APIConfig = { apiEndpoint: 'https://mempool.space/api/' }
): { api: AxiosInstance } => {
  const api = axios.create({
    baseURL: apiEndpoint,
  });
  return {
    api,
  };
};
