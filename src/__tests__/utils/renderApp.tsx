import AppWrapper from '@/AppWrapper';
import { render } from '@testing-library/react';
import { mockedApi } from './mocks/api/ApiMock';
import mockGetConfig from './mocks/api/interceptions/mockGetConfig';
import mockMatchMedia from './mocks/mockMatchMedia';

const renderApp = () => {
  mockMatchMedia();
  mockedApi.addInterceptions([mockGetConfig()]);
  return render(<AppWrapper />);
};

export default renderApp;
