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
		shipLengths: number[] = GameController.SHIP_LENGTHS,
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

	attackRandomly(enemyBoard: PlayerBoard): [number, number] {
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
	lastHit: Coordinate | null;

	constructor(
		name = "AI",
		shipLengths: number[] = GameController.SHIP_LENGTHS,
		color: string = "red"
	) {
		super(name, shipLengths);
		this.placeShipsRandomly();
		this.lastHit = null;
	}

	attackSmartly(enemyBoard: PlayerBoard): Coordinate {
		if (!this.lastHit) return this.attackRandomly(enemyBoard);

		const x = this.lastHit[0];
		const y = this.lastHit[1];

		const validAdjacentCells: Coordinate[] = this.getAdjacentCells(x, y).filter(
			([adjacentX, adjacentY]) =>
				adjacentX >= 0 &&
				adjacentY >= 0 &&
				adjacentX < enemyBoard.matrix.length &&
				adjacentY < enemyBoard.matrix.length &&
				enemyBoard.matrix[adjacentY][adjacentX] !== "X"
		);

		if (validAdjacentCells.length === 0) {
			this.lastHit = null;
			return this.attackRandomly(enemyBoard);
		} else {
			return validAdjacentCells[
				Math.floor(Math.random() * validAdjacentCells.length)
			];
		}
	}

	getAdjacentCells(x: number, y: number): Coordinate[] {
		return [
			[x, y - 1],
			[x, y + 1],
			[x - 1, y],
			[x + 1, y],
		];
	}
}
