import { MempoolConfig, MempoolReturn } from './interfaces';
import { makeAPI } from './api';

import { useAddresses } from './app/addresses';
import { useBlocks } from './app/blocks';
import { useFees } from './app/fees';
import { useMempool } from './app/mempool';
import { useTransactions } from './app/transactions';
import { useWebsocket } from './app/websocket';

export default (
  { apiEndpoint, websocketEndpoint }: MempoolConfig = {
    apiEndpoint: 'https://mempool.space/api/',
    websocketEndpoint: 'wss://mempool.space/api/v1/ws',
  }
): MempoolReturn => {
  const { api } = makeAPI({ apiEndpoint });

  return {
    addresses: useAddresses(api),
    blocks: useBlocks(api),
    fees: useFees(api),
    mempool: useMempool(api),
    transactions: useTransactions(api),
    websocket: useWebsocket({ websocketEndpoint }),
  };
};
