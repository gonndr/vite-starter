import { ActionCreator, ApiActions } from './types';

export const createActionCreator = <P = void>(
  type: string
): ActionCreator<P> => {
  const createAction = (payload?: P) => ({ type, payload });
  createAction.type = type;
  return createAction as ActionCreator<P>;
};

export const createApiActions = <SuccessPayload = null, FailedPayload = null>(
  namespace: string
): ApiActions<SuccessPayload, FailedPayload> => {
  const typePrefix = `api.${namespace}`;
  const request = createActionCreator(`${typePrefix}.request`);
  const success = createActionCreator<SuccessPayload>(`${typePrefix}.success`);
  const failed = createActionCreator<FailedPayload>(`${typePrefix}.failed`);
  return { request, success, failed };
};
