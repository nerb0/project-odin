"use client";
import { pinpointCoordinates } from "@/app/actions";
import { BOARD_SELECT_SIZE } from "@/lib/constants";
import { DocType } from "@/lib/db";
import { BoardSchema, Coordinates } from "@/lib/models/Board";
import { GameSessionSchema } from "@/lib/models/GameSession";
import { cn, formatTimer, getContext } from "@/utils/helper";
import { differenceInMilliseconds } from "date-fns";
import { Require_id } from "mongoose";
import Image from "next/image";
import {
	Dispatch,
	MouseEventHandler,
	SetStateAction,
	createContext,
	useEffect,
	useState,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type BoardModel = Omit<
	DocType<typeof BoardSchema> & { _id: string },
	"coordinates"
>;
export type GameSessionModel = DocType<typeof GameSessionSchema> & {
	_id: string;
};

const BoardContext = createContext<{
	coordinates?: Coordinates | null;
	setCoordinates: Dispatch<SetStateAction<Coordinates | null>>;
	items: BoardModel["items"];
	session: GameSessionModel;
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
	const [timer, setTimer] = useState<number>(
		session.time_finished
			? differenceInMilliseconds(session.time_finished, session.createdAt)
			: differenceInMilliseconds(new Date(), session.createdAt),
	);

	const getCoordinates: MouseEventHandler<HTMLImageElement> =
		function getCoordinates(event) {
			const { top, left } = event.currentTarget.getBoundingClientRect();
			const { clientX, clientY } = event;
			setCoordinates({ x: clientX - left, y: clientY - top });
		};
	useEffect(() => {
		const interval = setInterval(() => {
			if (!session.time_finished) {
				setTimer((prev) => prev + TIMER_INTERVAL);
			} else {
				setTimer(
					differenceInMilliseconds(session.time_finished, session.createdAt),
				);
				clearInterval(interval);
			}
		}, TIMER_INTERVAL);

		return () => {
			clearInterval(interval);
		};
	});

	return (
		<div className="flex flex-col gap-2">
			<div>{formatTimer(timer)}</div>
			<div
				className={cn("relative text-slate-100", {
					"cursor-pointer": !session.time_finished,
				})}
				onClick={getCoordinates}
			>
				<BoardContext.Provider
					value={{
						coordinates: clickCoordinates,
						setCoordinates,
						items: board.items,
						session,
					}}
				>
					{board.items.map(
						(item, index) =>
							item.pinpoint &&
							item.found && <BoardDropdown item={item} key={index} />,
					)}
					{!session.time_finished && <BoardDropdown />}
					<Image
						draggable={false}
						src={board.image}
						alt={board.desc}
						className="w-auto h-auto rounded-sm shadow-lg shadow-slate-900/50"
						width={board.height}
						height={board.width}
						quality={100}
					/>
				</BoardContext.Provider>
			</div>
		</div>
	);
}

export function BoardDropdown({ item }: { item?: BoardItem }) {
	const [dropdownVisible, setDropdownVisible] = useState(!item);

	let { coordinates: boardCoordinates, setCoordinates } =
		getContext(BoardContext);

	if (item) boardCoordinates = item.pinpoint;

	const is_valid = boardCoordinates !== null;

	return (
		<div
			className="absolute flex gap-2 items-start"
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
				className={cn(
					"border-4 rounded-full cursor-default ring ring-offset-2",
					{
						"cursor-pointer": !!item,
						"ring-offset-emerald-400 border-green-500": item?.found,
						"ring-offset-slate-600 border-slate-50": !item?.found,
					},
				)}
				onClick={function (event) {
					event.stopPropagation();
					if (item) {
						setDropdownVisible(!dropdownVisible);
					} else {
						setCoordinates(null);
					}
				}}
				style={{
					width: `${BOARD_SELECT_SIZE}px`,
					height: `${BOARD_SELECT_SIZE}px`,
				}}
			></div>
			<DropdownSelectList visible={dropdownVisible} />
		</div>
	);
}

export function DropdownSelectList({ visible = true }: { visible?: boolean }) {
	const { items } = getContext(BoardContext);
	if (!visible) return <></>;
	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className="bg-slate-600 rounded-md shadow-lg text-slate-50 font-bold flex flex-col text-center cursor-default overflow-clip select-none"
		>
			<div className="text-xs italic text-left px-2 py-1">Select:</div>
			{items.map((item, index) => (
				<DropdownSelectItem item={item} key={index} />
			))}
		</div>
	);
}

type BoardItem = BoardModel["items"][0];

export function DropdownSelectItem({
	item,
	selectedItem,
}: {
	item: BoardItem;
	selectedItem?: BoardItem;
}) {
	const { coordinates, setCoordinates, session } = getContext(BoardContext);
	const selectItem: MouseEventHandler<HTMLDivElement> =
		async function selectItem(event) {
			event.stopPropagation();
			if (selectedItem) return;
			if (!coordinates) return;

			const toast_options = { autoClose: 2000 };

			const { found, message } = await pinpointCoordinates(
				session._id,
				item._id!.toString(),
				coordinates,
			);
			if (!found) toast.error(message, toast_options);
			if (found) toast.success(message, toast_options);

			setCoordinates(null);
		};
	return (
		<div
			onClick={selectItem}
			className={cn("px-4 py-1 min-w-40 flex items-center", {
				"bg-green-600 pointer-events-none": item.found,
				"pointer-events-none": item.found || session.time_finished,
				"hover:bg-slate-500/50 cursor-pointer": !item.found,
			})}
		>
			<div>{item.name}</div>
		</div>
	);
}
