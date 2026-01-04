import { ApiResponse } from './types';

export const defaultResponse: Omit<ApiResponse, 'status'> = {
  data: {},
  statusText: '',
  headers: {},
  config: {},
};

export const mockResponseSuccess = (response: Partial<ApiResponse> = {}) =>
  Promise.resolve({ status: 200, ...defaultResponse, ...response });

export const mockResponseError = (response: Partial<ApiResponse> = {}) =>
  Promise.reject({ response: { ...defaultResponse, ...response } });
