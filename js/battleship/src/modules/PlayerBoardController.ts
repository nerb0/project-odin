import { cn } from "../util";

export default class PlayerBoardController {
	player: Player;
	boardView: HTMLDivElement;
	shipToPlace: Ship | null = null;
	placementOrientation: "horizontal" | "vertical" = "horizontal";

	constructor(player: Player, boardView: HTMLDivElement) {
		this.player = player;
		this.boardView = boardView;
	}
	showBoard() {
		this.boardView.classList.remove("pointer-events-none", "brightness-50");
		this.boardView.className = cn(
			this.boardView.className,
			"top-0 left-[-250px] z-10"
		);
	}
	hideBoard() {
		this.boardView.className = cn(
			this.boardView.className,
			"top-[20px] left-[-270px] z-0 pointer-events-none brightness-50"
		);
	}
	disableBoard() {
		this.boardView.classList.add("pointer-events-none");
	}
	enableBoard() {
		this.boardView.classList.remove("pointer-events-none");
	}
	setTurnable() {
		this.boardView.className = cn(
			this.boardView.className,
			"absolute top-[-230px] left-[-270px] \
			transition-[top_left_pointer-events] duration-[2000ms] bg-white brightness-50"
		);
	}
	getShipPlacement(x: number, y: number, ship: Ship): Coordinate[] {
		return this.placementOrientation == "horizontal"
			? Array(ship.length)
					.fill(0)
					.map((_, i) => [x + i, y])
			: Array(ship.length)
					.fill(0)
					.map((_, i) => [x, y + i]);
	}
	setShipToPlace(ship: Ship) {
		this.shipToPlace = ship;
	}
	checkPlacement(coordinates: Coordinate[]) {
		for (const [x, y] of coordinates) {
			if (this.player.board.getShipAt(x, y)) return false;
		}
		return true;
	}
	getShips() {
		return this.player.ships;
	}
	changeOrientation() {
		this.placementOrientation =
			this.placementOrientation == "horizontal" ? "vertical" : "horizontal";
		return this.placementOrientation;
	}
}
