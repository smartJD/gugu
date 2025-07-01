
import React from 'react';
import { SPACESHIP_PARTS } from '../constants';

interface SpaceshipProps {
  collectedParts: number[];
  onBack: () => void;
}

const Spaceship: React.FC<SpaceshipProps> = ({ collectedParts, onBack }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl p-8 max-w-4xl w-full border-4 border-gray-400 shadow-2xl">
        <h2 className="text-5xl font-bold text-center text-white mb-6">나만의 우주선</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 h-80 flex items-center justify-center bg-space rounded-lg border-2 border-gray-500 overflow-hidden">
            <div className="relative w-40 h-40 animate-float">
              {/* Spaceship Body */}
              <div className="w-full h-full text-8xl flex items-center justify-center">🚀</div>

              {/* Collected Parts */}
              {SPACESHIP_PARTS.map(part => {
                const isCollected = collectedParts.includes(part.id);
                if (!isCollected) return null;
                return (
                  <div key={part.id} className={`absolute text-4xl ${part.positionClass} transition-opacity duration-1000 opacity-100`}>
                    {part.image}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-black/20 p-4 rounded-lg h-80 overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-4">획득한 부품 목록</h3>
            <ul className="space-y-2">
              {SPACESHIP_PARTS.map(part => {
                const isCollected = collectedParts.includes(part.id);
                return (
                  <li key={part.id} className={`flex items-center gap-4 p-2 rounded ${isCollected ? 'text-white bg-green-500/30' : 'text-gray-500'}`}>
                    <span className="text-2xl w-8 h-8 flex items-center justify-center">{isCollected ? part.image : '❓'}</span>
                    <span>{isCollected ? part.name : '???'}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <button 
            onClick={onBack}
            className="bg-pink-500 hover:bg-pink-400 text-white text-2xl font-bold px-8 py-3 rounded-full border-b-4 border-pink-700 hover:border-pink-500 transition-all transform hover:scale-105"
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spaceship;
