import PlayerBoard from "./PlayerBoard";
import GameController from "./GameController";
import Ship from "./Ship";

export default class Player {
	board: PlayerBoard;
	ships: Ship[];
	name: string;
	color: string;

	constructor(
		name = "Player",
		shipLengths: number[] = GameController.shipLengths,
		color = "blue"
	) {
		this.color = color;
		this.name = name;
		this.board = new PlayerBoard();
		this.ships = shipLengths.map((length) => new Ship(length));
	}

	attack(x: number, y: number, enemyBoard: PlayerBoard) {
		if (
			x >= enemyBoard.matrix.length ||
			y >= enemyBoard.matrix.length ||
			x < 0 ||
			y < 0
		) {
			throw new Error("Attack is out of bounds");
		}
		return enemyBoard.receiveAttack(x, y);
	}

	checkIfAllShipsSunk() {
		return this.ships.every((ship) => ship.isSunk());
	}

	placeShipsRandomly() {
		this.board = new PlayerBoard();
		this.ships.forEach((ship) => {
			const isVertical = ["vertical", "horizontal"][
				Math.floor(Math.random() * 2)
			];
			while (!ship.coordinates) {
				const [x, y] = [
					Math.floor(Math.random() * 10),
					Math.floor(Math.random() * 10),
				];
				try {
					this.board.placeShip(ship, x, y);
				} catch (_) {}
			}
		});
	}

	attackRandomly(enemyBoard: PlayerBoard) {
		const size = enemyBoard.matrix.length;
		let x = Math.floor(Math.random() * size);
		let y = Math.floor(Math.random() * size);

		while (enemyBoard.getShipAt(x, y) == "X") {
			x = Math.floor(Math.random() * size);
			y = Math.floor(Math.random() * size);
		}

		return [x, y];
	}
}

export class AI extends Player {
	lastHit: [number, number] | null;

	constructor(
		name = "AI",
		shipLengths: number[] = GameController.shipLengths,
		color: string = "red"
	) {
		super(name, shipLengths);
		this.placeShipsRandomly();
		this.lastHit = null;
	}

	attackSmartly(x: number, y: number, enemyBoard: PlayerBoard) {
		if (this.lastHit) {
			x = this.lastHit[0];
			y = this.lastHit[1];
		}
		console.log(this.lastHit);

		const adjacentCells = this.getAdjacentCells(x, y).filter(
			([x, y]) =>
				x >= 0 &&
				y >= 0 &&
				x < enemyBoard.matrix.length &&
				y < enemyBoard.matrix.length &&
				enemyBoard.matrix[y][x] !== "X"
		);

		if (adjacentCells.length === 0) {
			this.lastHit = null;
			return this.attackRandomly(enemyBoard);
		} else {
			return adjacentCells[Math.floor(Math.random() * adjacentCells.length)];
		}
	}

	getAdjacentCells(x: number, y: number) {
		return [
			[x, y - 1],
			[x, y + 1],
			[x - 1, y],
			[x + 1, y],
		];
	}
}
