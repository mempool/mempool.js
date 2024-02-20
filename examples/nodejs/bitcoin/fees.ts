import mempoolJS from "./../../../src/index";

const init = async () => {
  try {    
    const {
      bitcoin: { fees },
    } = mempoolJS();
    
    const feesRecommended = await fees.getFeesRecommended();
    console.log(feesRecommended);
    
    const feesMempoolBlocks = await fees.getFeesMempoolBlocks();
    console.log(feesMempoolBlocks);
    
    const txid = '94bb221746f0626caf63c8dd279e07963bfe514fabe596019c95a41c5f5af97c';
    
    const feesCPFP = await fees.getCPFP({ txid });
    console.log(feesCPFP);
  } catch (error) {
    console.log(error);
  }
};
init();
