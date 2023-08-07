import GameController from "./GameController";

export default class PlayerBoard {
	matrix: (Ship | "X" | null)[][];

	constructor(size: number = GameController.matrixSize) {
		this.matrix = Array.from({ length: size }, () =>
			Array.from({ length: size }, () => null)
		);
	}

	receiveAttack(x: number, y: number): AttackResult {
		if (this.matrix[y][x] === "X") return "ALREADY ATTACKED";

		// Nothing at coordinates
		if (!this.matrix[y][x]) {
			this.matrix[y][x] = "X";
			return "MISS";
		}

		const ship = this.matrix[y][x] as Ship;
		this.matrix[y][x] = "X";
		return ship.hit() ? "SUNK" : "HIT";
	}

	placeShip(ship: Ship, x: number, y: number, orientation: ShipOrientation = "horizontal") {
		function handleInvalidPlacement(error: string) {
			for (const [x, y] of ship.coordinates) {
				this.matrix[y][x] = ship;
			}
			throw new Error(error);
		}

		if (ship.coordinates) {
			for (const [x, y] of ship.coordinates) {
				this.matrix[y][x] = null;
			}
		}

		if (x >= this.matrix.length || y >= this.matrix.length || y < 0 || x < 0)
			handleInvalidPlacement("Ship is out of bounds");

		if (this.matrix[y][x] !== null)
			handleInvalidPlacement("There is already a ship placed here");

		let placeMatrix: [number, number][] = [];
		if (orientation == "vertical") {
			if (y + ship.length > this.matrix.length)
				handleInvalidPlacement("Ship is out of bounds");

			for (let i = 1; i < ship.length; i++) {
				if (this.matrix[y + i][x] !== null)
					handleInvalidPlacement("There is already a ship placed here");
			}

			for (let i = 1; i < ship.length; i++) {
				placeMatrix.push([x, y + i]);
				this.matrix[y + i][x] = ship;
			}
		} else {
			if (x + ship.length > this.matrix.length)
				handleInvalidPlacement("Ship is out of bounds");

			for (let i = 1; i < ship.length; i++) {
				if (this.matrix[y][x + i] !== null)
					handleInvalidPlacement("There is already a ship placed here");
			}

			for (let i = 1; i < ship.length; i++) {
				placeMatrix.push([x + i, y]);
				this.matrix[y][x + i] = ship;
			}
		}
		this.matrix[y][x] = ship;
		placeMatrix.push([x, y]);
		ship.coordinates = placeMatrix;
		return placeMatrix;
	}

	getShipAt(x: number, y: number) {
		return this.matrix[y][x];
	}
}
