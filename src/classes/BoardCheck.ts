import { Rows, Cols, MaxMoves, Player, Matrix } from "../types/types";

export default class BoardCheck {
  #ROWS: Rows;
  #COLS: Cols;
  #MAX_NUMBER_OF_TURNS: MaxMoves;
  #PLAYERS: Player[];

  constructor(rows: Rows, cols: Cols, maxNumberOfTurns: MaxMoves, players: Player[]) {
    this.#ROWS = rows;
    this.#COLS = cols;
    this.#MAX_NUMBER_OF_TURNS = maxNumberOfTurns;
    this.#PLAYERS = players;
  }
}