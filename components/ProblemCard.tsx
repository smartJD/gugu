
import React from 'react';
import { Problem } from '../types';

interface ProblemCardProps {
  problem: Problem;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem }) => {
  const { factor1, factor2, item } = problem;

  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl font-bold text-white mb-6 drop-shadow-lg">
        {factor1} x {factor2} = ?
      </div>
      <div className="bg-black/20 p-4 rounded-lg border-2 border-dashed border-white/30 w-full">
        <div className="flex flex-wrap justify-center gap-4">
          {Array.from({ length: factor2 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center p-2 rounded-lg border border-white/50 bg-white/10 min-w-[60px]">
              {Array.from({ length: factor1 }).map((_, j) => (
                <span key={j} className="text-3xl">{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;
