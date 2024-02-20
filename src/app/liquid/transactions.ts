import { AxiosInstance } from 'axios';
import {
  Tx,
  TxStatus,
  TxMerkleProof,
  TxOutspend,
  TxLiquidInstance,
} from '../../interfaces/liquid/transactions';

export const useTransactions = (api: AxiosInstance): TxLiquidInstance => {
  const getTx = async (params: { txid: string }) => {
    const { data } = await api.get<Tx>(`/tx/${params.txid}`);
    return data;
  };

  const getTxStatus = async (params: { txid: string }) => {
    const { data } = await api.get<TxStatus>(`/tx/${params.txid}/status`);
    return data;
  };

  const getTxHex = async (params: { txid: string }) => {
    const { data } = await api.get<string>(`/tx/${params.txid}/hex`);
    return data;
  };

  const getTxRaw = async (params: { txid: string }) => {
    const { data } = await api.get<string>(`/tx/${params.txid}/raw`);
    return data;
  };

  const getTxMerkleProof = async (params: { txid: string }) => {
    const { data } = await api.get<TxMerkleProof>(
      `/tx/${params.txid}/merkle-proof`
    );
    return data;
  };

  const getTxOutspend = async (params: { txid: string; vout: number }) => {
    const { data } = await api.get<TxOutspend>(
      `/tx/${params.txid}/outspend/${params.vout}`
    );
    return data;
  };

  const getTxOutspends = async (params: { txid: string }) => {
    const { data } = await api.get<Array<TxOutspend>>(
      `/tx/${params.txid}/outspends`
    );
    return data;
  };

  const postTx = async (params: { txhex: string }) => {
    const { data } = await api.post<string>(`/tx`, params.txhex );
    return data;
  };

  return {
    getTx,
    getTxStatus,
    getTxHex,
    getTxRaw,
    getTxMerkleProof,
    getTxOutspend,
    getTxOutspends,
    postTx,
  };
};
