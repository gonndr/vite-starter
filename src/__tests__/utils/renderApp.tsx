import App from '@/App';
import ThemeProvider from '@/styles/theme/ThemeProvider';
import { render } from '@testing-library/react';
import mockMatchMedia from './mocks/mockMatchMedia';

const renderApp = () => {
  mockMatchMedia();
  return render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default renderApp;
