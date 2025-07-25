import { SlidingWindowPattern, SlidingWindowState } from '../patterns/SlidingWindowPattern';

export interface MinSubarrayInput {
  nums: number[];
  target: number;
}

interface MinSubarrayState extends SlidingWindowState<number> {
  windowSum: number;
}

export class MinSubarrayLen extends SlidingWindowPattern<MinSubarrayInput, number, MinSubarrayState> {
  initialize(input: MinSubarrayInput): MinSubarrayState {
    return { left: 0, right: 0, result: Infinity, windowSum: 0 };
  }

  shouldExpand(state: MinSubarrayState, input: MinSubarrayInput): boolean {
    return state.right < input.nums.length;
  }

  expandWindow(state: MinSubarrayState, input: MinSubarrayInput): void {
    state.windowSum += input.nums[state.right];
    state.right += 1;
  }

  shouldShrink(state: MinSubarrayState, input: MinSubarrayInput): boolean {
    return state.windowSum >= input.target;
  }

  shrinkWindow(state: MinSubarrayState, input: MinSubarrayInput): void {
    state.result = Math.min(state.result, state.right - state.left);
    state.windowSum -= input.nums[state.left];
    state.left += 1;
  }

  handle(state: MinSubarrayState, input: MinSubarrayInput): void {
    // No-op
  }
}
