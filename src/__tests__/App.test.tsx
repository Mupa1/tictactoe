import { cleanup, render, screen } from '@testing-library/react';

import App from '../App';

afterEach(() => {
  cleanup();
});

test('renders TicTacToe text', () => {
  render(<App />);
  const linkElement = screen.getByText(/TicTacToe/i);
  expect(linkElement).toBeInTheDocument();
});
