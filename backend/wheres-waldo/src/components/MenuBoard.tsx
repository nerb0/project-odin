"use client";
import { createGameSession } from "@/app/actions";
import { DocType } from "@/lib/db";
import { BoardSchema } from "@/lib/models/Board";
import { cn, getContext } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { toast } from "react-toastify";

export type BoardModel = DocType<typeof BoardSchema> & { _id: string };
const MenuBoardContext = createContext<{
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export function MenuBoardList({ boards }: { boards: BoardModel[] }) {
	const [loading, setLoading] = useState(false);

	return (
		<MenuBoardContext.Provider value={{ loading, setLoading }}>
			{boards.map((board, index) => (
				<MenuBoardItem board={board} key={index} />
			))}
		</MenuBoardContext.Provider>
	);
}

export function MenuBoardItem({ board }: { board: BoardModel }) {
	const router = useRouter();
	const { loading, setLoading } = getContext(MenuBoardContext);

	async function createSession(board_id: string) {
		setLoading(true);
		const { message, session_id } = await createGameSession(board_id);
		if (!session_id) {
			toast.error(message);
		} else {
			router.push(`/game/${session_id}`);
		}
		setLoading(false);
	}

	return (
		<div
			onClick={() => createSession(board._id)}
			className={cn(
				"bg-slate-600 px-6 py-1 rounded-md text-white font-bold hover:scale-105 hover:bg-slate-500 transition-all flex items-center gap-2 cursor-pointer",
				{
					"pointer-events-none": loading,
				},
			)}
		>
			<span>{board.name}</span>
			{loading && <span className={cn("animate-pulse")}>Loading...</span>}
		</div>
	);
}
