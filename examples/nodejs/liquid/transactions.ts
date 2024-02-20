import mempoolJS from "./../../../src/index";

const init = async () => {
  try {
    const {
      liquid: { transactions },
    } = mempoolJS( { hostname: 'liquid.network' } );
    
    const txid =
    '555fbc3ca784903b238fdadc92515577dfa9124185259c5d9a773508bbc365e5';
    
    const tx = await transactions.getTx({ txid });
    console.log(tx);
    
    const txStatus = await transactions.getTxStatus({ txid });
    console.log(txStatus);
    
    const txHex = await transactions.getTxHex({ txid });
    console.log(txHex);
    
    const txRaw = await transactions.getTxRaw({ txid });
    console.log(txRaw);
        
    const txMerkleProof = await transactions.getTxMerkleProof({ txid });
    console.log(txMerkleProof);
    
    const txOutspend = await transactions.getTxOutspend({
      txid,
      vout: 3,
    });
    console.log(txOutspend);
    
    const txOutspends = await transactions.getTxOutspends({ txid });
    console.log(txOutspends);
    
    const postTx = await transactions.postTx({ txhex: txHex });
    console.log(postTx);
  } catch (error) {
    console.log(error);
  }
};
init();
