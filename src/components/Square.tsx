import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      aria-label={value ? `Square filled with ${value}` : 'Empty square'}
      className="w-16 h-16 border-2 border-gray-400 text-4xl flex items-center justify-center"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
