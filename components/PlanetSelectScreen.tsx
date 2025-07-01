
import React from 'react';
import { Planet } from '../types';

interface PlanetSelectScreenProps {
  planets: Planet[];
  unlockedPlanets: number[];
  onSelect: (planet: Planet) => void;
}

const PlanetSelectScreen: React.FC<PlanetSelectScreenProps> = ({ planets, unlockedPlanets, onSelect }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold mb-4 text-yellow-300 drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)]">
        구구단 은하계
      </h1>
      <p className="text-2xl mb-12 text-gray-200">탐험할 행성을 선택하세요!</p>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {planets.map((planet, index) => {
          const isUnlocked = unlockedPlanets.includes(planet.id);
          const delay = `${index * 100}ms`;
          return (
            <div key={planet.id} className="flex flex-col items-center">
              <button
                onClick={() => isUnlocked && onSelect(planet)}
                disabled={!isUnlocked}
                className={`w-40 h-40 rounded-full flex items-center justify-center text-6xl shadow-2xl transition-all duration-300 transform hover:scale-110 animate-float`}
                style={{ animationDelay: delay, animationDuration: `${4 + index * 0.5}s`, 
                         backgroundColor: isUnlocked ? planet.color.replace('bg-','').split('-')[0] : '#6b7280',
                         boxShadow: isUnlocked ? `0 0 25px ${planet.color.replace('bg-','').split('-')[0]}, 0 0 10px white` : 'none'
                       }}
              >
                {isUnlocked ? planet.alien.image : '❓'}
              </button>
              <span className={`mt-4 text-2xl font-bold ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>
                {isUnlocked ? `${planet.id}단: ${planet.name}` : '잠김'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlanetSelectScreen;
