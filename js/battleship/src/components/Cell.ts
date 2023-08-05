import GameController from "../modules/GameController";

function Cell(x: number, y: number) {
	const container = document.createElement("div");
	container.className =
		"border border-black flex justify-center items-center cursor-pointer active:scale-[0.98] hover:scale-105 transition-transform";
	container.dataset.x = x.toString();
	container.dataset.y = y.toString();
	return container;
}
export function BlankCell(x: number, y: number, owner: Player) {
	const cell = Cell(x, y);
	cell.addEventListener("click", function () {
		if (owner === GameController.currentPlayer) return;
		if (GameController.isGameOver) return;
		const otherPlayer =
			GameController.currentPlayer === GameController.player1
				? GameController.player2
				: GameController.player1;
		const attackResult = otherPlayer.board.receiveAttack(x, y);
		if (attackResult === "ALREADY ATTACKED") return;

		GameController.changeTurn();
		this.classList.add("bg-gray-400");
	});
	return cell;
}

export function ShipCell(x: number, y: number, ship: Ship, owner: Player) {
	const cell = Cell(x, y);
	cell.classList.add(owner.color === "blue" ? "bg-blue-400" : "bg-cyan-300");

	cell.addEventListener("click", function () {
		if (owner === GameController.currentPlayer) return;
		if (GameController.isGameOver) return;

		const otherPlayer =
			GameController.currentPlayer === GameController.player1
				? GameController.player2
				: GameController.player1;
		const attackResult = otherPlayer.board.receiveAttack(x, y);
		if (attackResult === "ALREADY ATTACKED") return;

		this.classList.add("pointer-events-none");
		if (attackResult === "HIT") {
			this.classList.add("bg-red-600");
		} else if (attackResult === "SUNK") {
			const coordinates = (ship as Ship).coordinates;
			coordinates.forEach(([x, y]) => {
				const affectedCell = document.querySelector(
					`[data-player="${otherPlayer.name}"]>[data-x="${x}"][data-y="${y}"]`
				);
				affectedCell.classList.add("bg-red-900");
			});
			if (otherPlayer.checkIfAllShipsSunk()) {
				window.location.href = "/#winnerScreen";
				document.getElementById("winnerText").textContent = GameController.currentPlayer.name;
				GameController.isGameOver = true;
			}
		}
	});

	return cell;
}
