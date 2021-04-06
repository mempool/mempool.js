import mempool from '../../src/index';

const init = async () => {
  const { mempool: mp } = mempool();

  const getMempool = await mp.getMempool();
  console.log(getMempool);

  const getMempoolRecent = await mp.getMempoolRecent();
  console.log(getMempoolRecent);

  const getMempoolTxids = await mp.getMempoolTxids();
  console.log(getMempoolTxids);
};
init();
