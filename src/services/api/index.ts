import axios, { AxiosInstance } from 'axios';
import { MempoolConfig } from '../../interfaces';

export const makeBitcoinAPI = ({
  hostname,
  network,
  protocol,
  config,
}: MempoolConfig): { api: AxiosInstance } => {
  if (!protocol) {
    hostname?.includes('localhost') ? protocol = 'http' : protocol = 'https';
  }
  if (network && ['testnet', 'testnet4', 'signet'].includes(network)) {
    network = `/${network}`;
  } else {
    network = '';
  }
  const api = axios.create({
    baseURL: `${protocol}://${hostname}${network}/api/`,
    ...config,
  });
  return {
    api,
  };
};

export const makeLiquidAPI = ({
  hostname,
  network,
  protocol,
  config,
}: MempoolConfig): { api: AxiosInstance } => {
  if (!protocol) {
    hostname?.includes('localhost') ? protocol = 'http' : protocol = 'https';
  }
  if (network && ['testnet', 'liquidtestnet'].includes(network)) {
    network = `/liquidtestnet`;
  } else {
    network = '/liquid';
  }
  const api = axios.create({
    baseURL: `${protocol}://${hostname}${network}/api/`,
    ...config,
  });
  return {
    api,
  };
};

export default {
  makeBitcoinAPI,
  makeLiquidAPI,
};
