import { Rows, Cols, MaxMoves, Player, Matrix } from "../types/types";

export default class BoardCheck {
  #ROWS: Rows;
  #COLS: Cols;
  #MAX_NUMBER_OF_TURNS: MaxMoves;
  #PLAYERS: Player[];

  constructor(
    rows: Rows,
    cols: Cols,
    maxNumberOfTurns: MaxMoves,
    players: Player[]
  ) {
    this.#ROWS = rows;
    this.#COLS = cols;
    this.#MAX_NUMBER_OF_TURNS = maxNumberOfTurns;
    this.#PLAYERS = players;
  }

  checkForWinner(board: Matrix) {
    for (const player of this.#PLAYERS) {
      // Horizontal
      for (let row = 0; row < this.#ROWS; row++) {
        for (let col = 0; col < this.#COLS - 3; col++) {
          if (
            board[row].slice(col, col + 4).every((column) => column === player)
          ) {
            return player;
          }
        }
      }
      // Vertical
      for (let col = 0; col < this.#COLS; col++) {
        for (let row = 0; row < this.#ROWS - 3; row++) {
          if ([0, 1, 2, 3].every((r) => board[row + r][col] === player)) {
            return player;
          }
        }
      }
      // Positively sloped diagonals
      for (let row = 0; row < this.#ROWS - 3; row++) {
        for (let col = 0; col < this.#COLS - 3; col++) {
          if (
            [0, 1, 2, 3].every(
              (offset) => board[row + offset][col + offset] === player
            )
          ) {
            return player;
          }
        }
      }
      // Negatively sloped diaginals
      for (let row = 0; row < this.#ROWS - 3; row++) {
        for (let col = 3; col < this.#COLS; col++) {
          if (
            [0, 1, 2, 3].every(
              (offset) => board[row + offset][col - offset] === player
            )
          ) {
            return player;
          }
        }
      }
    }
    return false;
  }
}