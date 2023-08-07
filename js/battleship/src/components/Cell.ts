import GameController from "../modules/GameController";
import { AI } from "../modules/Player";
import { cn } from "../util";

export default function Cell(x: number, y: number, owner: Player) {
	const container = document.createElement("div");
	container.className = cn("flex justify-center items-center cursor-pointer active:scale-[0.98] hover:scale-105 transition-transform") ;
	container.dataset.x = x.toString();
	container.dataset.y = y.toString();

	container.addEventListener("click", () => {
		GameController.attack(x, y, owner);
	});

	return container;
}
