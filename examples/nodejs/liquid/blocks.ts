import mempoolJS from "./../../../src/index";

const init = async () => {
  try {
    const {
      liquid: { blocks },
    } = mempoolJS( { hostname: 'liquid.network' } );
    
    const hash =
    '5ec96b63f95aad27391a8a41f1dce2161d48c4f26aeb1f72695a12c98a005e1f';
    
    const block = await blocks.getBlock({ hash });
    console.log(block);
    
    const blockStatus = await blocks.getBlockStatus({ hash });
    console.log(blockStatus);
    
    const blockTxs = await blocks.getBlockTxs({ hash });
    console.log(blockTxs);
    
    const blockTxids = await blocks.getBlockTxids({ hash });
    console.log(blockTxids);
    
    const blockTxid = await blocks.getBlockTxid({ hash, index: 1 });
    console.log(blockTxid);
    
    const blockRaw = await blocks.getBlockRaw({ hash });
    console.log(blockRaw);
    
    const blockHeight = await blocks.getBlockHeight({ height: 0 });
    console.log(blockHeight);
    
    const getBlocks = await blocks.getBlocks({ start_height: 9999 });
    console.log(getBlocks);
    
    const blocksTipHeight = await blocks.getBlocksTipHeight();
    console.log(blocksTipHeight);
    
    const blocksTipHash = await blocks.getBlocksTipHash();
    console.log(blocksTipHash);
  } catch (error) {
    console.log(error);
  }
};
init();
