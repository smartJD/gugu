
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Planet } from '../types';
import { PRAISE_MESSAGES } from '../constants';
import ProblemCard from './ProblemCard';
import AnswerBubble from './AnswerBubble';

interface GameScreenProps {
  planet: Planet;
  onComplete: (planetId: number) => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ planet, onComplete }) => {
  const [problemIndex, setProblemIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [praise, setPraise] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const currentProblem = planet.problems[problemIndex];
  const answer = currentProblem.factor1 * currentProblem.factor2;

  const answerOptions = useMemo(() => {
    const options = new Set<number>();
    options.add(answer);
    while (options.size < 4) {
      const wrongAnswer = answer + Math.floor(Math.random() * 10) - 5;
      if (wrongAnswer > 0 && wrongAnswer !== answer) {
        options.add(wrongAnswer);
      }
    }
    return Array.from(options).sort(() => Math.random() - 0.5);
  }, [answer]);

  const handleAnswer = useCallback((selectedAnswer: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowFeedback(true);

    if (selectedAnswer === answer) {
      setIsCorrect(true);
      setPraise(PRAISE_MESSAGES[Math.floor(Math.random() * PRAISE_MESSAGES.length)]);
      setTimeout(() => {
        if (problemIndex < planet.problems.length - 1) {
          setProblemIndex(prev => prev + 1);
          setShowFeedback(false);
          setIsAnimating(false);
          setIsCorrect(null);
        } else {
          onComplete(planet.id);
        }
      }, 2000);
    } else {
      setIsCorrect(false);
      setPraise('다시 생각해볼까?');
      setTimeout(() => {
        setShowFeedback(false);
        setIsAnimating(false);
        setIsCorrect(null);
      }, 2000);
    }
  }, [answer, isAnimating, problemIndex, planet.id, planet.problems.length, onComplete]);
  
  const progressPercentage = ((problemIndex + 1) / planet.problems.length) * 100;

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center p-4">
      <div className="w-full mb-4">
        <h2 className="text-4xl text-center font-bold text-yellow-300 mb-2">{planet.name}</h2>
        <div className="w-full bg-gray-700 rounded-full h-6 border-2 border-gray-500">
          <div className={`${planet.color} h-full rounded-full transition-all duration-500 ease-out`} style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        <div className="flex flex-col items-center justify-center relative">
          <span className={`text-9xl ${isCorrect ? 'animate-dance' : ''}`}>{planet.alien.image}</span>
          <p className="text-3xl font-bold mt-2 text-white">{planet.alien.name}</p>
          {showFeedback && (
            <div className={`absolute -top-10 px-4 py-2 rounded-lg text-2xl font-bold text-white ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
              {praise}
            </div>
          )}
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
            <ProblemCard problem={currentProblem} />
            <div className="flex justify-center gap-4 mt-6">
                {answerOptions.map((opt) => (
                    <AnswerBubble key={opt} value={opt} onClick={handleAnswer} disabled={isAnimating} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
