"use client";
import { createGameSession } from "@/app/actions";
import { DocType } from "@/lib/db";
import { BoardSchema } from "@/lib/models/Board";
import { cn, getContext } from "@/utils/helper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { toast } from "react-toastify";

export type BoardModel = DocType<typeof BoardSchema> & { _id: string };
const MenuBoardContext = createContext<{
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
	selected: string | null;
	setSelected: Dispatch<SetStateAction<string | null>>;
} | null>(null);

export function MenuBoardList({ boards }: { boards: BoardModel[] }) {
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState<string | null>(null);

	return (
		<div className="flex gap-4">
			<MenuBoardContext.Provider
				value={{ loading, setLoading, selected, setSelected }}
			>
				{boards.map((board, index) => (
					<MenuBoardItem board={board} key={index} />
				))}
			</MenuBoardContext.Provider>
		</div>
	);
}

export function MenuBoardItem({ board }: { board: BoardModel }) {
	const router = useRouter();
	const [itemLoading, setItemLoading] = useState(false);
	const { loading, setLoading } = getContext(MenuBoardContext);

	async function createSession(board_id: string) {
		setItemLoading(true);
		setLoading(true);
		const { message, session_id } = await createGameSession(board_id);
		if (!session_id) {
			toast.error(message);
		} else {
			router.push(`/game/${session_id}`);
		}
	}

	return (
		<div
			className={cn(
				"flex cursor-pointer flex-col items-center overflow-clip rounded-md bg-slate-600 font-bold text-white transition-all hover:scale-105 hover:bg-slate-500",
				{ "pointer-events-none": loading },
			)}
		>
			<Image
				width={200}
				height={200}
				src={board.image}
				alt={board.name}
				className="h-52 w-72 object-cover"
			/>
			<span className="py-2 text-lg font-bold">{board.name}</span>
			<div className="pb-4" onClick={() => createSession(board._id)}>
				<div
					className={cn(
						"rounded-md px-4 py-1 transition-all hover:scale-105",
						{ "animate-pulse": itemLoading },
						{ "bg-slate-300 text-slate-600": loading },
						{ "bg-slate-200 text-slate-700": !loading },
					)}
				>
					{itemLoading ? "Loading..." : "Select"}
				</div>
			</div>
		</div>
	);
}
