import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders App', () => {
  render(<App />);
  screen.getByText('Vite + React');
});
