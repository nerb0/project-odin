import "./global.css";

import { BoardView, BoardContainer } from "./components/Board";

import Player, { AI } from "./modules/Player";
import GameController, { PlayerBoardController } from "./modules/GameController";
import Modal from "./components/Modal";
import { cn } from "./util";
import { ShipPlacement } from "./components/ShipPlacement";

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
	const player2 = new Player();

	const board1 = BoardView(player1);
	const board2 = BoardView(player2);

	GameController.setupGame(new PlayerBoardController(player1, board1), new PlayerBoardController(player2, board2));

	const boardContainer = BoardContainer(board1, board2);
	const gameHeader = document.createElement("h1");
	gameHeader.textContent = "Battleship";
	gameHeader.className = "text-7xl font-bold mb-4";

	root.className = "flex flex-col justify-center items-center h-screen w-screen min-h-[900px] gap-y-8";
	root.append(gameHeader, boardContainer, ShipPlacement(), Modal);
};
