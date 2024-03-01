"use server";

import { BOARD_SELECT_SIZE } from "@/lib/constants";
import dbConnect from "@/lib/db";
import Board, { Coordinates } from "@/lib/models/Board";
import GameSession from "@/lib/models/GameSession";
import { calculateDistance } from "@/utils/helper";
import { PipelineStage, mongo } from "mongoose";
import { revalidatePath } from "next/cache";
import { pages } from "next/dist/build/templates/app-page";

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

	session.board.items[session.board.items.indexOf(item)].pinpoint = pinpoint;
	session.board.items[session.board.items.indexOf(item)].found =
		calculateDistance(pinpoint, item.coordinates) <= BOARD_SELECT_SIZE;

	await session.save();

	if (!session.board.items[session.board.items.indexOf(item)].found) {
		return {
			message: `${item.name} cannot be found in that area.`,
			status: "fail",
			found: false,
		};
	}

	const is_finished = session.board.items.every(
		(item) =>
			calculateDistance(pinpoint, item.coordinates) <= BOARD_SELECT_SIZE,
	);

	if (is_finished) {
		session.time_finished = new Date();
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

	const session = await GameSession.create({
		board,
	});

	return {
		session_id: session.id,
		message: "Session created",
		status: "success",
	};
}

export async function getAllLeaderboards({
	lastId,
	boardId,
}: {
	boardId?: string;
	lastId?: string;
}) {
	await dbConnect();
	try {
		let filter: any = {
			time_finished: { $ne: null },
		};
		if (boardId) {
			const board = await Board.findById(boardId);
			if (!board) {
				return { message: "Unable to find board", status: "error" };
			}
			filter.board = { _id: board.id };
		}

		let page_filter: PipelineStage[] = [{ $limit: 10 }];
		if (lastId) {
			const parsed_id = new mongo.ObjectId(lastId);
			page_filter.unshift({ $match: { _id: { $lt: parsed_id } } });
		}

		const sessions = await GameSession.aggregate([
			{ $match: filter },
			{
				$lookup: {
					from: "users",
					localField: "user._id",
					foreignField: "_id",
					as: "user_info",
				},
			},
			{
				$project: {
					user_info: 1,
					total_time: {
						$dateDiff: {
							startDate: "$createdAt",
							endDate: "$time_finished",
							unit: "millisecond",
						},
					},
				},
			},
			{ $sort: { total_time: -1 } },
			...page_filter,
		]);
		return {
			sessions,
			status: "success",
			message: "Scores fetched successfully.",
		};
	} catch (error) {
		console.log(error);
		return { message: "Unable to find game sessions", status: "error" };
	}
}
