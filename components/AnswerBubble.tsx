
import React, { useState } from 'react';

interface AnswerBubbleProps {
  value: number;
  onClick: (value: number) => void;
  disabled: boolean;
}

const AnswerBubble: React.FC<AnswerBubbleProps> = ({ value, onClick, disabled }) => {
  const [isPopped, setIsPopped] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    setIsPopped(true);
    onClick(value);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isPopped}
      className={`
        w-28 h-28 rounded-full 
        bg-cyan-400/80 backdrop-blur-sm
        border-4 border-cyan-200
        flex items-center justify-center
        text-5xl font-bold text-white
        shadow-lg
        transition-all duration-200 transform
        hover:scale-110 hover:bg-cyan-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${isPopped ? 'animate-bubble-pop' : ''}
      `}
    >
      <span className="drop-shadow-md">{value}</span>
    </button>
  );
};

export default AnswerBubble;
