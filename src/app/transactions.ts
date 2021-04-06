import { AxiosInstance } from 'axios';
import {
  Tx,
  TxStatus,
  TxMerkleProof,
  TxOutspend,
  TxInstance,
} from '../interfaces';

export const useTransactions = (api: AxiosInstance): TxInstance => {
  const getTx = async (txid: string) => {
    return api.get<Tx>(`/tx/${txid}`).then((res: { data: Tx }) => {
      return res.data;
    });
  };

  const getTxStatus = async (txid: string) => {
    return api.get<TxStatus>(`/tx/${txid}/status`).then(({ data }) => data);
  };

  const getTxHex = async (txid: string) => {
    return api.get<string>(`/tx/${txid}/hex`).then(({ data }) => data);
  };

  const getTxRaw = async (txid: string) => {
    return api.get<string>(`/tx/${txid}/raw`).then(({ data }) => data);
  };

  const getTxMerkleBlockProof = async (txid: string) => {
    return api
      .get<string>(`/tx/${txid}/merkleblock-proof`)
      .then(({ data }) => data);
  };

  const getTxMerkleProof = async (txid: string) => {
    return api
      .get<Array<TxMerkleProof>>(`/tx/${txid}/merkle-proof`)
      .then(({ data }) => data);
  };

  const getTxOutspend = async (params: { txid: string; vout: number }) => {
    return api
      .get<TxOutspend>(`/tx/${params.txid}/outspend/${params.vout}`)
      .then(({ data }) => data);
  };

  const getTxOutspends = async (txid: string) => {
    return api
      .get<Array<TxOutspend>>(`/tx/${txid}/outspends`)
      .then(({ data }) => data);
  };

  const postTx = async (txid: string) => {
    return api
      .post<unknown>(`/tx`, { txid: txid })
      .then(({ data }) => data);
  };

  return {
    getTx,
    getTxStatus,
    getTxHex,
    getTxRaw,
    getTxMerkleBlockProof,
    getTxMerkleProof,
    getTxOutspend,
    getTxOutspends,
    postTx,
  };
};
