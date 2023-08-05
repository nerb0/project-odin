import { AI } from "./Player";

export default class GameController {
	static shipLengths = [5, 4, 3, 3, 2];
	static player1: Player = null;
	static player2: Player = null;
	static currentPlayer: Player = null;
	static isGameOver = false;

	static changeTurn() {
		this.currentPlayer =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;

		if (this.currentPlayer.checkIfAllShipsSunk()) {
			this.isGameOver = true;
			return;
		}

		if (this.currentPlayer instanceof AI) {
			this.autoAttack();
		}
	}

	static autoAttack() {
		if (this.isGameOver) return;
		const ai = this.currentPlayer as AI;
		const otherPlayer = ai === this.player1 ? this.player2 : this.player1;
		const [x, y] = ai.attackRandomly(otherPlayer.board);

		document
			.querySelector(
				`[data-player='${otherPlayer.name}']>[data-x="${x}"][data-y="${y}"]`
			)
			.dispatchEvent(new MouseEvent("click"));

		if (GameController.currentPlayer == ai) this.autoAttack();
	}
}
