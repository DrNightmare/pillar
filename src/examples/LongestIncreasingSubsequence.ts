import { DynamicProgrammingPattern, DynamicProgrammingState } from '../patterns/DynamicProgrammingPattern';

export interface LISInput {
  nums: number[];
}

interface LISState extends DynamicProgrammingState<number> {
  dp: number[];
}

export class LongestIncreasingSubsequence extends DynamicProgrammingPattern<LISInput, number, LISState> {
  initialize(input: LISInput): LISState {
    return {
      index: 0,
      result: 0,
      dp: new Array(input.nums.length).fill(1),
    };
  }

  shouldContinue(state: LISState, input: LISInput): boolean {
    return state.index < input.nums.length;
  }

  handle(state: LISState, input: LISInput): void {
    for (let j = 0; j < state.index; j++) {
      if (input.nums[state.index] > input.nums[j]) {
        state.dp[state.index] = Math.max(state.dp[state.index], state.dp[j] + 1);
      }
    }
    state.result = Math.max(state.result, state.dp[state.index]);
  }

  nextIndex(state: LISState, input: LISInput): void {
    state.index += 1;
  }
}
