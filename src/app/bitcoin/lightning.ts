import { AxiosInstance } from 'axios';
import { Channel, LightningInstance, NetworkStats, Node, NodeStats } from '../../interfaces/bitcoin/lightning';

export const useLightning = (api: AxiosInstance): LightningInstance => {
  const getNetworkStats = async () => {
    const { data } = await api.get<NetworkStats>(`/v1/lightning/statistics/latest`);
    return data;
  }

  const getNodesInCountry = async (params: { country: string }) => {
    const { data } = await api.get<Node[]>(`/v1/lightning/nodes/country/${params.country}`);
    return data;
  }

  const getNodesStatsPerCountry = async () => {
    const { data } = await api.get<any>(`/v1/lightning/nodes/countries`);
    return data;
  }

  const getNodesHostedByISP = async (params: { isp: number }) => {
    const { data } = await api.get<Node[]>(`/v1/lightning/nodes/isp/${params.isp}`);
    return data;
  }

  const getISPRanking = async () => {
    const { data } = await api.get<any>(`/v1/lightning/nodes/isp-ranking`);
    return data;
  }
  
  const getLiquidityRanking = async () => {
    const { data } = await api.get<Node[]>(`/v1/lightning/nodes/rankings/liquidity`);
    return data;
  }

  const getConnectivityRanking = async () => {
      const { data } = await api.get<Node[]>(`/v1/lightning/nodes/rankings/connectivity`);
      return data;
  }

  const getOldestNodes = async () => {
    const { data } = await api.get<Node[]>(`/v1/lightning/nodes/rankings/age`);
    return data;
  }

  const getNodeStats = async (params: { public_key: string }) => {
    const { data } = await api.get<Node>(`/v1/lightning/nodes/${params.public_key}`);
    return data;
  }

  const getHistoricalNodeStats = async (params: { public_key: string }) => {
    const { data } = await api.get<NodeStats[]>(`/v1/lightning/nodes/${params.public_key}/statistics`);
    return data;
  }

  const getChannel = async (params: { id: string }) => {
    const { data } = await api.get<Channel>(`/v1/lightning/channels/${params.id}`);
    return data;
  }

  const getChannelsFromTxIds = async (params: { txId: string[] }) => {
    const { data } = await api.get<any[]>(`/v1/lightning/channels/txids?txId[]=${params.txId.join('&txId[]=')}`);
    return data;
  }

  const getChannelsFromNodePublicKey = async (params: { public_key: string, status: string, index?: number }) => {
    const { data } = await api.get<Channel[]>(`/v1/lightning/channels?public_key=${params.public_key}&status=${params.status}&index=${params?.index}`);
    return data;
  }

  const getChannelsGeodata = async () => {
    const { data } = await api.get<any[]>(`/v1/lightning/channels-geo`);
    return data;
  }

  const getChannelsGeodataByPublicKey = async (params: { public_key: string }) => {
    const { data } = await api.get<any[]>(`/v1/lightning/channels-geo/${params.public_key}`);
    return data;
  }

  return {
    getNetworkStats,
    getNodesInCountry,
    getNodesStatsPerCountry,
    getNodesHostedByISP,
    getISPRanking,
    getLiquidityRanking,
    getConnectivityRanking,
    getOldestNodes,
    getNodeStats,
    getHistoricalNodeStats,
    getChannel,
    getChannelsFromTxIds,
    getChannelsFromNodePublicKey,
    getChannelsGeodata,
    getChannelsGeodataByPublicKey,
  };
};
