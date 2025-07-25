import { DynamicProgrammingPattern, DynamicProgrammingState } from '../patterns/DynamicProgrammingPattern';

export interface HouseRobberInput {
  houses: number[];
}

interface HouseRobberState extends DynamicProgrammingState<number> {
  dp: number[];
}

export class HouseRobber extends DynamicProgrammingPattern<HouseRobberInput, number, HouseRobberState> {
  initialize(input: HouseRobberInput): HouseRobberState {
    return {
      index: 0,
      dp: new Array(input.houses.length).fill(0),
      result: 0,
    };
  }

  shouldContinue(state: HouseRobberState, input: HouseRobberInput): boolean {
    return state.index < input.houses.length;
  }

  handle(state: HouseRobberState, input: HouseRobberInput): void {
    const i = state.index;
    if (i === 0) {
      state.dp[i] = input.houses[i];
    } else if (i === 1) {
      state.dp[i] = Math.max(input.houses[0], input.houses[1]);
    } else {
      state.dp[i] = Math.max(state.dp[i - 1], state.dp[i - 2] + input.houses[i]);
    }
    state.result = state.dp[i];
  }

  nextIndex(state: HouseRobberState, input: HouseRobberInput): void {
    state.index += 1;
  }
}
