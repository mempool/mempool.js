import mempoolJS from "./../../../src/index";

const init = async () => {
  try {
    const {
      bitcoin: { difficulty },
    } = mempoolJS();
    
    const difficultyAdjustment = await difficulty.getDifficultyAdjustment();
    console.log(difficultyAdjustment);

    const hashrate = await difficulty.getHashrate({ interval: "1m" });
    console.log(hashrate);
  } catch (error) {
    console.log(error);
  }
};
init();
