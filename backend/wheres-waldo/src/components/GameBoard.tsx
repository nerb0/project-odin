"use client";

import { pauseGameSession, pinpointCoordinates } from "@/app/actions";
import { BOARD_SELECT_SIZE } from "@/lib/constants";
import { BoardItemModel, BoardModel, Coordinates } from "@/lib/models/Board";
import {
	GameSessionModel,
	GameSessionTimestampsModel,
} from "@/lib/models/GameSession";
import { cn, formatTimer, getContext, getTotalTime } from "@/utils/helper";
import Image from "next/image";
import { useRouter } from "next/router";
import {
	Dispatch,
	MouseEventHandler,
	SetStateAction,
	createContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ClientBoardItem = Omit<BoardItemModel, "coordinates">;

const BoardContext = createContext<{
	coordinates?: Coordinates | null;
	setCoordinates: Dispatch<SetStateAction<Coordinates | null>>;
	items: ClientBoardItem[];
	session: GameSessionModel;
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
} | null>(null);

const TIMER_INTERVAL = 25;

export function GameBoard({
	board,
	session,
}: {
	board: BoardModel;
	session: GameSessionModel;
}) {
	const [clickCoordinates, setCoordinates] = useState<Coordinates | null>(null);
	const [loading, setLoading] = useState(false);
	const boardRef = useRef<HTMLDivElement | null>(null);

	const getCoordinates: MouseEventHandler<HTMLImageElement> =
		function getCoordinates(event) {
			const { top, left } = event.currentTarget.getBoundingClientRect();
			const { clientX, clientY } = event;
			setCoordinates({ x: clientX - left, y: clientY - top });
		};

	useEffect(() => {
		function outsideBoardClickHandler(e: globalThis.MouseEvent) {
			if ((e.target as HTMLDivElement).closest("#boardContainer") === null) {
				setCoordinates(null);
			}
		}
		function pauseGame() {
			pauseGameSession(session._id);
		}
		window.addEventListener("click", outsideBoardClickHandler);

		if (!session.time_finished)
			window.addEventListener("beforeunload", pauseGame);

		return () => {
			window.removeEventListener("click", outsideBoardClickHandler);
			window.removeEventListener("beforeunload", pauseGame);
		};
	}, [session.time_finished, session]);

	return (
		<div className="flex w-screen flex-col gap-2 overflow-hidden pb-2 pt-4">
			<div className="px-4">
				<GameBoardTimer
					timeFinished={session.time_finished}
					timestamps={session.timestamps}
				/>
			</div>
			<div
				className={cn(
					"max-w-screen flex items-center justify-center overflow-scroll text-slate-100",
					{ "cursor-pointer": !session.time_finished },
				)}
			>
				<BoardContext.Provider
					value={{
						coordinates: clickCoordinates,
						items: board.items,
						session,
						loading,
						setLoading,
						setCoordinates,
					}}
				>
					<div
						ref={boardRef}
						id="boardContainer"
						className="relative"
						onClick={getCoordinates}
					>
						{board.items.map(
							(item, index) =>
								item.pinpoint &&
								item.found && <BoardItemFoundPin item={item} key={index} />,
						)}
						{!session.time_finished && <BoardDropdown />}
						<Image
							draggable={false}
							src={board.image}
							alt={board.desc}
							className="max-w-none rounded-sm shadow-lg shadow-slate-900/50"
							style={{
								height: `${board.height}px`,
								width: `${board.width}px`,
							}}
							width={board.height}
							height={board.width}
							quality={100}
						/>
					</div>
				</BoardContext.Provider>
			</div>
		</div>
	);
}
export function GameBoardTimer({
	timeFinished,
	timestamps,
}: {
	timeFinished?: number | null;
	timestamps: GameSessionTimestampsModel[];
}) {
	const [timer, setTimer] = useState<number | null>(null);

	useEffect(() => {
		let interval: NodeJS.Timeout;
		console.log(timestamps);
		const total_time = getTotalTime(timestamps);
		setTimer(total_time);
		interval = setInterval(() => {
			if (!timeFinished) {
				const total_time = getTotalTime(timestamps);
				setTimer((prev) => (prev || total_time) + TIMER_INTERVAL);
			} else {
				setTimer(timeFinished);
				clearInterval(interval);
			}
		}, TIMER_INTERVAL);

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [timeFinished, timestamps]);

	return (
		<div className="w-fit rounded-md bg-slate-200 px-4 py-2 text-slate-700">
			{timer ? formatTimer(timer) : "..."}
		</div>
	);
}

export function BoardItemFoundPin({ item }: { item: ClientBoardItem }) {
	return (
		<div
			className="absolute flex items-center justify-center rounded-full bg-green-400/70"
			style={{
				top: `${item.pinpoint!.y - 12}px`,
				left: `${item.pinpoint!.x - 12}px`,
			}}
		>
			<svg
				className="h-6 w-6 text-white"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 24 24"
			>
				<path
					d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
					fill="currentColor"
				></path>
			</svg>
		</div>
	);
}

export function BoardDropdown() {
	let { coordinates: boardCoordinates, setCoordinates } =
		getContext(BoardContext);

	const is_valid = boardCoordinates !== null;

	return (
		<div
			className="absolute flex items-start gap-2"
			style={{
				pointerEvents: "auto",
				opacity: `${is_valid ? "1" : "0"}`,
				top: is_valid ? `${boardCoordinates!.y - BOARD_SELECT_SIZE / 2}px` : "",
				left: is_valid
					? `${boardCoordinates!.x - BOARD_SELECT_SIZE / 2}px`
					: "",
			}}
		>
			<div
				className="cursor-pointer rounded-full border-4 border-slate-50 ring ring-offset-2 ring-offset-slate-600"
				onClick={function (event) {
					event.stopPropagation();
					setCoordinates(null);
				}}
				style={{
					width: `${BOARD_SELECT_SIZE}px`,
					height: `${BOARD_SELECT_SIZE}px`,
				}}
			></div>
			<DropdownSelectList />
		</div>
	);
}

export function DropdownSelectList() {
	const { items } = getContext(BoardContext);
	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className="flex cursor-default select-none flex-col overflow-clip rounded-md bg-slate-600 text-center font-bold text-slate-50 shadow-lg"
		>
			<div className="px-2 py-1 text-left text-xs italic">Select:</div>
			{items.map((item, index) => (
				<DropdownSelectItem item={item} key={index} />
			))}
		</div>
	);
}

export function DropdownSelectItem({ item }: { item: ClientBoardItem }) {
	const { coordinates, setCoordinates, session, loading, setLoading } =
		getContext(BoardContext);
	const selectItem: MouseEventHandler<HTMLDivElement> =
		async function selectItem(event) {
			event.stopPropagation();
			if (!coordinates) return;
			setLoading(true);
			setCoordinates(null);

			const toast_options = { autoClose: 2000 };

			const { found, message } = await pinpointCoordinates(
				session._id,
				item._id!.toString(),
				coordinates,
			);
			if (!found) toast.error(message, toast_options);
			if (found) toast.success(message, toast_options);

			setLoading(false);
		};
	return (
		<div
			onClick={selectItem}
			className={cn("flex min-w-40 items-center px-4 py-1 ", {
				"pointer-events-none bg-green-600": item.found,
				"pointer-events-none": item.found || session.time_finished || loading,
				"cursor-pointer hover:bg-slate-500/50": !item.found,
			})}
		>
			<Image
				src={item.image}
				width={50}
				height={50}
				alt={item.name}
				className="h-10 w-10 rounded-full border-2 border-white text-xs"
			/>
			<div className="flex-grow">{item.name}</div>
		</div>
	);
}
