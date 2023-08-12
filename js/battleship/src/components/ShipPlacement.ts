import GameController from "../modules/GameController";
import { cn } from "../util";

function ShipList(ships: Ship[] = GameController.current.getShips()) {
	const container = document.createElement("div");
	container.className = "flex gap-x-6";

	function ShipSelect(ship: Ship, id: number) {
		const shipNode = document.createElement("div");
		shipNode.className =
			"px-4 py-1 rounded-md bg-cyan-600 text-white text-2xl font-bold cursor-pointer hover:bg-cyan-800 [&.is-active]:bg-cyan-800 [&.has-value]:bg-green-800";
		shipNode.id = `ship-${id}`;
		shipNode.textContent = ship.length.toString();
		shipNode.onclick = () => {
			GameController.current.setShipToPlace(ship);
			const active = container.querySelector(".is-active");
			if (active) active.classList.remove("is-active");
			shipNode.classList.add("is-active");
		};
		return shipNode;
	}

	const shipNodes = ships.map((ship, idx) => ShipSelect(ship, idx));
	shipNodes[0].classList.add("is-active");
	container.append(...shipNodes);
	return container;
}

function ShipOrientation() {
	const container = document.createElement("div");
	container.className = "flex gap-x-1 w-[300px]";

	const orientationText = document.createElement("p");
	orientationText.className =
		"px-2 py-1 rounded-md font-bold text-white text-3xl flex-grow text-center";
	orientationText.textContent =
		GameController.current.placementOrientation.toUpperCase();

	const orientationButton = document.createElement("button");
	orientationButton.className =
		"rounded-full bg-blue-800 text-white text-2xl px-3 hover:-rotate-180 active:rotate-[-520deg] transition-transform duration-200";
	orientationButton.textContent = "↺";
	orientationButton.onclick = () => {
		orientationText.textContent = GameController.current
			.changeOrientation()
			.toUpperCase();
	};

	container.append(orientationText, orientationButton);
	return container;
}

export function ShipPlacement() {
	const virtualBoard = document.createElement("div");
	virtualBoard.className =
		"rounded-md grid grid-cols-10 grid-rows-10 min-h-[600px] h-[600px] w-[600px] p-2 bg-gray-300 \
		[&>div]:border-t-2 [&>div]:border-l-2 [&>div]:border-gray-700 [&>:nth-child(10n)]:border-r-2 [&>:nth-child(n+91)]:border-b-2";

	function PlacementCell(x: number, y: number) {
		const cell = document.createElement("div");
		cell.className = "cursor-pointer";
		cell.dataset.x = `${x}`;
		cell.dataset.y = `${y}`;
		cell.onclick = () => {
			try {
				if (!GameController.current.shipToPlace) return;
				const background = "bg-green-800";
				const shipToPlace = GameController.current.shipToPlace;
				const orientation = GameController.current.placementOrientation;

				const prevCoordinates = shipToPlace.coordinates;
				const coordinates = GameController.current.player.board.placeShip(
					shipToPlace,
					x,
					y,
					orientation
				);
				if (prevCoordinates) {
					for (const [x, y] of prevCoordinates) {
						const cell = virtualBoard.children[y * 10 + x];
						cell.classList.remove(background);
					}
				}
				for (const [x, y] of coordinates) {
					const cell = virtualBoard.children[y * 10 + x];
					cell.classList.add(background);
				}
				const shipBtn = document.getElementById(
					`ship-${GameController.current.getShips().indexOf(shipToPlace)}`
				);
				shipBtn.classList.add("has-value");
			} catch (err) {
				return;
			}
		};
		cell.onmouseover = () => {
			if (GameController.current.shipToPlace) {
				const ship = GameController.current.shipToPlace;
				const coordinates = GameController.current
					.getShipPlacementCoordinates(x, y, ship)
					.filter(([x, y]) => x < 10 && y < 10);
				let background = "bg-green-500";
				if (
					coordinates.length != ship.length ||
					!GameController.current.checkIfValidPlacement(ship, coordinates)
				) {
					background = "bg-red-500";
				}
				for (const [x, y] of coordinates) {
					const cell = virtualBoard.children[y * 10 + x];
					cell.classList.add(background);
				}
			}
		};
		cell.onmouseout = () => {
			cells.forEach((cell) => {
				cell.classList.remove("bg-green-500", "bg-red-500");
			});
		};
		return cell;
	}

	function ShipPlacementControls(board: HTMLDivElement) {
		const controlsContainer = document.createElement("div");
		controlsContainer.className = "flex gap-x-4";

		const playBtn = document.createElement("div");
		playBtn.className =
			"px-5 py-1 text-xl text-white bg-green-700 rounded-sm cursor-pointer hover:bg-green-800";
		playBtn.textContent = "PLAY";
		playBtn.onclick = () => {
			for (const ship of GameController.current.getShips()) {
				if (!ship.coordinates) return;
			}
			container.classList.add("hidden");
			GameController.startGame();
		};

		const resetBtn = document.createElement("div");
		resetBtn.className =
			"px-5 py-1 text-xl text-white bg-red-700 rounded-sm cursor-pointer hover:bg-red-800";
		resetBtn.textContent = "RESET";
		resetBtn.onclick = () => {
			for (const ship of GameController.current.getShips()) {
				if (!ship.coordinates) continue;
				const shipBtn = document.getElementById(
					`ship-${GameController.current.getShips().indexOf(ship)}`
				);
				shipBtn.classList.remove("has-value");

				for (const [x, y] of ship.coordinates) {
					const cell = board.children[y * 10 + x];
					cell.classList.remove("bg-green-800");
				}
				ship.coordinates = null;
			}
		};

		const randomBtn = document.createElement("div");
		randomBtn.textContent = "RANDOMIZE";
		randomBtn.className =
			"px-5 py-1 text-xl text-white bg-gradient-to-r rounded-sm cursor-pointer \
		from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-colors";
		randomBtn.onclick = () => {
			for (const ship of GameController.current.getShips()) {
				if (!ship.coordinates) continue;
				const shipBtn = document.getElementById(
					`ship-${GameController.current.getShips().indexOf(ship)}`
				);
				shipBtn.classList.add("has-value");
				for (const [x, y] of ship.coordinates) {
					const cell = board.children[y * 10 + x];
					cell.classList.remove("bg-green-800");
				}
			}
			GameController.current.player.placeShipsRandomly();
			for (const ship of GameController.current.getShips()) {
				const shipBtn = document.getElementById(
					`ship-${GameController.current.getShips().indexOf(ship)}`
				);
				shipBtn.classList.add("has-value");
				for (const [x, y] of ship.coordinates) {
					const cell = board.children[y * 10 + x];
					cell.classList.add("bg-green-800");
				}
			}
		};

		controlsContainer.append(playBtn, randomBtn, resetBtn);
		return controlsContainer;
	}

	const cells = Array(100)
		.fill(0)
		.map((_, i) => {
			const x = i % 10;
			const y = Math.floor(i / 10);
			return PlacementCell(x, y);
		});
	virtualBoard.append(...cells);

	const container = document.createElement("div");
	container.className =
		"flex flex-col gap-y-4 z-10 fixed items-center top-0 left-0 bg-gray-900/80 w-full h-full overflow-scroll py-10";
	container.append(
		ShipOrientation(),
		ShipList(),
		virtualBoard,
		ShipPlacementControls(virtualBoard)
	);
	return container;
}
