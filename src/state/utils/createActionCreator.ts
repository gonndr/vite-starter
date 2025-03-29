import { ActionCreator } from './types';

export const createActionCreator = <P>(type: string): ActionCreator<P> => {
  const createAction = (payload?: P) => ({ type, payload: payload ?? null });
  createAction.type = type;
  return createAction;
};

export const createApiActions = <SuccessPayload = null, FailedPayload = null>(
  namespace: string
) => {
  const typePrefix = `api.${namespace}`;
  const request = createActionCreator(`${typePrefix}.request`);
  const success = createActionCreator<SuccessPayload>(`${typePrefix}.success`);
  const failed = createActionCreator<FailedPayload>(`${typePrefix}.failed`);
  return { request, success, failed };
};
