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
		this.placeShipsRandomly();
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
		this.ships.forEach((ship) => {
			const isVertical = Math.random() > 0.5;
			while (!ship.coordinates) {
				const [x, y] = [
					Math.floor(Math.random() * 10),
					Math.floor(Math.random() * 10),
				];
				try {
					this.board.placeShip(ship, x, y, isVertical);
				} catch (_) {}
			}
		});
	}

	attackRandomly(enemyBoard: PlayerBoard) {
		const size = enemyBoard.matrix.length;
		let x = Math.floor(Math.random() * size);
		let y = Math.floor(Math.random() * size);

		while (enemyBoard.matrix[y][x] == "X") {
			x = Math.floor(Math.random() * size);
			y = Math.floor(Math.random() * size);
		}

		return [x, y];
	}
}

export class AI extends Player {
	constructor(
		name = "AI",
		shipLengths: number[] = GameController.shipLengths,
		color: string = "red"
	) {
		super(name, shipLengths);
	}
}
