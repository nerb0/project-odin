"use client";
import Link from "next/link";
import { BoardModel } from "./GameBoard";
import { Leaderboard } from "./Leaderboard";
import { MouseEventHandler, createContext, useState } from "react";

export const LeaderboardContext = createContext<{
	showLeaderBoard: boolean;
	setShowLeaderBoard: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);
export function Header({ board }: { board?: BoardModel }) {
	const [showLeaderBoard, setShowLeaderBoard] = useState(false);
	const getLeaderBoard: MouseEventHandler = function getLeaderBoard() {
		if (!board) return;
		setShowLeaderBoard(true);
	};

	return (
		<>
			<nav className="bg-slate-800/70 flex justify-between items-center">
				<Link
					href="/"
					className="px-6 py-4 rounded-md shadow-md font-bold hover:scale-105 transition-all"
				>
					Where&apos;s Waldo
				</Link>
				{board && (
					<>
						<div className="font-bold text-xl">{board.name}</div>
						<div className="flex items-center gap-2 px-4 py-2 select-none hover:scale-105 transition-all cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 24 24"
								className="h-6 w-6 fill-slate-50"
							>
								<g fill="none">
									<path
										d="M15.254 2a2.25 2.25 0 0 1 2.236 2h1.268a1.75 1.75 0 0 1 1.744 1.606l.006.144v3a3.25 3.25 0 0 1-3.066 3.245l-.21.006a5.758 5.758 0 0 1-4.731 3.95V17.5h1.753a3.25 3.25 0 0 1 3.244 3.066l.006.184v.5a.75.75 0 0 1-.649.743l-.101.007H6.75a.75.75 0 0 1-.744-.648l-.006-.102v-.5a3.25 3.25 0 0 1 3.065-3.245l.185-.005H11v-1.549a5.758 5.758 0 0 1-4.729-3.95L6.246 12a3.25 3.25 0 0 1-3.25-3.25v-3c0-.966.784-1.75 1.75-1.75h1.268a2.25 2.25 0 0 1 2.237-2h7.003zm3.504 3.5h-1.254v4.983A1.75 1.75 0 0 0 19 8.904l.007-.154v-3a.25.25 0 0 0-.193-.243l-.057-.007zM6 5.5H4.746a.25.25 0 0 0-.25.25v3a1.75 1.75 0 0 0 1.505 1.733V5.5z"
										fill="currentColor"
									></path>
								</g>
							</svg>
							<div onClick={getLeaderBoard}>Leaderboards</div>
						</div>
					</>
				)}
			</nav>
			{board && showLeaderBoard && (
				<LeaderboardContext.Provider
					value={{ showLeaderBoard, setShowLeaderBoard }}
				>
					<Leaderboard board={board} />
				</LeaderboardContext.Provider>
			)}
		</>
	);
}
