import React from 'react';

import Game from './components/Game';

const App: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="font-semibold text-3xl pt-4">TicTacToe</h1>
      <Game />
    </div>
  );
};

export default App;
