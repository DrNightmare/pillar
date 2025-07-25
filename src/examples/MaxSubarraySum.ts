import { SlidingWindowPattern, SlidingWindowState } from '../patterns/SlidingWindowPattern';

export interface MaxSubarrayInput {
  nums: number[];
  k: number;
}

interface MaxSubarrayState extends SlidingWindowState<number> {
  windowSum: number;
}

export class MaxSubarraySum extends SlidingWindowPattern<MaxSubarrayInput, number, MaxSubarrayState> {
  initialize(input: MaxSubarrayInput): MaxSubarrayState {
    return { left: 0, right: 0, result: -Infinity, windowSum: 0 };
  }

  shouldExpand(state: MaxSubarrayState, input: MaxSubarrayInput): boolean {
    return state.right < input.nums.length;
  }

  expandWindow(state: MaxSubarrayState, input: MaxSubarrayInput): void {
    state.windowSum += input.nums[state.right];
    state.right += 1;
  }

  shouldShrink(state: MaxSubarrayState, input: MaxSubarrayInput): boolean {
    return state.right - state.left > input.k;
  }

  shrinkWindow(state: MaxSubarrayState, input: MaxSubarrayInput): void {
    state.windowSum -= input.nums[state.left];
    state.left += 1;
  }

  handle(state: MaxSubarrayState, input: MaxSubarrayInput): void {
    if (state.right - state.left === input.k) {
      state.result = Math.max(state.result, state.windowSum);
    }
  }
}
