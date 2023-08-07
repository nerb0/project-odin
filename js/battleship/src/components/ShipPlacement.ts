import GameController from "../modules/GameController";

function ShipList(ships: Ship[] = GameController.current.getShips()) {
	const container = document.createElement("div");
	container.className = "flex gap-x-6";

	function ShipSelect(ship: Ship, id: number) {
		const shipNode = document.createElement("div");
		shipNode.className =
			"px-4 py-1 rounded-md bg-cyan-600 text-white text-2xl font-bold cursor-pointer hover:bg-cyan-800 [&.is-active]:bg-cyan-900 [&.has-value]:bg-green-800";
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
				console.log(err);
			}
		};
		cell.onmouseover = () => {
			if (GameController.current.shipToPlace) {
				const ship = GameController.current.shipToPlace;
				const coordinates = GameController.current
					.getShipPlacement(x, y, ship)
					.filter(([x, y]) => x < 10 && y < 10);
				let background = "bg-green-500";
				if (
					coordinates.length != ship.length ||
					!GameController.current.checkPlacement(coordinates)
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

	const cells = Array(100)
		.fill(0)
		.map((_, i) => {
			const x = i % 10;
			const y = Math.floor(i / 10);
			return PlacementCell(x, y);
		});

	virtualBoard.append(...cells);

	const orientationText = document.createElement("p");
	orientationText.className =
		"px-4 py-1 rounded-md font-bold text-white text-3xl";
	orientationText.textContent =
		GameController.current.placementOrientation.toUpperCase();

	const orientationButton = document.createElement("button");
	orientationButton.className = "px-4 py-1 rounded-md bg-blue-800 text-white";
	orientationButton.textContent = "Change orientation";
	orientationButton.onclick = () => {
		orientationText.textContent = GameController.current
			.changeOrientation()
			.toUpperCase();
	};

	const playBtn = document.createElement("div");
	playBtn.className =
		"px-5 py-1 text-xl text-white bg-green-700 rounded-sm cursor-pointer hover:bg-green-800";
	playBtn.textContent = "PLAY";
	playBtn.onclick = () => {
		for (const ship of GameController.current.getShips()) {
			if (!ship.coordinates) return;
		}
		container.classList.add("hidden");
	};

	const container = document.createElement("div");
	container.className =
		"flex flex-col gap-y-4 z-10 fixed top-0 left-0 justify-center items-center bg-gray-500/50 w-full h-full";
	container.append(
		orientationButton,
		orientationText,
		ShipList(),
		virtualBoard,
		playBtn
	);
	return container;
}
