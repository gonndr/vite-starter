import { ApiRequest, ApiResponse } from './types';

type Params = {
  method: string;
  url: string;
  getResponse: (request?: ApiRequest) => Promise<ApiResponse>;
};

type GetParams<C> = (context?: C) => Params;

class Interception {
  constructor(private readonly params: Params) {}

  static creator<C>(getParams: GetParams<C>) {
    return (context?: C) => new Interception(getParams(context));
  }

  isMatch({ method, url }: ApiRequest) {
    return this.params.method === method && this.params.url === url;
  }

  respond(request: ApiRequest) {
    return this.params.getResponse(request);
  }
}
export default Interception;
