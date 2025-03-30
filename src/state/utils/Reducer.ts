import { ActionCreator, ApiActions, CaseReducer, Reduce } from './types';

type ApiCaseReducers<State, Success, Fail> = {
  onSuccess?: CaseReducer<State, Success>;
  onError?: CaseReducer<State, Fail>;
};

class Reducer<S> {
  private cases = new Map<string, CaseReducer<S>>();

  constructor(private readonly initialState: S) {}

  addCase<P>({ type }: ActionCreator<P>, reducer: CaseReducer<S, P>) {
    this.cases.set(type, reducer);
    return this;
  }

  addApiCase<Success, Fail>(
    { success, failed }: ApiActions<Success, Fail>,
    { onSuccess, onError }: ApiCaseReducers<S, Success, Fail>
  ) {
    if (onSuccess) {
      this.addCase(success, onSuccess);
    }
    if (onError) {
      this.addCase(failed, onError);
    }
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
