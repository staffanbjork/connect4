import { Matrix, Move, MakeMove } from "../types/types";

export default class Board {
  #rows: number;
  #cols: number;
  #pointOfPosition: number[][];
  #board: Matrix;

  constructor() {
    this.#rows = 6;
    this.#cols = 7;
    this.#pointOfPosition = [
      [3, 4, 5, 7, 5, 4, 3],
      [4, 6, 8, 10, 8, 6, 4],
      [5, 7, 11, 13, 11, 7, 5],
      [5, 7, 11, 13, 11, 7, 5],
      [4, 6, 8, 10, 8, 6, 4],
      [3, 4, 5, 7, 5, 4, 3],
    ];
    this.#board = Array(this.#rows).fill(Array(this.#cols).fill(null));
  }

  get ROWS() {
    return this.#rows;
  }

  get COLS() {
    return this.#cols;
  }

  get BOARD() {
    return this.#board;
  }

  get validColumns() {
    const validColumns: number[] = [];
    this.#board[0].forEach((_col, i) => {
      if (!this.#board[0][i]) {
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

  set makeMove(move: MakeMove) {
    this.#board[move.row][move.col] = move.player;
  }

  set undoMove(move: Move) {
    this.#board[move.row][move.col] = null;
  }

  getPointOfPosition(move: Move) {
    return this.#pointOfPosition[move.row][move.col];
  }
}