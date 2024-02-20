import axios, { AxiosInstance } from 'axios';
import { MempoolConfig } from '../../interfaces';

export const makeBitcoinAPI = ({
  hostname,
  network,
  protocol,
  config,
}: MempoolConfig): { api: AxiosInstance } => {
  protocol = protocol ?? hostname?.includes('localhost') ? 'http' : 'https';
  if (network && ['testnet', 'signet'].includes(network)) {
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
  protocol = protocol ?? hostname?.includes('localhost') ? 'http' : 'https';
  if (network && ['testnet', 'signet'].includes(network)) {
    network = `/${network}`;
  } else {
    network = '';
  }
  protocol = protocol ?? hostname?.includes('localhost') ? 'http' : 'https';
  if (network && ['testnet', 'signet'].includes(network)) {
    network = `/${network}`;
  } else {
    network = '';
  }

  const api = axios.create({
    baseURL: `${protocol}://${hostname}/liquid/api/`,
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
