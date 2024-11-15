import React from 'react';

import Square from './Square';

type BoardProps = {
  squares: Array<string | null>;
  onClick: (index: number) => void;
};

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default Board;
