import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderApp from './utils/renderApp';

test('Renders App', () => {
  jest.resetAllMocks();
  renderApp();
  screen.getByText(
    'A simple template to help get you get started with Vite and React.'
  );
});
