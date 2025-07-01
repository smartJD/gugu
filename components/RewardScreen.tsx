
import React from 'react';
import { Sticker, SpaceshipPart } from '../types';

interface RewardScreenProps {
  sticker: Sticker;
  part: SpaceshipPart;
  onAcknowledge: () => void;
}

const RewardScreen: React.FC<RewardScreenProps> = ({ sticker, part, onAcknowledge }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 max-w-2xl w-full text-center border-4 border-yellow-300 shadow-2xl">
        <h2 className="text-5xl font-bold text-yellow-300 mb-4 drop-shadow-lg">행성 탐사 완료!</h2>
        <p className="text-2xl text-white mb-8">새로운 보상을 획득했어요!</p>
        
        <div className="flex justify-around items-center mb-10">
          <div className="flex flex-col items-center bg-white/20 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">획득한 스티커</h3>
            <div className="text-8xl bg-white/30 rounded-full w-40 h-40 flex items-center justify-center">{sticker.image}</div>
            <p className="text-2xl mt-4 font-bold text-white">{sticker.name}</p>
          </div>
          <div className="flex flex-col items-center bg-white/20 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">새 우주선 부품</h3>
            <div className="text-8xl bg-white/30 rounded-full w-40 h-40 flex items-center justify-center">{part.image}</div>
            <p className="text-2xl mt-4 font-bold text-white">{part.name}</p>
          </div>
        </div>

        <button 
          onClick={onAcknowledge}
          className="bg-yellow-400 hover:bg-yellow-300 text-purple-800 text-3xl font-bold px-12 py-4 rounded-full border-b-8 border-yellow-600 hover:border-yellow-500 transition-all transform hover:scale-105"
        >
          계속하기
        </button>
      </div>
    </div>
  );
};

export default RewardScreen;
