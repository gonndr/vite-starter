export type ApiRequest<D = unknown> = {
  url?: string;
  method?: string;
  data?: D;
  headers?: Record<string, string>;
  params?: Record<string, string>;
};

export type ApiResponse<D = unknown> = {
  data: D;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: ApiRequest;
};

export type ApiError = {
  status?: number;
  response?: ApiResponse;
};

export type ApiClient = (config: ApiRequest) => Promise<ApiResponse | ApiError>;

export type MockedCall = ApiRequest;

export type MockedApi<Api extends ApiClient> = jest.MockedFunction<Api>;
