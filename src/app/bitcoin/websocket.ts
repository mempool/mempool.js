import { WsInstance } from '../../interfaces/bitcoin/websockets';
import { 
  wsInit as wsInitBrowser,
  wsWantData as wsWantDataBrowser,
  wsStopData as wsStopDataBrowser,
  wsTrackAddress as wsTrackAddressBrowser,
  wsStopTrackingAddress as wsStopTrackingAddressBrowser,
  wsTrackAddresses as wsTrackAddressesBrowser,
  wsStopTrackingAddresses as wsStopTrackingAddressesBrowser,
  wsTrackTransaction as wsTrackTransactionBrowser,
  wsStopTrackingTransaction as wsStopTrackingTransactionBrowser,
  wsTrackRbfSummary as wsTrackRbfSummaryBrowser,
  wsStopTrackingRbfSummary as wsStopTrackingRbfSummaryBrowser,
  wsTrackRbf as wsTrackRbfBrowser,
  wsStopTrackingRbf as wsStopTrackingRbfBrowser,
  wsTrackMempoolBlock as wsTrackMempoolBlockBrowser,
  wsStopTrackingMempoolBlock as wsStopTrackingMempoolBlockBrowser,
} from '../../services/ws/ws-client-browser';
import { 
  wsInit,
  wsWantData,
  wsStopData,
  wsTrackAddress,
  wsStopTrackingAddress,
  wsTrackAddresses,
  wsStopTrackingAddresses,
  wsTrackTransaction,
  wsStopTrackingTransaction,
  wsTrackRbfSummary,
  wsStopTrackingRbfSummary,
  wsTrackRbf,
  wsStopTrackingRbf,
  wsTrackMempoolBlock,
  wsStopTrackingMempoolBlock
 } from '../../services/ws/ws-client-node';
import WebSocketServer from 'ws';

export const useWebsocket = (hostname: string, network: string, protocol: string | undefined): WsInstance => {

  if (!protocol) {
    hostname?.includes('localhost') ? protocol = 'ws' : protocol = 'wss';
  } else if (protocol === 'http' || protocol === 'ws') {
    protocol = 'ws';
  } else {
    protocol = 'wss';
  }
  if (network && ['testnet', 'signet'].includes(network)) {
    network = `/${network}`;
  } else {
    network = '';
  }

  const wsEndpoint = `${protocol}://${hostname}${network}/api/v1/ws`
  return {
    wsInit: () => wsInit(wsEndpoint),
    wsInitBrowser: () => wsInitBrowser(wsEndpoint),
    wsWantData: (ws: WebSocketServer, options: string[]) => wsWantData(ws, options),
    wsWantDataBrowser: (ws: WebSocket, options: string[]) => wsWantDataBrowser(ws, options),
    wsStopData: (ws: WebSocketServer) => wsStopData(ws),
    wsStopDataBrowser: (ws: WebSocket) => wsStopDataBrowser(ws),
    wsTrackAddress: (ws: WebSocketServer, address: string) => wsTrackAddress(ws, address),
    wsTrackAddressBrowser: (ws: WebSocket, address: string) => wsTrackAddressBrowser(ws, address),
    wsStopTrackingAddress: (ws: WebSocketServer) => wsStopTrackingAddress(ws),
    wsStopTrackingAddressBrowser: (ws: WebSocket) => wsStopTrackingAddressBrowser(ws),
    wsTrackAddresses: (ws: WebSocketServer, addresses: string[]) => wsTrackAddresses(ws, addresses),
    wsTrackAddressesBrowser: (ws: WebSocket, addresses: string[]) => wsTrackAddressesBrowser(ws, addresses),
    wsStopTrackingAddresses: (ws: WebSocketServer) => wsStopTrackingAddresses(ws),
    wsStopTrackingAddressesBrowser: (ws: WebSocket) => wsStopTrackingAddressesBrowser(ws),
    wsTrackTransaction: (ws: WebSocketServer, txid: string) => wsTrackTransaction(ws, txid),
    wsTrackTransactionBrowser: (ws: WebSocket, txid: string) => wsTrackTransactionBrowser(ws, txid),
    wsStopTrackingTransaction: (ws: WebSocketServer) => wsStopTrackingTransaction(ws),
    wsStopTrackingTransactionBrowser: (ws: WebSocket) => wsStopTrackingTransactionBrowser(ws),
    wsTrackRbfSummary: (ws: WebSocketServer) => wsTrackRbfSummary(ws),
    wsTrackRbfSummaryBrowser: (ws: WebSocket) => wsTrackRbfSummaryBrowser(ws),
    wsStopTrackingRbfSummary: (ws: WebSocketServer) => wsStopTrackingRbfSummary(ws),
    wsStopTrackingRbfSummaryBrowser: (ws: WebSocket) => wsStopTrackingRbfSummaryBrowser(ws),
    wsTrackRbf: (ws: WebSocketServer, fullRbf: boolean) => wsTrackRbf(ws, fullRbf),
    wsTrackRbfBrowser: (ws: WebSocket, fullRbf: boolean) => wsTrackRbfBrowser(ws, fullRbf),
    wsStopTrackingRbf: (ws: WebSocketServer) => wsStopTrackingRbf(ws),
    wsStopTrackingRbfBrowser: (ws: WebSocket) => wsStopTrackingRbfBrowser(ws),
    wsTrackMempoolBlock: (ws: WebSocketServer, index: number) => wsTrackMempoolBlock(ws, index),
    wsTrackMempoolBlockBrowser: (ws: WebSocket, index: number) => wsTrackMempoolBlockBrowser(ws, index),
    wsStopTrackingMempoolBlock: (ws: WebSocketServer) => wsStopTrackingMempoolBlock(ws),
    wsStopTrackingMempoolBlockBrowser: (ws: WebSocket) => wsStopTrackingMempoolBlockBrowser(ws),
  };
};
