import { Pattern } from './Pattern';

export interface SlidingWindowState<O> {
  left: number;
  right: number;
  result: O;
}

export abstract class SlidingWindowPattern<I, O, S extends SlidingWindowState<O> = SlidingWindowState<O>> implements Pattern<I, O> {
  abstract initialize(input: I): S;
  abstract shouldExpand(state: S, input: I): boolean;
  abstract expandWindow(state: S, input: I): void;
  abstract shouldShrink(state: S, input: I): boolean;
  abstract shrinkWindow(state: S, input: I): void;
  abstract handle(state: S, input: I): void;

  run(input: I): O {
    const state = this.initialize(input);
    while (this.shouldExpand(state, input)) {
      this.expandWindow(state, input);
      while (this.shouldShrink(state, input)) {
        this.shrinkWindow(state, input);
      }
      this.handle(state, input);
    }
    return state.result;
  }
}
