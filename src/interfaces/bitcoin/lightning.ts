import { Tx, TxStatus } from './transactions';

export interface NetworkStatsEntry {
  added: string;
  avg_base_fee_mtokens: number; 
  avg_capacity: number;
  avg_fee_rate: number;
  channel_count: number;
  clearnet_nodes: number;
  clearnet_tor_nodes: number;
  id: number; 
  med_base_fee_mtokens: number;
  med_capacity: number;
  med_fee_rate: number;
  node_count: number;
  tor_nodes: number;
  total_capacity: number;
  unannounced_nodes: number;
}

export interface NetworkStats {
  latest: NetworkStatsEntry;
  previous: NetworkStatsEntry;
}

export interface Node {
  alias: string;
  public_key: string;
  channels: number;
  capacity: number;
  updatedAt: string;
  base_fee_mtokens?: number;
  cltv_delta?: number;
  fee_rate?: number;
  is_disabled?: boolean;
  max_htlc_mtokens?: number;
  min_htlc_mtokens?: number;
  longitude?: number;
  latitude?: number;
  funding_balance?: number;
  closing_balance?: number;
  city?: any;
  country?: any;
  iso_code?: any;
  subdivision?: any;
  first_seen?: number;
  isp?: string;
  features?: any[];
  featuresBit?: string;
  active_channel_count?: number;
  opened_channel_count?: number;
  closed_channel_count?: number;
}


export interface NodeStats {
  added: number;
  capacity: number;
  channels: number;
}

export interface Channel {
  id: number;
  short_id: string;
  capacity: number;
  transaction_id: string;
  transaction_vout: number;
  closing_transaction_id: string;
  closing_reason: number;
  closing_fee: number;
  updated_at: string;
  closing_date?: string;
  created: string;
  status: number;
  funding_ratio?: number;
  closed_by?: string;
  single_funded?: boolean;
  node_left: Node,
  node_right: Node,
}

export interface LightningInstance {
  getNetworkStats: () => Promise<NetworkStats>;
  getNodesInCountry: (params: { country: string }) => Promise<Node[]>;
  getNodesStatsPerCountry: () => Promise<any>;
  getNodesHostedByISP: (params: { isp: number }) => Promise<Node[]>;
  getISPRanking: () => Promise<any>;
  getLiquidityRanking: () => Promise<Node[]>;
  getConnectivityRanking: () => Promise<Node[]>;
  getOldestNodes: () => Promise<Node[]>;
  getNodeStats: (params: { public_key: string }) => Promise<Node>;
  getHistoricalNodeStats: (params: { public_key: string }) => Promise<NodeStats[]>;
  getChannel: (params: { id: string }) => Promise<Channel>;
  getChannelsFromTxIds: (params: { txId: string[] }) => Promise<any[]>;
  getChannelsFromNodePublicKey: (params: { public_key: string, status: string, index?: number }) => Promise<Channel[]>;
  getChannelsGeodata: () => Promise<any>;
  getChannelsGeodataByPublicKey: (params: { public_key: string }) => Promise<any[]>;
}
