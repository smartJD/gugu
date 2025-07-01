
import { Planet, PlayerProgress, Sticker, SpaceshipPart } from './types';

export const INITIAL_PLAYER_PROGRESS: PlayerProgress = {
  level: 1,
  unlockedPlanets: [2],
  collectedStickers: [],
  spaceshipParts: [],
};

export const PRAISE_MESSAGES = [
  '정말 대단해!', '최고야!', '구구단 박사님인데?', '완벽해!', '우주 최고!', '참 잘했어요!', '계속 이렇게만 하자!'
];

export const PLANETS: Planet[] = [
  {
    id: 2,
    name: '두근두근 토끼 행성',
    color: 'bg-pink-400',
    alien: { name: '토토', image: '🐰' },
    problems: [
      { factor1: 2, factor2: 1, item: '🥕' },
      { factor1: 2, factor2: 2, item: '🥕' },
      { factor1: 2, factor2: 3, item: '🥕' },
      { factor1: 2, factor2: 4, item: '🥕' },
      { factor1: 2, factor2: 5, item: '🥕' },
      { factor1: 2, factor2: 6, item: '🥕' },
      { factor1: 2, factor2: 7, item: '🥕' },
      { factor1: 2, factor2: 8, item: '🥕' },
      { factor1: 2, factor2: 9, item: '🥕' },
    ],
  },
  {
    id: 3,
    name: '꿀꿀 돼지 행성',
    color: 'bg-yellow-400',
    alien: { name: '꿀이', image: '🐷' },
    problems: [
      { factor1: 3, factor2: 1, item: '🍎' },
      { factor1: 3, factor2: 2, item: '🍎' },
      { factor1: 3, factor2: 3, item: '🍎' },
      { factor1: 3, factor2: 4, item: '🍎' },
      { factor1: 3, factor2: 5, item: '🍎' },
      { factor1: 3, factor2: 6, item: '🍎' },
      { factor1: 3, factor2: 7, item: '🍎' },
      { factor1: 3, factor2: 8, item: '🍎' },
      { factor1: 3, factor2: 9, item: '🍎' },
    ],
  },
  {
    id: 4,
    name: '어흥 호랑이 행성',
    color: 'bg-orange-500',
    alien: { name: '호야', image: '🐯' },
    problems: [
      { factor1: 4, factor2: 1, item: '🍖' },
      { factor1: 4, factor2: 2, item: '🍖' },
      { factor1: 4, factor2: 3, item: '🍖' },
      { factor1: 4, factor2: 4, item: '🍖' },
      { factor1: 4, factor2: 5, item: '🍖' },
      { factor1: 4, factor2: 6, item: '🍖' },
      { factor1: 4, factor2: 7, item: '🍖' },
      { factor1: 4, factor2: 8, item: '🍖' },
      { factor1: 4, factor2: 9, item: '🍖' },
    ],
  },
  {
    id: 5,
    name: '음메 소 행성',
    color: 'bg-blue-400',
    alien: { name: '우유', image: '🐮' },
    problems: [
      { factor1: 5, factor2: 1, item: '🥛' },
      { factor1: 5, factor2: 2, item: '🥛' },
      { factor1: 5, factor2: 3, item: '🥛' },
      { factor1: 5, factor2: 4, item: '🥛' },
      { factor1: 5, factor2: 5, item: '🥛' },
      { factor1: 5, factor2: 6, item: '🥛' },
      { factor1: 5, factor2: 7, item: '🥛' },
      { factor1: 5, factor2: 8, item: '🥛' },
      { factor1: 5, factor2: 9, item: '🥛' },
    ],
  },
   {
    id: 6,
    name: '멍멍 강아지 행성',
    color: 'bg-green-400',
    alien: { name: '멍군', image: '🐶' },
    problems: [
      { factor1: 6, factor2: 1, item: '🦴' },
      { factor1: 6, factor2: 2, item: '🦴' },
      { factor1: 6, factor2: 3, item: '🦴' },
      { factor1: 6, factor2: 4, item: '🦴' },
      { factor1: 6, factor2: 5, item: '🦴' },
      { factor1: 6, factor2: 6, item: '🦴' },
      { factor1: 6, factor2: 7, item: '🦴' },
      { factor1: 6, factor2: 8, item: '🦴' },
      { factor1: 6, factor2: 9, item: '🦴' },
    ],
  },
  {
    id: 7,
    name: '개굴 개구리 행성',
    color: 'bg-teal-400',
    alien: { name: '개굴', image: '🐸' },
    problems: [
      { factor1: 7, factor2: 1, item: '🦗' },
      { factor1: 7, factor2: 2, item: '🦗' },
      { factor1: 7, factor2: 3, item: '🦗' },
      { factor1: 7, factor2: 4, item: '🦗' },
      { factor1: 7, factor2: 5, item: '🦗' },
      { factor1: 7, factor2: 6, item: '🦗' },
      { factor1: 7, factor2: 7, item: '🦗' },
      { factor1: 7, factor2: 8, item: '🦗' },
      { factor1: 7, factor2: 9, item: '🦗' },
    ],
  },
  {
    id: 8,
    name: '야옹 고양이 행성',
    color: 'bg-indigo-400',
    alien: { name: '나비', image: '🐱' },
    problems: [
      { factor1: 8, factor2: 1, item: '🐟' },
      { factor1: 8, factor2: 2, item: '🐟' },
      { factor1: 8, factor2: 3, item: '🐟' },
      { factor1: 8, factor2: 4, item: '🐟' },
      { factor1: 8, factor2: 5, item: '🐟' },
      { factor1: 8, factor2: 6, item: '🐟' },
      { factor1: 8, factor2: 7, item: '🐟' },
      { factor1: 8, factor2: 8, item: '🐟' },
      { factor1: 8, factor2: 9, item: '🐟' },
    ],
  },
  {
    id: 9,
    name: '판다 행성',
    color: 'bg-gray-400',
    alien: { name: '판판', image: '🐼' },
    problems: [
      { factor1: 9, factor2: 1, item: '🎍' },
      { factor1: 9, factor2: 2, item: '🎍' },
      { factor1: 9, factor2: 3, item: '🎍' },
      { factor1: 9, factor2: 4, item: '🎍' },
      { factor1: 9, factor2: 5, item: '🎍' },
      { factor1: 9, factor2: 6, item: '🎍' },
      { factor1: 9, factor2: 7, item: '🎍' },
      { factor1: 9, factor2: 8, item: '🎍' },
      { factor1: 9, factor2: 9, item: '🎍' },
    ],
  },
];

