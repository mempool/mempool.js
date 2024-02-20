
export interface Adjustment {
  progressPercent: number,
  difficultyChange: number,
  estimatedRetargetDate: number,
  remainingBlocks: number,
  remainingTime: number,
  previousRetarget: number,
  nextRetargetHeight: number,
  timeAvg: number,
  timeOffset: number,
  expectedBlocks: number,
}

export interface Hashrate {
  hashrates: HashRateData[],
  difficulty: DifficultyData[],
  currentHashrate: number,
  currentDifficulty: number,
}

export interface HashRateData {
  timestamp: number,
  avgHashrate: number
}

export interface DifficultyData {
  time: number,
  height: number,
  difficulty: number,
  adjustment: number
}

export interface DifficultyInstance {
  getDifficultyAdjustment: () => Promise<Adjustment>;
  getHashrate: (params: { interval: string }) => Promise<Hashrate>;
}
