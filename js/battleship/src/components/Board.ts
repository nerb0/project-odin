import GameController from "../modules/GameController";
import { BlankCell, ShipCell } from "./Cell";

export default function Board(player: Player) {
	const container = document.createElement("div");
	container.className =
		"w-[500px] h-[500px] p-1 border border-black rounded-md shadow-md gap-1 grid grid-cols-10 grid-rows-[repeat(10,minmax(0,1fr))]";
	container.dataset.player = player.name;
	const cells = player.board.matrix.reduce((acc, row, y) => {
		row.forEach((ship, x) => {
			acc.push(
				ship ? ShipCell(x, y, ship as Ship, player) : BlankCell(x, y, player)
			);
		});
		return acc;
	}, [] as HTMLDivElement[]);
	container.append(...cells);
	return container;
}
