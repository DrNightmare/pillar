export interface DynamicProgrammingState<O> {
  index: number;
  result: O;
}

export abstract class DynamicProgrammingPattern<I, O, S extends DynamicProgrammingState<O> = DynamicProgrammingState<O>> {
  abstract initialize(input: I): S;
  abstract shouldContinue(state: S, input: I): boolean;
  abstract handle(state: S, input: I): void;
  abstract nextIndex(state: S, input: I): void;

  run(input: I): O {
    const state = this.initialize(input);
    while (this.shouldContinue(state, input)) {
      this.handle(state, input);
      this.nextIndex(state, input);
    }
    return state.result;
  }
}
