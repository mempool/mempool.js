import mempoolJS from "./../../../src/index";

const init = async () => {
  try {

    const { liquid: { websocket } } = mempoolJS( { hostname: 'liquid.network' } );

    const ws = websocket.wsInit();

    ws.addEventListener('message', function incoming({data}) {
      console.log(JSON.parse(data.toString()));
    });

    websocket.wsWantData(ws, ['blocks', 'stats', 'mempool-blocks', 'live-2h-chart']);

    websocket.wsTrackAddress(ws, "GiAi95k5JUPNPoDGNzSUZ8vWMijSiSMTon");

    websocket.wsTrackAddresses(ws, [
      "GsDhxpV4Voi3XJA22bnAH4q8117hjZrQMF",
    ]);

    websocket.wsTrackTransaction(ws, "23195d459a70875c3b1f9fb9082acc9f0594f1c63dac71b40f2ff7298630a421");

    websocket.wsTrackMempoolBlock(ws, 1);

    setTimeout(() => {
      websocket.wsStopData(ws);
      websocket.wsStopTrackingAddress(ws);
      websocket.wsStopTrackingAddresses(ws);
      websocket.wsStopTrackingTransaction(ws);
      websocket.wsStopTrackingMempoolBlock(ws);
    }, 60000);

  } catch (error) {
    console.log(error);
  }
}
init();
