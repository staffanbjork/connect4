import { Matrix, Move, MakeMove } from "../types/types";
import BoardState from "./BoardState";

export default class Board {
  #rows: number;
  #cols: number;
  #pointOfPosition: number[][];
  #board: Matrix;
  #boardState: BoardState;

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
    this.#boardState = new BoardState(this.BOARD, this.ROWS, this.COLS);
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

  get BOARD_STATE() {
    return this.#boardState;
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