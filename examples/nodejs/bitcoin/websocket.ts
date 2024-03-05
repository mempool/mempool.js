import mempoolJS from "./../../../src/index";

const init = async () => {
  try {
    const {
      bitcoin: { websocket },
    } = mempoolJS();
    
    const ws = websocket.wsInit();

    ws.addEventListener('message', function incoming({data}) {
      console.log(JSON.parse(data.toString()));
    });

    websocket.wsWantData(ws, ['blocks', 'stats', 'mempool-blocks', 'live-2h-chart']);

    websocket.wsTrackAddress(ws, "1wizSAYSbuyXbt9d8JV8ytm5acqq2TorC");

    websocket.wsTrackAddresses(ws, [
      "1wizSAYSbuyXbt9d8JV8ytm5acqq2TorC",
    ]);

    websocket.wsTrackTransaction(ws, "01313ca0148a1bbe5676e5dd6a84e76f8b39038658bd8c333d3b2d3f7ea6dd08");

    websocket.wsTrackRbfSummary(ws);

    websocket.wsTrackRbf(ws, true);

    websocket.wsTrackMempoolBlock(ws, 1);

    setTimeout(() => {
      websocket.wsStopData(ws);
      websocket.wsStopTrackingAddress(ws);
      websocket.wsStopTrackingAddresses(ws);
      websocket.wsStopTrackingTransaction(ws);
      websocket.wsStopTrackingRbfSummary(ws);
      websocket.wsStopTrackingRbf(ws);
      websocket.wsStopTrackingMempoolBlock(ws);
    }, 60000);

  } catch (error) {
    console.log(error);
  }
}
init();