export const STICKERS: Sticker[] = PLANETS.map((p, i) => ({
  id: i,
  name: `${p.alien.name} 스티커`,
  image: p.alien.image,
}));


export const SPACESHIP_PARTS: SpaceshipPart[] = [
  { id: 0, name: '강력한 부스터', image: '🔥', positionClass: 'bottom-[-20px] left-1/2 -translate-x-1/2' },
  { id: 1, name: '반짝이는 날개', image: '✨', positionClass: 'top-1/2 -translate-y-1/2 left-[-30px]' },
  { id: 2, name: '멋진 안테나', image: '📡', positionClass: 'top-[-25px] right-[20px] rotate-45' },
  { id: 3, name: '보호막 생성기', image: '🛡️', positionClass: 'top-[-20px] left-[20px] -rotate-45' },
  { id: 4, name: '쌍둥이 날개', image: '✨', positionClass: 'top-1/2 -translate-y-1/2 right-[-30px] -scale-x-100' },
  { id: 5, name: '탐사용 창문', image: '🔭', positionClass: 'top-1/3 left-1/2 -translate-x-1/2' },
  { id: 6, name: '레이저 캐논', image: '☄️', positionClass: 'bottom-[0px] left-[0px] -rotate-45' },
  { id: 7, name: '별빛 램프', image: '💡', positionClass: 'bottom-[0px] right-[0px] rotate-45' },
];
