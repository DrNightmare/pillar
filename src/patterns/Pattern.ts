export interface Pattern<I, O> {
  run(input: I): O;
}
