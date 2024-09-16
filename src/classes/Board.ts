
type Matrix = (number | null)[][];
export default class Board {
  #rows: number;
  #cols: number;
  board: Matrix;

  constructor() {
    this.#rows = 6;
    this.#cols = 7;
    this.board = Array(this.#rows).fill(Array(this.#cols).fill(null));
  }

  get rows() {
    return this.#rows;
  }

  get cols() {
    return this.#cols;
  }
}