

export default class BoardCheck {
  #ROWS: number;
  #COLS: number;
  #MAX_NUMBER_OF_TURNS: number;

  constructor() {
    this.#ROWS = 6;
    this.#COLS = 7;
    this.#MAX_NUMBER_OF_TURNS = this.#ROWS * this.#COLS;
  }
}