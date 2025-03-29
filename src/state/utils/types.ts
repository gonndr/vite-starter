/* eslint-disable @typescript-eslint/no-explicit-any */

export type Action<P = any> = { type: string; payload: P };

export type ActionCreator<P> = { (payload: P): Action<P>; type: string };

export type ApiActions<S, F> = {
  request: ActionCreator<void>;
  success: ActionCreator<S>;
  failed: ActionCreator<F>;
};

export type CaseReducer<S, P = any> = (state: S, action: Action<P>) => S;

export type Reduce<S> = (state: S | undefined, action: Action) => S;
