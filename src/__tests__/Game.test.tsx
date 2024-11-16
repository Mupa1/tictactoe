import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Game from '../components/Game';

describe('TicTacToe Game', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders initial game board', () => {
    render(<Game />);
    const status = screen.getByText(/Next player: X/i);
    expect(status).toBeInTheDocument();
  });

  test('players take turns correctly', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    expect(squares[0].textContent).toBe('X');
    expect(squares[1].textContent).toBe('O');
  });

  test('does not allow a square to be clicked twice', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    fireEvent.click(squares[0]);
    fireEvent.click(squares[0]);
    expect(squares[0].textContent).toBe('X');
  });

  test('correctly identifies a winner', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[3]); // O
    fireEvent.click(squares[1]); // X
    fireEvent.click(squares[4]); // O
    fireEvent.click(squares[2]); // X wins
    const winnerMessage = screen.getByText(/Winner: X/i);
    expect(winnerMessage).toBeInTheDocument();
  });

  test('correctly identifies a draw', () => {
    render(<Game />);
    const squares = screen.getAllByRole('button');
    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[1]); // O
    fireEvent.click(squares[2]); // X
    fireEvent.click(squares[4]); // O
    fireEvent.click(squares[3]); // X
    fireEvent.click(squares[5]); // O
    fireEvent.click(squares[7]); // X
    fireEvent.click(squares[6]); // O
    fireEvent.click(squares[8]); // X
    const drawMessage = screen.getByText(/Its a Draw!/i);
    expect(drawMessage).toBeInTheDocument();
  });
});
