import { Rows, Cols, Player, Matrix } from "../types/types";

export default class BoardState {
  #BOARD: Matrix;
  #ROWS: Rows;
  #COLS: Cols;
  #PLAYERS: Player[];

  constructor(board: Matrix, rows: Rows, cols: Cols) {
    this.#BOARD = board;
    this.#ROWS = rows;
    this.#COLS = cols;
    this.#PLAYERS = [1, 2];
  }
  get BOARD() {
    return this.#BOARD;
  }
  get ROWS() {
    return this.#ROWS;
  }
  get COLS() {
    return this.#COLS;
  }
  get PLAYERS() {
    return this.#PLAYERS;
  }

  get validColumns() {
    const validColumns: number[] = [];
    this.BOARD[0].forEach((_col, i) => {
      if (!this.BOARD[0][i]) {
        validColumns.push(i);
      }
    });
    return validColumns;
  }
  
  checkForWinner(board: Matrix) {
    for (const player of this.PLAYERS) {
      // Horizontal
      for (let row = 0; row < this.ROWS; row++) {
        for (let col = 0; col < this.COLS - 3; col++) {
          if (
            board[row].slice(col, col + 4).every((column) => column === player)
          ) {
            return player;
          }
        }
      }
      // Vertical
      for (let col = 0; col < this.COLS; col++) {
        for (let row = 0; row < this.ROWS - 3; row++) {
          if ([0, 1, 2, 3].every((r) => board[row + r][col] === player)) {
            return player;
          }
        }
      }
      // Positively sloped diagonals
      for (let row = 0; row < this.ROWS - 3; row++) {
        for (let col = 0; col < this.COLS - 3; col++) {
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
      for (let row = 0; row < this.ROWS - 3; row++) {
        for (let col = 3; col < this.COLS; col++) {
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