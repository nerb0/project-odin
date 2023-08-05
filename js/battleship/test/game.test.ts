import Player from "../src/modules/Player";

describe("valid", () => {
  const player1 = new Player([5, 4, 3, 3, 2]);
  const player2 = new Player([5, 4, 3, 3, 2]);

  player1.board.placeShip(player1.ships[0], 0, 5);
  player1.board.placeShip(player1.ships[1], 1, 0, true);
  player1.board.placeShip(player1.ships[2], 0, 2, true);
  player1.board.placeShip(player1.ships[3], 7, 0);
  player1.board.placeShip(player1.ships[4], 5, 4, true);

  player2.board.placeShip(player2.ships[0], 2, 1);
  player2.board.placeShip(player2.ships[1], 0, 0, true);
  player2.board.placeShip(player2.ships[2], 1, 0, true);
  player2.board.placeShip(player2.ships[3], 7, 0);
  player2.board.placeShip(player2.ships[4], 5, 4, true);

  test("should hit", () => {
    // Horizontal 5 piece ship
    expect(player1.attack(2, 1, player2.board)).toBe("HIT");
    expect(player1.attack(3, 1, player2.board)).toBe("HIT");
    expect(player1.attack(4, 1, player2.board)).toBe("HIT");
    expect(player1.attack(5, 1, player2.board)).toBe("HIT");
    expect(player1.attack(6, 1, player2.board)).toBe("SUNK");

    // Vertical 4 piece ship
    expect(player1.attack(0, 0, player2.board)).toBe("HIT");
    expect(player1.attack(0, 1, player2.board)).toBe("HIT");
    expect(player1.attack(0, 2, player2.board)).toBe("HIT");
    expect(player1.attack(0, 3, player2.board)).toBe("SUNK");

    // Vertical 3 piece ship
    expect(player1.attack(1, 0, player2.board)).toBe("HIT");
    expect(player1.attack(1, 1, player2.board)).toBe("HIT");
    expect(player1.attack(1, 2, player2.board)).toBe("SUNK");

    // Horizontal 3 piece ship
    expect(player1.attack(7, 0, player2.board)).toBe("HIT");
    expect(player1.attack(8, 0, player2.board)).toBe("HIT");
    expect(player1.attack(9, 0, player2.board)).toBe("SUNK");

    // Vertical 2 piece ship
    expect(player1.attack(5, 4, player2.board)).toBe("HIT");
    expect(player1.attack(5, 5, player2.board)).toBe("SUNK");

    expect(player2.checkIfAllShipsSunk()).toBe(true);
  });

  test("should miss", () => {
    expect(player1.attack(0, 6, player2.board)).toBe("MISS");
    expect(player1.attack(0, 7, player2.board)).toBe("MISS");
    expect(player1.attack(0, 8, player2.board)).toBe("MISS");
  });

  test("already attacked", () => {
    expect(player1.attack(0, 3, player2.board)).toBe("ALREADY ATTACKED");
    expect(player1.attack(0, 6, player2.board)).toBe("ALREADY ATTACKED");
    expect(player1.attack(0, 7, player2.board)).toBe("ALREADY ATTACKED");
  });
});

describe("should throw error", () => {
  const player1 = new Player([5, 4, 3, 3, 2]);
  player1.board.placeShip(player1.ships[0], 0, 5);
  player1.board.placeShip(player1.ships[1], 1, 0, true);
  player1.board.placeShip(player1.ships[2], 0, 2, true);

  test("ship out of bounds", () => {
    expect(() => player1.board.placeShip(player1.ships[3], 10, 0)).toThrowError(
      "Ship is out of bounds"
    );
    expect(() => player1.board.placeShip(player1.ships[4], -1, 0)).toThrowError(
      "Ship is out of bounds"
    );
    expect(() =>
      player1.board.placeShip(player1.ships[4], 0, -1, true)
    ).toThrowError("Ship is out of bounds");
    expect(() =>
      player1.board.placeShip(player1.ships[4], 0, 10, true)
    ).toThrowError("Ship is out of bounds");
    expect(() =>
      player1.board.placeShip(player1.ships[4], 4, 9, true)
    ).toThrowError("Ship is out of bounds");
    expect(() =>
      player1.board.placeShip(player1.ships[4], 9, 4)
    ).toThrowError("Ship is out of bounds");
  });

  test("ship overlap", () => {
		expect(() =>
			player1.board.placeShip(player1.ships[3], 0, 2, true)
			).toThrowError("There is already a ship placed here");
    expect(() => player1.board.placeShip(player1.ships[3], 0, 0)).toThrowError(
      "There is already a ship placed here"
    );
    expect(() =>
      player1.board.placeShip(player1.ships[3], 0, 1, true)
    ).toThrowError("There is already a ship placed here");
  });

  test("previously placed ship", () => {
    expect(() => player1.board.placeShip(player1.ships[0], 0, 0)).toThrowError(
      "This ship has already been placed"
    );
    expect(() =>
      player1.board.placeShip(player1.ships[1], 0, 0, true)
    ).toThrowError("This ship has already been placed");
    expect(() =>
      player1.board.placeShip(player1.ships[2], 0, 0, true)
    ).toThrowError("This ship has already been placed");
  });

	test("attack out of bounds", () => {
		const player2 = new Player([5, 4, 3, 3, 2]);
		expect(() => player1.attack(10, 0, player2.board)).toThrowError("Attack is out of bounds");
		expect(() => player1.attack(-1, 0, player2.board)).toThrowError("Attack is out of bounds");
		expect(() => player1.attack(0, 10, player2.board)).toThrowError("Attack is out of bounds");
		expect(() => player1.attack(0, -1, player2.board)).toThrowError("Attack is out of bounds");
	})
});
