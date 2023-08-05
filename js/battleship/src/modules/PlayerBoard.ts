export default class PlayerBoard {
	matrix: (Ship | "X" | null)[][];

	constructor(size: number = 10) {
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

	placeShip(ship: Ship, x: number, y: number, isVertical: boolean = false) {
		if (ship.coordinates) throw new Error("This ship has already been placed");

		if (x >= this.matrix.length || y >= this.matrix.length || y < 0 || x < 0)
			throw new Error("Ship is out of bounds");

		if (this.matrix[y][x] !== null)
			throw new Error("There is already a ship placed here");

		let placeMatrix: [number, number][] = [];
		if (isVertical) {
			if (y + ship.length > this.matrix.length)
				throw new Error("Ship is out of bounds");

			for (let i = 1; i < ship.length; i++) {
				if (this.matrix[y + i][x] !== null)
					throw new Error("There is already a ship placed here");
			}

			for (let i = 1; i < ship.length; i++) {
				placeMatrix.push([x, y + i]);
				this.matrix[y + i][x] = ship;
			}
		} else {
			if (x + ship.length > this.matrix.length)
				throw new Error("Ship is out of bounds");

			for (let i = 1; i < ship.length; i++) {
				if (this.matrix[y][x + i] !== null)
					throw new Error("There is already a ship placed here");
			}

			for (let i = 1; i < ship.length; i++) {
				placeMatrix.push([x + i, y]);
				this.matrix[y][x + i] = ship;
			}
		}
		this.matrix[y][x] = ship;
		placeMatrix.push([x, y]);
		ship.coordinates = placeMatrix;
	}

	getShipAt(x: number, y: number) {
		return this.matrix[y][x];
	}
}
