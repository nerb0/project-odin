import "./global.css";

import { BoardView, BoardContainer } from "./components/Board";

import Player, { AI } from "./modules/Player";
import GameController, { PlayerBoardController } from "./modules/GameController";
import Modal from "./components/Modal";
import { cn } from "./util";

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

	GameController.player1 = new PlayerBoardController(player1, board1);
	GameController.player2 = new PlayerBoardController(player2, board2);
	GameController.current = GameController.player1;
	GameController.player2.showBoard();

	const boardContainer = BoardContainer(board1, board2);
	root.className = "flex justify-center items-center h-screen w-screen gap-x-4";
	root.append(boardContainer, Modal);
};
