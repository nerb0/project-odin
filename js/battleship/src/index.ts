import "./global.css";
import { cn } from "./util";

import Player, { AI } from "./modules/Player";
import GameController from "./modules/GameController";
import PlayerBoardController from "./modules/PlayerBoardController";

import Modal from "./components/Modal";
import { ShipPlacement } from "./components/ShipPlacement";
import { BoardView, BoardContainer } from "./components/Board";

function createRoot() {
	const root = document.createElement("div");
	document.body.append(root);
	return root;
}

window.onload = () => {
	if (window.location.hash === "#winnerScreen") {
		window.location.assign("#");
		window.location.reload();
	}

	const root = document.getElementById("root") || createRoot();
	const player1 = new Player();
	const player2 = new AI();

	const board1 = BoardView(player1);
	const board2 = BoardView(player2);

	GameController.setupGame(
		new PlayerBoardController(player1, board1),
		new PlayerBoardController(player2, board2)
	);

	const boardContainer = BoardContainer(board1, board2);
	const gameHeader = document.createElement("h1");
	gameHeader.textContent = "BATTLESHIP";
	gameHeader.className = "text-7xl font-bold mb-4";

	root.className =
		"flex flex-col justify-center items-center h-screen w-screen min-h-[900px] gap-y-8";
	root.append(gameHeader, boardContainer, ShipPlacement(), Modal);
};
