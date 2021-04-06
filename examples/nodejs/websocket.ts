import mempool from '../../src/index';

const init = async () => {
  const { websocket } = mempool();

  const ws = websocket.init({
    options: ['blocks', 'stats', 'mempool-blocks', 'live-2h-chart'],
  });

  ws.on('message', function incoming(data) {
    const res = JSON.parse(data);
    if (res.blocks) {
      res.blocks.forEach((block: { height }) => {
        console.log(block.height);
      });
    }
    if (res.mempoolInfo) {
      console.log(res.mempoolInfo);
    }
    if (res.transactions) {
      console.log(res.transactions);
    }
    if (res.mempoolBlocks) {
      console.log(res.mempoolBlocks);
    }
  });
};
init();
