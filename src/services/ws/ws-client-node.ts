import WebSocket from "ws";

const TIMEOUT_DURATION = 5000;
const MAX_RETRY_COUNT = 3;

const wsActionWrapper = (ws: WebSocket, action: any): void => {
  let retryCount = 0;
  const sendData = () => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(action));
    } else if (retryCount < MAX_RETRY_COUNT) {
      retryCount++;
      console.log("WebSocket connection is not open. Retrying...");
      setTimeout(sendData, TIMEOUT_DURATION);
    } else {
      console.log("WebSocket connection is not open. Max retry count reached.");
    }
  };
  sendData();
}

export const wsInit = (endpoint: string): WebSocket => {
  const ws = new WebSocket(endpoint);

  ws.addEventListener("open", function open() {
    ws.send(JSON.stringify({ action: "init" }));
  });

  return ws;
}

export const wsWantData = (ws: WebSocket, options: string[]): void => {
  wsActionWrapper(ws, { action: "want", data: options });
}

export const wsStopData = (ws: WebSocket): void => {
  wsActionWrapper(ws, { action: "want", data: [] });
}

export const wsTrackAddress = (ws: WebSocket, address: string): void => {
  wsActionWrapper(ws, { 'track-address': address });
}

export const wsStopTrackingAddress = (ws: WebSocket): void => {
  wsActionWrapper(ws, { 'track-address': 'stop' });
}

export const wsTrackAddresses = (ws: WebSocket, addresses: string[]): void => {
  wsActionWrapper(ws, { 'track-addresses': addresses });
}

export const wsStopTrackingAddresses = (ws: WebSocket): void => {
  wsActionWrapper(ws, { 'track-addresses': [] });
}

export const wsTrackTransaction = (ws: WebSocket, txid: string): void => {
  wsActionWrapper(ws, { 'track-tx': txid });
}

export const wsStopTrackingTransaction = (ws: WebSocket): void => {
  wsActionWrapper(ws, { 'track-tx': 'stop' });
}

export const wsTrackRbfSummary = (ws: WebSocket): void => {
  wsActionWrapper(ws, { 'track-rbf-summary': true });
}

export const wsStopTrackingRbfSummary = (ws: WebSocket): void => {
  wsActionWrapper(ws, { 'track-rbf-summary': false });
}

export const wsTrackRbf = (ws: WebSocket, fullRbf: boolean): void => {
  if (!fullRbf) {
    wsActionWrapper(ws, { 'track-rbf': 'all' });
  } else {
    wsActionWrapper(ws, { 'track-rbf': 'fullRbf' });
  }
}

export const wsStopTrackingRbf = (ws: WebSocket): void => {
  wsActionWrapper(ws, { 'track-rbf': 'stop' });
}

export const wsTrackMempoolBlock = (ws: WebSocket, index: number): void => {
  wsActionWrapper(ws, { 'track-mempool-block': index });
}

export const wsStopTrackingMempoolBlock = (ws: WebSocket): void => {
  wsActionWrapper(ws, { 'track-mempool-block': -1 });
}