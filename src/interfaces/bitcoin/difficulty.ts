
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
  hashrates: any[],
  difficulty: any[],
  currentHashrate: number,
  currentDifficulty: number,
}
export interface DifficultyInstance {
  getDifficultyAdjustment: () => Promise<Adjustment>;
  getHashrate: (params: { interval: string }) => Promise<Hashrate>;
}
