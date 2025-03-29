import { ActionCreator, CaseReducer, Reduce } from './types';

class Reducer<S> {
  private cases = new Map<string, CaseReducer<S>>();

  constructor(private readonly initialState: S) {}

  addCase<P>({ type }: ActionCreator<P>, reducer: CaseReducer<S, P>) {
    this.cases.set(type, reducer);
    return this;
  }

  build(): Reduce<S> {
    return (state = this.initialState, action) => {
      const reduce = this.cases.get(action.type);
      return reduce ? reduce(state, action) : state;
    };
  }
}

export default Reducer;
