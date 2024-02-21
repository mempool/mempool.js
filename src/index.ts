import { MempoolConfig, MempoolReturn } from './interfaces/index';
import { makeBitcoinAPI, makeLiquidAPI } from './services/api/index';

import { useAddresses } from './app/bitcoin/addresses';
import { useBlocks } from './app/bitcoin/blocks';
import { useDifficulty } from './app/bitcoin/difficulty';
import { useFees } from './app/bitcoin/fees';
import { useLightning } from './app/bitcoin/lightning';
import { useMempool } from './app/bitcoin/mempool';
import { useTransactions } from './app/bitcoin/transactions';
import { useWebsocket } from './app/bitcoin/websocket';

import { useAssets as useAssetsLiquid } from './app/liquid/assets';
import { useAddresses as useAddressesLiquid } from './app/liquid/addresses';
import { useBlocks as useBlocksLiquid } from './app/liquid/blocks';
import { useFees as useFeesLiquid } from './app/liquid/fees';
import { useMempool as useMempoolLiquid } from './app/liquid/mempool';
import { useTransactions as useTransactionsLiquid } from './app/liquid/transactions';
import { useWebsocket as useWebsocketLiquid } from './app/liquid/websocket';

const hostnameEndpointDefault = 'mempool.space';
const networkEndpointDefault = 'main';

const mempool = (
  { hostname, network, protocol, config }: MempoolConfig = {
    hostname: hostnameEndpointDefault,
    network: networkEndpointDefault,
  }
): MempoolReturn => {
  if (!hostname) hostname = hostnameEndpointDefault;
  if (!network) network = networkEndpointDefault;

  const { api: apiBitcoin } = makeBitcoinAPI({
    hostname,
    network,
    protocol,
    config,
  });
  const { api: apiLiquid } = makeLiquidAPI({
    hostname,
    network,
    protocol,
    config,
  });
  return {
    bitcoin: {
      addresses: useAddresses(apiBitcoin),
      blocks: useBlocks(apiBitcoin),
      difficulty: useDifficulty(apiBitcoin),
      fees: useFees(apiBitcoin),
      lightning: useLightning(apiBitcoin),
      mempool: useMempool(apiBitcoin),
      transactions: useTransactions(apiBitcoin),
      websocket: useWebsocket(hostname, network, protocol),
    },
    liquid: {
      addresses: useAddressesLiquid(apiLiquid),
      assets: useAssetsLiquid(apiLiquid),
      blocks: useBlocksLiquid(apiLiquid),
      fees: useFeesLiquid(apiLiquid),
      mempool: useMempoolLiquid(apiLiquid),
      transactions: useTransactionsLiquid(apiLiquid),
      websocket: useWebsocketLiquid(hostname, network, protocol),
    },
  };
};

mempool.default = mempool;
export = mempool;
