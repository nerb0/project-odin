"use server";

import dbConnect from "@/lib/db";
import Board, { BoardItemSchema, Coordinates } from "@/lib/models/Board";
import GameSession, {
	GameSessionModel,
	GameSessionSchema,
} from "@/lib/models/GameSession";
import { calculateDistance, getTotalTime } from "@/utils/helper";
import { InferSchemaType } from "mongoose";
import { revalidatePath } from "next/cache";

export type ResponseStatus = "success" | "fail" | "error";
export type Response<T> = T & {
	message: string;
	status: ResponseStatus;
};

export async function pinpointCoordinates(
	session_id: string,
	item_id: string,
	pinpoint: Coordinates,
): Promise<
	Response<{
		finished?: boolean;
		found?: boolean;
	}>
> {
	await dbConnect();
	const session = await GameSession.findById(session_id);
	if (!session) {
		return { message: "Game Session cannot be found.", status: "error" };
	}

	const item = session.board.items.find((item) => item.id === item_id);
	if (item === undefined) {
		return {
			message: `Item with id ${item_id} does not belong to current game.`,
			status: "error",
		};
	}

	if (session.time_finished) {
		return { message: "Game Session already finished.", status: "error" };
	}

	item.pinpoint = pinpoint;
	item.found = calculateDistance(pinpoint, item.coordinates) <= item.distance;

	await session.save();

	if (!session.board.items[session.board.items.indexOf(item)].found) {
		return {
			message: `${item.name} cannot be found in that area.`,
			status: "fail",
			found: false,
		};
	}

	const is_finished = session.board.items.every(({ found }) => found);
	if (is_finished) {
		session.time_finished = getTotalTime(session.timestamps);
		await session.save();
		revalidatePath("");
		return {
			finished: true,
			message: "Congratulations, you found all of them!",
			status: "success",
			found: true,
		};
	}

	revalidatePath("");

	return {
		message: `You found ${item.name}`,
		status: "success",
		found: true,
	};
}

export async function createGameSession(
	boardId: string,
): Promise<Response<{ session_id?: string }>> {
	await dbConnect();
	const board = await Board.findById(boardId);

	if (!board) {
		return { message: "", status: "error" };
	}
	let items: InferSchemaType<typeof BoardItemSchema>[] = [];
	for (let i = 0; i < 3; i++) {
		if (board.items.length === 0) break;

		const j = Math.floor(Math.random() * board.items.length);
		items.push(board.items[j]);
		board.items.splice(j, 1);
	}
	board.items = items as typeof board.items;

	const session = await GameSession.create({
		board,
	});

	return {
		session_id: session.id,
		message: "Session created",
		status: "success",
	};
}

export async function startGameSession(session_id: string) {
	await dbConnect();
	const session = await GameSession.findById(session_id);
	if (!session) return { message: "Session cannot be found.", status: "error" };

	const last_timestamp = session.timestamps[session.timestamps.length - 1];
	if (last_timestamp && !last_timestamp.time_paused)
		return {
			message:
				"Session has not been paused last session. Continuing last session.",
			status: "error",
		};

	try {
		session.timestamps.push({ time_start: new Date() });
		session.save();
		return {
			total_time: getTotalTime(session.timestamps),
			message: "Game Session started.",
			status: "success",
		};
	} catch (error) {
		return {
			message: "Unable to start session.",
			status: "error",
		};
	}
}

export async function pauseGameSession(session_id: string) {
	await dbConnect();
	const session = await GameSession.findById(session_id);
	if (!session) return { message: "Session cannot be found.", status: "error" };

	const last_timestamp = session.timestamps[session.timestamps.length - 1];
	if (!last_timestamp)
		return { message: "Session has no timestamps yet.", status: "error" };
	try {
		last_timestamp.time_paused = new Date();
		session.save();
		return {
			total_time: getTotalTime(session.timestamps),
			message: "Game Session paused.",
			status: "success",
		};
	} catch (error) {
		return {
			message: "Unable to pause session.",
			status: "error",
		};
	}
}

export type LeaderboardItem = {
	name?: string | null;
	time_finished: number;
};
export async function getAllLeaderboards(
	boardId: string,
	page: number,
): Promise<Response<{ scores?: LeaderboardItem[] }>> {
	try {
		await dbConnect();

		const board = await Board.findById(boardId);
		if (!board) {
			return { message: "Unable to find board", status: "error" };
		}

		const scores = await GameSession.find({ time_finished: { $ne: null } })
			.select({ time_finished: 1, name: 1 })
			.sort({ time_finished: 1 })
			.skip((page - 1) * 30)
			.limit(30);

		return {
			scores: scores as LeaderboardItem[],
			status: "success",
			message: "Scores fetched successfully.",
		};
	} catch (error) {
		console.log(error);
		return { message: "Unable to find game sessions", status: "error" };
	}
}
