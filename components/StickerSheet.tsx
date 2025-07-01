
import React from 'react';
import { STICKERS } from '../constants';

interface StickerSheetProps {
  collectedStickers: number[];
  onBack: () => void;
}

const StickerSheet: React.FC<StickerSheetProps> = ({ collectedStickers, onBack }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-blue-800 to-blue-900 rounded-2xl p-8 max-w-4xl w-full border-4 border-blue-400 shadow-2xl">
        <h2 className="text-5xl font-bold text-center text-white mb-6">나의 스티커북</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 bg-white/10 p-6 rounded-lg h-96 overflow-y-auto">
          {STICKERS.map((sticker) => {
            const isCollected = collectedStickers.includes(sticker.id);
            return (
              <div key={sticker.id} className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 ${isCollected ? 'bg-yellow-400/30' : 'bg-black/30'}`}>
                <div className={`text-7xl transition-all duration-500 ${isCollected ? 'opacity-100 scale-100' : 'opacity-20 scale-75'}`}>
                  {sticker.image}
                </div>
                <p className={`mt-2 font-bold text-center ${isCollected ? 'text-white' : 'text-gray-500'}`}>
                  {isCollected ? sticker.name : '???'}
                </p>
              </div>
            );
          })}
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

export default StickerSheet;
