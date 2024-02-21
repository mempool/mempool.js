import WebSocketServer from 'ws';

export interface WsLiquidInstance {
  wsInit: () => WebSocketServer;
  wsInitBrowser: () => WebSocket;
  wsWantData: (ws: WebSocketServer, options: string[]) => void;
  wsWantDataBrowser: (ws: WebSocket, options: string[]) => void;
  wsStopData: (ws: WebSocketServer) => void;
  wsStopDataBrowser: (ws: WebSocket) => void;
  wsTrackAddress: (ws: WebSocketServer, address: string) => void;
  wsTrackAddressBrowser: (ws: WebSocket, address: string) => void;
  wsStopTrackingAddress: (ws: WebSocketServer) => void;
  wsStopTrackingAddressBrowser: (ws: WebSocket) => void;
  wsTrackAddresses: (ws: WebSocketServer, addresses: string[]) => void;
  wsTrackAddressesBrowser: (ws: WebSocket, addresses: string[]) => void;
  wsStopTrackingAddresses: (ws: WebSocketServer) => void;
  wsStopTrackingAddressesBrowser: (ws: WebSocket) => void;
  wsTrackTransaction: (ws: WebSocketServer, txid: string) => void;
  wsTrackTransactionBrowser: (ws: WebSocket, txid: string) => void;
  wsStopTrackingTransaction: (ws: WebSocketServer) => void;
  wsStopTrackingTransactionBrowser: (ws: WebSocket) => void;
  wsTrackMempoolBlock: (ws: WebSocketServer, index: number) => void;
  wsTrackMempoolBlockBrowser: (ws: WebSocket, index: number) => void;
  wsStopTrackingMempoolBlock: (ws: WebSocketServer) => void;
  wsStopTrackingMempoolBlockBrowser: (ws: WebSocket) => void;
}
