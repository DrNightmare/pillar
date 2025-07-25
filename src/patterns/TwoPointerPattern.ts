import { Pattern } from './Pattern';

export interface TwoPointerState<O> {
  left: number;
  right: number;
  result: O;
}

export abstract class TwoPointerPattern<I, O> implements Pattern<I, O> {
  abstract initialize(input: I): TwoPointerState<O>;
  abstract shouldContinue(state: TwoPointerState<O>, input: I): boolean;
  abstract handle(state: TwoPointerState<O>, input: I): void;
  abstract movePointers(state: TwoPointerState<O>, input: I): void;

  run(input: I): O {
    const state = this.initialize(input);
    while (this.shouldContinue(state, input)) {
      this.handle(state, input);
      this.movePointers(state, input);
    }
    return state.result;
  }
}
