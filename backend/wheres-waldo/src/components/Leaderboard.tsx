"use client";
import { useEffect, useState } from "react";
import { BoardModel } from "./MenuBoard";
import { formatTimer, getContext } from "@/utils/helper";
import { LeaderboardContext } from "./Header";
import { LeaderboardItem, getAllLeaderboards } from "@/app/actions";

export function Leaderboard({ board }: { board: BoardModel }) {
	const { setShowLeaderBoard } = getContext(LeaderboardContext);
	const [page, setPage] = useState(1);
	const [error, setError] = useState<string | null>(null);
	const [scores, setScores] = useState<LeaderboardItem[] | null>(null);
	const [loading, setLoading] = useState(true);

	async function getLeaderboard() {
		setLoading(true);
		try {
			const { scores: fetchScores, message } = await getAllLeaderboards(
				board._id.toString(),
				page,
			);

			setLoading(false);
			if (!fetchScores) setError(message);
			else setScores(fetchScores);
		} catch (error) {}
	}

	useEffect(() => {
		getLeaderboard();
	}, []);

	return (
		<div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-900/70">
			<div className="relative flex flex-col gap-4 rounded-md bg-slate-700 p-4 shadow-md lg:w-[700px]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 24 24"
					className="absolute right-3 top-2 h-7 w-7 cursor-pointer rounded-xl p-[2px] text-xl font-bold text-red-300
						transition-all hover:scale-110 hover:rounded-md hover:bg-slate-500"
					onClick={() => setShowLeaderBoard(false)}
				>
					<path
						d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
						fill="currentColor"
					></path>
				</svg>
				<div className="text-center text-xl font-bold">
					<h1 className="flex-grow">{board.name}&apos;s Leaderboard</h1>
				</div>
				<div className="px-4 text-center">
					<LeaderboardScoreList
						scores={scores}
						loading={loading}
						error={error}
					/>
				</div>
			</div>
		</div>
	);
}

export function LeaderboardScoreList({
	scores,
	loading,
	error,
}: {
	scores: LeaderboardItem[] | null;
	loading: boolean;
	error: string | null;
}) {
	if (loading)
		return (
			<div className="animate-pulse text-center text-xl font-bold italic text-slate-500">
				Loading scores...
			</div>
		);

	if (error) return <div className="text-slate-600">{error}</div>;
	if (!scores) return <div>Unable to find scores for this game.</div>;
	if (scores.length === 0)
		return (
			<div className="text-slate-400">
				There is currently no scores submitted for this game yet.
			</div>
		);

	return (
		<div className="lg:h-[700px]">
			<div className="relative grid grid-cols-[auto_300px] overflow-scroll">
				<div className="sticky top-0 rounded-tl-md border-r border-r-slate-400 bg-slate-500 px-6 text-lg font-bold">
					User
				</div>
				<div className="sticky top-0 rounded-tr-md bg-slate-500 px-6 text-lg font-bold">
					Timer
				</div>
				{scores.map(({ name, time_finished }) => (
					<>
						<div className="border-r border-r-slate-400 bg-slate-500 px-2 text-left [&:nth-child(4n+3)]:bg-slate-600 [&:nth-last-child(2)]:rounded-bl-md">
							{name || "Guest"}
						</div>
						<div className="flex items-center justify-center bg-slate-500 px-2  text-sm last:rounded-br-md [&:nth-child(4n+4)]:bg-slate-600">
							{formatTimer(time_finished)}
						</div>
					</>
				))}
			</div>
		</div>
	);
}
