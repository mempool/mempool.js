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

export const makeBisqAPI = ({
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
    baseURL: `${protocol}://${hostname}/bisq/api/`,
    ...config,
  });
  return {
    api,
  };
};

export const makeBisqMarketsAPI = (): { api: AxiosInstance } => {
  const api = axios.create({
    baseURL: `https://bisq.markets/api/v1/markets/`,
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
  makeBisqAPI,
  makeBisqMarketsAPI,
  makeLiquidAPI,
};
