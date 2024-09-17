import { Player, Matrix } from "../types/types";

export default class BoardState {
  #BOARD: Matrix;
  #ROWS: number;
  #COLS: number;
  #PLAYERS: Player[];

  constructor(board: Matrix, rows: number, cols: number) {
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
  get validMoves() {
    const validMoves = this.validColumns.forEach((_col, i) => {
      for (let row = this.ROWS - 1; row >= 0; row--) {
        if (!this.BOARD[row][i]) {
          return { row: row, col: i };
        }
      }
    });
    return validMoves;
  }
  get isWinner() {
    for (const player of this.PLAYERS) {
      // Horizontal
      for (let row = 0; row < this.ROWS; row++) {
        for (let col = 0; col < this.COLS - 3; col++) {
          if (
            this.BOARD[row]
              .slice(col, col + 4)
              .every((column) => column === player)
          ) {
            return player;
          }
        }
      }
      // Vertical
      for (let col = 0; col < this.COLS; col++) {
        for (let row = 0; row < this.ROWS - 3; row++) {
          if ([0, 1, 2, 3].every((r) => this.BOARD[row + r][col] === player)) {
            return player;
          }
        }
      }
      // Positively sloped diagonals
      for (let row = 0; row < this.ROWS - 3; row++) {
        for (let col = 0; col < this.COLS - 3; col++) {
          if (
            [0, 1, 2, 3].every(
              (offset) => this.BOARD[row + offset][col + offset] === player
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
              (offset) => this.BOARD[row + offset][col - offset] === player
            )
          ) {
            return player;
          }
        }
      }
    }
    if (this.validColumns.length === 0) {
      return "DRAW";
    }
    return false;
  }

  evaluatePosition(player: number, length: number) {
    let count = 0;
    // Horizontal
    for (let row = 0; row < this.ROWS; row++) {
      for (let col = 0; col <= this.COLS - length; col++) {
        const arr = [];
        for (let i = 0; i < length; i++) {
          arr.push(this.BOARD[row][col + i]);
        }
        if (arr.every((cell) => cell === player)) {
          count++;
        }
      }
    }
    // Vertical
    for (let col = 0; col < this.COLS; col++) {
      for (let row = this.ROWS - 1; row >= length - 1; row--) {
        const arr = [];
        for (let i = 0; i < length; i++) {
          arr.push(this.BOARD[row - i][col]);
        }
        if (arr.includes(null)) {
          break;
        }
        if (arr.every((cell) => cell === player)) {
          count++;
        }
      }
    }
    // Positively sloped diagonal
    for (let row = 0; row <= this.ROWS - length; row++) {
      for (let col = 0; col <= this.COLS - length; col++) {
        const arr = [];
        for (let i = 0; i < length; i++) {
          arr.push(this.BOARD[row + i][col + i]);
        }
        if (arr.every((element) => element === player)) {
          count++;
        }
      }
    }
    // Negatively sloped diagonal
    for (let row = 0; row <= this.ROWS - length; row++) {
      for (let col = this.COLS - 1; col >= length - 1; col--) {
        const arr = [];
        for (let i = 0; i < length; i++) {
          arr.push(this.BOARD[row + i][col - i]);
        }
        if (arr.every((element) => element === player)) {
          count++;
        }
      }
    }
    return count;
  }

  evaluateBoard(player: number) {
    const opponent = 3 - player;
    let score = 0;
    score +=
      this.evaluatePosition(player, 2) * 2 +
      this.evaluatePosition(player, 3) * 5 +
      this.evaluatePosition(player, 4) * 1000;
    score -=
      this.evaluatePosition(opponent, 2) * 2 +
      this.evaluatePosition(opponent, 3) * 5 +
      this.evaluatePosition(opponent, 4) * 1000;
    return score;
  }
}