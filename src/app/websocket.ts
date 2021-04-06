import { WsInterface, WSConfig, WsInstance } from '../interfaces';

const defaultWs = 'wss://mempool.space/api/v1/ws';

export const useWebsocket = ({ websocketEndpoint }: WSConfig): WsInstance => {
  const init = ({ options }: WsInterface): WebSocket => {
    return typeof window === 'undefined'
      ? serverWS(options)
      : browserWS(options);
  };

  const serverWS = (options: string[]) => {
    const WebSocket = require('ws');
    const ws = new WebSocket(websocketEndpoint || defaultWs);
    ws.on('open', function open() {
      handleMessage(ws, options);
    });
    return ws;
  };

  const browserWS = (options: string[]) => {
    const ws = new WebSocket(websocketEndpoint || defaultWs);
    ws.addEventListener('open', function open() {
      handleMessage(ws, options);
    });
    return ws;
  };

  const handleMessage = (ws: WebSocket, options: string[]) => {
    ws.send(JSON.stringify({ action: 'init' }));
    setInterval(function timeout() {
      ws.send(
        JSON.stringify({
          action: 'want',
          data: options,
        })
      );
    }, 500);
  };

  return {
    init,
  };
};
