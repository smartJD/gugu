
export enum GameState {
  PLANET_SELECT,
  IN_GAME,
  REWARD,
  STICKER_SHEET,
  SPACESHIP,
}

export interface Problem {
  factor1: number;
  factor2: number;
  item: string; // e.g., '🍎'
}

export interface Planet {
  id: number;
  name: string;
  color: string;
  alien: {
    name: string;
    image: string; // URL or path to image
  };
  problems: Problem[];
}

export interface PlayerProgress {
  level: number;
  unlockedPlanets: number[];
  collectedStickers: number[];
  spaceshipParts: number[];
}

export interface Sticker {
  id: number;
  name: string;
  image: string;
}

export interface SpaceshipPart {
  id: number;
  name: string;
  image: string;
  positionClass: string;
}
