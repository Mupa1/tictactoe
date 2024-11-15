import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      className="w-16 h-16 border-2 border-gray-400 text-xl flex items-center justify-center"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
