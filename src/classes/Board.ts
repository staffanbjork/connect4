
type Matrix = (number | null)[][];
export default class Board {
  #rows: number;
  #cols: number;
  #pointOfPosition: number[][];
  board: Matrix;

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
    this.board = Array(this.#rows).fill(Array(this.#cols).fill(null));
  }

  get ROWS() {
    return this.#rows;
  }

  get COLS() {
    return this.#cols;
  }

  getValidColumns(board: Matrix) {
    const validColumns: number[] = [];
    board[0].forEach((_col, i) => { if (!board[0][i]) { validColumns.push(i) } })
    return validColumns;
  }


}