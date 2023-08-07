import GameController from "../modules/GameController";
import Cell from "./Cell";

export function BoardView(player: Player) {
	const container = document.createElement("div");
	container.className =
		"w-[500px] h-[500px] p-1 border-black shadow-md \
		grid grid-cols-10 grid-rows-[repeat(10,minmax(0,1fr))] \
		[&>div]:border-t-2 [&>div]:border-l-2 [&>div]:border-gray-700 [&>:nth-child(10n)]:border-r-2 [&>:nth-child(n+91)]:border-b-2";
	container.dataset.player = player.name;

	const cells = player.board.matrix.reduce((acc, row, y) => {
		row.forEach((ship, x) => {
			acc.push(Cell(x, y, player));
		});
		return acc;
	}, [] as HTMLDivElement[]);
	container.append(...cells);

	return container;
}

export function BoardContainer(...boards: HTMLDivElement[]) {
	const container = document.createElement("div");
	container.className = "relative flex items-center justify-center gap-x-4 min-h-[600px]";
	container.append(...boards);
	return container;
}
