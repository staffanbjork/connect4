import { Rows, Cols, MaxMoves, Player } from "../types/types";

export default class BoardCheck {
  #ROWS: Rows;
  #COLS: Cols;
  #MAX_NUMBER_OF_TURNS: MaxMoves;
  #PLAYERS: Player[];

  constructor() {
    this.#ROWS = 6;
    this.#COLS = 7;
    this.#MAX_NUMBER_OF_TURNS = 42;
    this.#PLAYERS = [1, 2]
  }
}