import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import createStore from './state';
import ThemeProvider from './styles/theme/ThemeProvider';

const AppWrapper = () => {
  const store = createStore();
  return (
    <StrictMode>
      <ThemeProvider injectCssFirst>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </StrictMode>
  );
};

export default AppWrapper;
