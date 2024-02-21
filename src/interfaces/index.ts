import { AddressInstance } from './bitcoin/addresses';
import { BlockInstance } from './bitcoin/blocks';
import { DifficultyInstance } from './bitcoin/difficulty';
import { FeeInstance } from './bitcoin/fees';
import { LightningInstance } from './bitcoin/lightning';
import { MempoolInstance } from './bitcoin/mempool';
import { TxInstance } from './bitcoin/transactions';
import { WsInstance } from './bitcoin/websockets';

import { AssetsInstance } from './liquid/assets';
import { BlockLiquidInstance } from './liquid/blocks';
import { TxLiquidInstance } from './liquid/transactions';
import { WsLiquidInstance } from './liquid/websockets';
import { AxiosRequestConfig } from 'axios';
export interface MempoolConfig {
  protocol?: 'http' | 'https';
  hostname?: string;
  network?: string;
  config?: AxiosRequestConfig;
}

export interface MempoolReturn {
  bitcoin: {
    addresses: AddressInstance;
    blocks: BlockInstance;
    difficulty: DifficultyInstance;
    fees: FeeInstance;
    lightning: LightningInstance
    mempool: MempoolInstance;
    transactions: TxInstance;
    websocket: WsInstance;
  };
  liquid: {
    assets: AssetsInstance;
    addresses: AddressInstance;
    blocks: BlockLiquidInstance;
    fees: FeeInstance;
    mempool: MempoolInstance;
    transactions: TxLiquidInstance;
    websocket: WsLiquidInstance;
  };
}
