import axios from 'axios';
import { mockResponseError } from './helpers';
import Interception from './Interception';
import { ApiClient, MockedApi, MockedCall } from './types';

type Params = { interceptions?: Interception[] };

class ApiMock<Api extends ApiClient> {
  private mockedApi: MockedApi<ApiClient>;
  private interceptions: Interception[];

  constructor(api: Api, { interceptions = [] }: Params = {}) {
    this.mockedApi = jest.mocked<Api>(api);
    this.interceptions = interceptions;
  }

  start() {
    this.mockedApi.mockImplementation((request: MockedCall) => {
      const interception = this.findInterception(request);
      return interception?.respond(request) ?? mockResponseError();
    });
  }

  reset() {
    this.mockedApi.mockReset();
    this.interceptions = [];
  }

  private findInterception(request: MockedCall) {
    return this.interceptions.find((interception) =>
      interception.isMatch(request)
    );
  }

  addInterceptions(interceptions: Interception[]) {
    interceptions.forEach(this.intercept, this);
  }

  intercept(interception: Interception) {
    this.interceptions.unshift(interception);
  }

  getCalls(): MockedCall[] {
    return this.mockedApi.mock.calls.flat();
  }

  assertCall(call: MockedCall) {
    expect(this.mockedApi).toHaveBeenCalledWith(expect.objectContaining(call));
  }
}

export default ApiMock;

export const mockApi = (api: ApiClient = axios) => new ApiMock(api);

export const mockedApi = mockApi();
