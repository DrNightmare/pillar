import { TwoPointerPattern, TwoPointerState } from '../patterns/TwoPointerPattern';

export interface PairSumInput {
  nums: number[];
  target: number;
}

export class PairSumExists extends TwoPointerPattern<PairSumInput, boolean> {
  initialize(input: PairSumInput): TwoPointerState<boolean> {
    return { left: 0, right: input.nums.length - 1, result: false };
  }

  shouldContinue(state: TwoPointerState<boolean>, input: PairSumInput): boolean {
    return state.left < state.right && !state.result;
  }

  handle(state: TwoPointerState<boolean>, input: PairSumInput): void {
    const sum = input.nums[state.left] + input.nums[state.right];
    if (sum === input.target) {
      state.result = true;
    }
  }

  movePointers(state: TwoPointerState<boolean>, input: PairSumInput): void {
    const sum = input.nums[state.left] + input.nums[state.right];
    if (sum > input.target) {
      state.right -= 1;
    } else if (sum < input.target) {
      state.left += 1;
    }
  }
}
