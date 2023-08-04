export class Board {
  static readonly size = 8;
  static readonly matrix = Array<number[]>(Board.size).fill(
    Array<number>(Board.size).fill(0)
  );
  static randomCoordinates(): [number, number] {
    return [
      Math.floor(Math.random() * this.size),
      Math.floor(Math.random() * this.size),
    ];
  }
  static generateMatrix() {
    return Array.from({ length: Board.size }, () =>
      Array.from({ length: Board.size }, () => 0)
    );
  }
}

class KnightMove {
  visited: number[][];
  previousMoves: [number, number][];

  constructor(
    position: [number, number],
    path: [number, number][] = [],
    visited: number[][] = Board.generateMatrix()
  ) {
    this.visited = [...visited];
    this.previousMoves = [...path, position];
    this.visited[position[0]][position[1]] = 1;
  }

  position() {
    return this.previousMoves[this.previousMoves.length - 1];
  }
}

export class Knight {
  path: [number, number][] = [];
  target: [number, number];
  start: [number, number];

  constructor(
    start: [number, number] = Board.randomCoordinates(),
    target: [number, number] = Board.randomCoordinates()
  ) {
    this.start = start;
    this.target = target;
    this.traverse();
  }

  traverse([x, y]: [number, number] = this.start): void {
    if (x == this.target[0] && y == this.target[1]) {
      this.path = [this.target];
			return;
    }
    const pathQueue = [new KnightMove([x, y])];
    while (pathQueue.length) {
      const currentPosition = pathQueue.shift()!;
      const [x, y] = currentPosition.position();
      if (x == this.target[0] && y == this.target[1]) {
        this.path = currentPosition.previousMoves;
        return;
      }
      const possibleMoves = this.getMoves(...currentPosition.position()).filter(
        ([x, y]) => !currentPosition.visited[x][y]
      );
      pathQueue.push(
        ...possibleMoves.map(
          ([moveX, moveY]) =>
            new KnightMove(
              [moveX, moveY],
              currentPosition.previousMoves,
              currentPosition.visited
            )
        )
      );
    }
  }

  traverseRecursive(
    [x, y]: [number, number] = this.start,
    visited = Board.generateMatrix(),
    path: [number, number][] = []
  ): void {}

  getMoves(x: number, y: number) {
    return [
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x - 2, y - 1],
      [x - 2, y + 1],
      [x + 1, y + 2],
      [x + 1, y - 2],
      [x - 1, y + 2],
      [x - 1, y - 2],
    ].filter(([x, y]) => {
      return x >= 0 && x < Board.size && y >= 0 && y < Board.size;
    });
  }
	
	move(start:[number,number], target:[number,number]) {
		this.start = start;
		this.target = target;
		this.traverse();
		return this.path;
	}

  printPath() {
    console.log(`You made it in ${this.path.length - 1} moves!`);
    const board: string[][] = Board.matrix.map((row) => row.map(() => "-"));
    board[this.start[0]][this.start[1]] = "S";
    for (const [x, y] of this.path.slice(1, -1)) {
      board[x][y] = "0";
    }
    board[this.target[0]][this.target[1]] = "E";
    return board.map((row) => row.join(" ")).join("\n");
  }
}
