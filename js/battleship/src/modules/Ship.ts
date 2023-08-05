export default class Ship {
  length: number;
  hits: number;
  coordinates: [number, number][] | null;

  constructor(length: number) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
    return this.isSunk();
  }

  isSunk() {
    return this.hits === this.length;
  }
}
