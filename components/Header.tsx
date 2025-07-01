
import React from 'react';

interface HeaderProps {
  level: number;
  onShowStickers: () => void;
  onShowSpaceship: () => void;
}

const Header: React.FC<HeaderProps> = ({ level, onShowStickers, onShowSpaceship }) => {
  return (
    <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20 text-white">
      <div className="bg-black/50 backdrop-blur-sm rounded-full px-6 py-2 border-2 border-purple-400 shadow-lg">
        <span className="text-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">🚀 레벨 {level}</span>
      </div>
      <div className="flex gap-4">
        <button onClick={onShowStickers} className="bg-blue-500 hover:bg-blue-400 text-white text-xl px-5 py-3 rounded-full border-b-4 border-blue-700 hover:border-blue-500 transition-all transform hover:scale-105 shadow-xl">
          스티커북
        </button>
        <button onClick={onShowSpaceship} className="bg-green-500 hover:bg-green-400 text-white text-xl px-5 py-3 rounded-full border-b-4 border-green-700 hover:border-green-500 transition-all transform hover:scale-105 shadow-xl">
          내 우주선
        </button>
      </div>
    </header>
  );
};

export default Header;
