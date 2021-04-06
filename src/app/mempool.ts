import { AxiosInstance } from 'axios';
import { Mempool, MempoolRecent, MempoolInstance } from '../interfaces';

export const useMempool = (api: AxiosInstance): MempoolInstance => {
  const getMempool = async () => {
    const res = await api.get<Mempool[]>(`/mempool`);
    return res.data;
  };

  const getMempoolTxids = async () => {
    const res = await api.get<string[]>(`/mempool/txids`);
    return res.data;
  };

  const getMempoolRecent = async () => {
    const res = await api.get<MempoolRecent[]>(`/mempool/recent`);
    return res.data;
  };

  return {
    getMempool,
    getMempoolTxids,
    getMempoolRecent,
  };
};
