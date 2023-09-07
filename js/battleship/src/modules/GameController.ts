import Ship from "./Ship";
import { AI } from "./Player";
import { cn } from "../util";

export default class GameController {
	static MATRIX_SIZE = 10;
	static controller1: PlayerBoardController;
	static controller2: PlayerBoardController;
	static current: PlayerBoardController;
	static SHIP_LENGTHS = [5, 4, 3, 3, 2];
	static isGameOver: boolean;
	static againstAI: boolean;

	static setupGame(
		controller1: PlayerBoardController,
		controller2: PlayerBoardController
	) {
		this.controller1 = controller1;
		this.controller2 = controller2;
		this.current = this.controller1;
		this.controller1.shipToPlace = this.controller1.player.ships[0];
		this.isGameOver = false;

		if (!(this.controller2.player instanceof AI)) {
			this.controller1.setTurnable();
			this.controller2.setTurnable();
			this.controller1.hideBoardView();
			this.controller2.showBoardView();
			this.againstAI = false;
		} else {
			this.current.disableBoardView();
			this.againstAI = true;
		}
	}

	static startGame() {
		if (this.againstAI) {
			this.controller1.showBoardShips();
		}
	}

	static changeTurn() {
		const prev = this.current;
		const current =
			this.current === GameController.controller1
				? this.controller2
				: this.controller1;

		if (this.againstAI) {
			if (current.player instanceof AI) {
				prev.disableBoardView();
			} else {
				prev.enableBoardView();
			}
		} else {
			prev.showBoardView();
			current.hideBoardView();
		}

		this.current = current;
		current.disableBoardView();

		if (current.player instanceof AI) {
			this.handleAIAttack();
		}
	}

	private static handleAIAttack() {
		const current = this.current;
		const target =
			this.current === this.controller1 ? this.controller2 : this.controller1;
		const enemyBoard = target.player.board;
		const attackCoordinates = (current.player as AI).attackSmartly(enemyBoard);
		const attackResult = this.attack(attackCoordinates, target.player);
		if (attackResult == "HIT" || attackResult == "SUNK") {
			this.handleAIAttack();
		}
	}

	static attack([targetX, targetY]: Coordinate, target: Player) {
		if (this.isGameOver) return;
		if (this.current.player === target) return;

		const targetBoardView =
			this.current === this.controller1
				? this.controller2.boardView
				: this.controller1.boardView;

		const cellIndex = targetY * 10 + targetX;
		const cell = targetBoardView.children[cellIndex];
		const ship = target.board.getShipAt(targetX, targetY);
		const attackResult = target.board.receiveAttack(targetX, targetY);
		if (attackResult == "ALREADY ATTACKED") return attackResult;

		if (attackResult == "MISS") {
			cell.className = cn(cell.className, "bg-gray-400 text-4xl");
			cell.textContent = "•";
			this.changeTurn();
		} else {
			if (attackResult == "HIT") {
				cell.className = cn(cell.className, "bg-red-600");
			} else {
				const coordinates = (ship as Ship).coordinates;
				for (const [affectedX, affectedY] of coordinates) {
					const affectedIndex = affectedY * 10 + affectedX;
					const affectedCell = targetBoardView.children[affectedIndex];
					affectedCell.className = cn(affectedCell.className, "bg-red-900");
				}
				if (target.checkIfAllShipsSunk()) {
					this.triggerGameOver();
				}
			}
		}
		return attackResult;
		cell.classList.add("pointer-events-none");
	}

	static triggerGameOver() {
		this.isGameOver = true;
		window.location.assign("#modal");

		const winnerDOM = document.getElementById("winnerText");
		winnerDOM.textContent = this.current.player.name;
	}
}
