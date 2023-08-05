import "./global.css";

import Board from "./components/Board";

import Player, { AI } from "./modules/Player";
import GameController from "./modules/GameController";
import Modal from "./components/Modal";

function createRoot() {
	const root = document.createElement("div");
	document.body.append(root);
	return root;
}

window.onload = () => {
	const root = document.getElementById("root") || createRoot();
	const player = new Player();
	const ai = new AI();

	GameController.player1 = player;
	GameController.player2 = ai;
	GameController.currentPlayer = player;

	const playerBoard = Board(player);
	const aiBoard = Board(ai);

	root.className = "flex justify-center items-center h-screen w-screen gap-x-4";
	root.append(playerBoard, aiBoard, Modal);
};
