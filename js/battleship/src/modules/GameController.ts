import Ship from "./Ship";
import { AI } from "./Player";
import { cn } from "../util";
import { winnerText } from "../components/Modal";

export class PlayerBoardController {
	player: Player;
	boardView: HTMLDivElement;
	constructor(player: Player, boardView: HTMLDivElement) {
		this.player = player;
		this.boardView = boardView;
	}
	showBoard() {
		this.boardView.classList.remove("pointer-events-none", "brightness-50");
		this.boardView.className = cn(
			this.boardView.className,
			"top-[-250px] left-[-250px] z-10"
		);
	}
	hideBoard() {
		this.boardView.classList.add("pointer-events-none", "brightness-50");
		this.boardView.className = cn(
			this.boardView.className,
			"top-[-230px] left-[-270px] z-0"
		);
	}
	disableBoard() {
		this.boardView.classList.add("pointer-events-none");
	}
}

export default class GameController {
	static player1: PlayerBoardController;
	static player2: PlayerBoardController;
	static current: PlayerBoardController;
	static shipLengths = [5, 4, 3, 3, 2];
	static isGameOver = false;

	static changeTurn() {
		this.current.showBoard();

		const other =
			this.current === GameController.player1 ? this.player2 : this.player1;
		if (other.player instanceof AI) {
			this.current.disableBoard();
		}

		this.current = other;
		this.current.hideBoard();

		if (other.player instanceof AI) {
			this.autoAttack();
		}
	}

	static autoAttack(
		[x, y] = this.current.player.attackRandomly(
			this.current === this.player1
				? this.player2.player.board
				: this.player1.player.board
		)
	) {
		if (this.isGameOver) return;
		const current = this.current;
		const ai = current.player as AI;
		const other = this.current === this.player1 ? this.player2 : this.player1;

		if (ai.lastHit) {
			const [smartX, smartY] = ai.attackSmartly(x, y, other.player.board);
			x = smartX;
			y = smartY;
		}

		const target = other.player.board.getShipAt(x, y);
		const cell = other.boardView.children[y * 10 + x];
		if (target) {
			let nextMove = ai.attackRandomly(other.player.board);
			setTimeout(() => {
				this.attack(x, y, other.player);
				if (!(target as Ship).isSunk()) {
					nextMove = ai.attackSmartly(x, y, other.player.board);
					ai.lastHit = [x, y];
				} else {
					ai.lastHit = null;
				}
				this.autoAttack(nextMove);
			}, 1500);
		} else {
			setTimeout(() => {
				this.attack(x, y, other.player);
			}, 1500);
		}
	}

	static attack(x: number, y: number, owner: Player) {
		if (this.isGameOver) return;
		if (this.current.player === owner) return;

		const other = this.current === this.player1 ? this.player2 : this.player1;

		const cell = other.boardView.children[y * 10 + x];
		const ship = other.player.board.getShipAt(x, y);
		const attackResult = other.player.board.receiveAttack(x, y);
		if (attackResult == "ALREADY ATTACKED") return;

		if (attackResult == "MISS") {
			cell.className = cn(cell.className, "bg-gray-400");
			this.changeTurn();
		} else {
			if (attackResult == "HIT") {
				cell.className = cn(cell.className, "bg-red-600");
			} else {
				const coordinates = (ship as Ship).coordinates;
				for (const [x, y] of coordinates) {
					const affectedCell = other.boardView.children[y * 10 + x];
					affectedCell.className = cn(affectedCell.className, "bg-red-900");
				}
				if (other.player.checkIfAllShipsSunk()) {
					this.triggerGameOver();
				}
			}
		}
		cell.className = cn(cell.className, "pointer-events-none");
	}

	static triggerGameOver() {
		this.isGameOver = true;
		window.location.assign("#modal");
		winnerText.textContent = this.current.player.name;
	}
}
