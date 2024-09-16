
export type Rows = 6;
export type Cols = 7;
export type Matrix = (1 | 2 | null)[][];
export type MaxMoves = 42;

export enum Player {
  Red = 1,
  Yellow = 2,
}

export type Move = { row: number; col: number };
export type MakeMove = { row: number; col: number; player: Player };
