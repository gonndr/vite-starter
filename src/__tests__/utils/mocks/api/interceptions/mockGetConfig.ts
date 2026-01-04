import { mockResponseError, mockResponseSuccess } from '../helpers';
import Interception from '../Interception';

type Config = { apiUrl: string; isSuccess: boolean };

const mockGetConfig = Interception.creator(
  ({ apiUrl = '/api', isSuccess = true }: Partial<Config> = {}) => {
    return {
      method: 'GET',
      url: '/config',
      getResponse: () =>
        isSuccess
          ? mockResponseSuccess({ data: { apiUrl } })
          : mockResponseError(),
    };
  }
);

export default mockGetConfig;
