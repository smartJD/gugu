
import React, { useState, useCallback, useEffect } from 'react';
import { GameState, Planet, PlayerProgress } from './types';
import { PLANETS, STICKERS, SPACESHIP_PARTS, INITIAL_PLAYER_PROGRESS } from './constants';
import PlanetSelectScreen from './components/PlanetSelectScreen';
import GameScreen from './components/GameScreen';
import RewardScreen from './components/RewardScreen';
import StickerSheet from './components/StickerSheet';
import Spaceship from './components/Spaceship';
import Header from './components/Header';

const App: React.FC = () => {
  const [playerProgress, setPlayerProgress] = useState<PlayerProgress>(() => {
    const savedProgress = localStorage.getItem('gugudanPlayerProgress');
    return savedProgress ? JSON.parse(savedProgress) : INITIAL_PLAYER_PROGRESS;
  });

  const [gameState, setGameState] = useState<GameState>(GameState.PLANET_SELECT);
  const [currentPlanet, setCurrentPlanet] = useState<Planet | null>(null);
  const [lastReward, setLastReward] = useState<{ sticker: number; part: number } | null>(null);

  useEffect(() => {
    localStorage.setItem('gugudanPlayerProgress', JSON.stringify(playerProgress));
  }, [playerProgress]);

  const handlePlanetSelect = useCallback((planet: Planet) => {
    setCurrentPlanet(planet);
    setGameState(GameState.IN_GAME);
  }, []);

  const handleGameComplete = useCallback((planetId: number) => {
    const nextPlanetId = planetId + 1;
    const newStickerId = planetId - 1; 
    const newPartId = planetId - 1;

    setPlayerProgress(prev => {
      const newUnlockedPlanets = new Set(prev.unlockedPlanets);
      if (nextPlanetId <= PLANETS.length + 1) {
        newUnlockedPlanets.add(nextPlanetId);
      }
      
      const newStickers = new Set(prev.collectedStickers);
      if(newStickerId >= 0 && newStickerId < STICKERS.length) {
          newStickers.add(newStickerId);
      }

      const newParts = new Set(prev.spaceshipParts);
      if(newPartId >= 0 && newPartId < SPACESHIP_PARTS.length) {
          newParts.add(newPartId);
      }

      return {
        ...prev,
        level: prev.level + 1,
        unlockedPlanets: Array.from(newUnlockedPlanets),
        collectedStickers: Array.from(newStickers),
        spaceshipParts: Array.from(newParts),
      };
    });

    setLastReward({ sticker: newStickerId, part: newPartId });
    setGameState(GameState.REWARD);
  }, []);

  const handleRewardAcknowledge = useCallback(() => {
    setGameState(GameState.PLANET_SELECT);
    setCurrentPlanet(null);
  }, []);

  const handleShowStickers = useCallback(() => {
    setGameState(GameState.STICKER_SHEET);
  }, []);
  
  const handleShowSpaceship = useCallback(() => {
    setGameState(GameState.SPACESHIP);
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case GameState.IN_GAME:
        return currentPlanet && <GameScreen planet={currentPlanet} onComplete={handleGameComplete} />;
      case GameState.REWARD:
        return lastReward && (
          <RewardScreen
            sticker={STICKERS[lastReward.sticker]}
            part={SPACESHIP_PARTS[lastReward.part]}
            onAcknowledge={handleRewardAcknowledge}
          />
        );
      case GameState.STICKER_SHEET:
        return <StickerSheet collectedStickers={playerProgress.collectedStickers} onBack={() => setGameState(GameState.PLANET_SELECT)} />;
      case GameState.SPACESHIP:
        return <Spaceship collectedParts={playerProgress.spaceshipParts} onBack={() => setGameState(GameState.PLANET_SELECT)} />;
      case GameState.PLANET_SELECT:
      default:
        return (
          <PlanetSelectScreen
            planets={PLANETS}
            unlockedPlanets={playerProgress.unlockedPlanets}
            onSelect={handlePlanetSelect}
          />
        );
    }
  };

  return (
    <div className="bg-space text-white min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden">
      <Header 
        level={playerProgress.level} 
        onShowStickers={handleShowStickers} 
        onShowSpaceship={handleShowSpaceship}
      />
      <main className="w-full flex-grow flex items-center justify-center">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
