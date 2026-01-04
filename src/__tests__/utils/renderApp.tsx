import App from '@/App';
import ThemeProvider from '@/styles/theme/ThemeProvider';
import { render } from '@testing-library/react';
import { mockedApi } from './mocks/api/ApiMock';
import mockGetConfig from './mocks/api/interceptions/mockGetConfig';
import mockMatchMedia from './mocks/mockMatchMedia';

const renderApp = () => {
  mockMatchMedia();
  mockedApi.addInterceptions([mockGetConfig()]);
  return render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default renderApp;
