import { Coordinates } from "@/lib/models/Board";
import { GameSessionTimestampSchema } from "@/lib/models/GameSession";
import clsx, { ClassValue } from "clsx";
import { differenceInMilliseconds } from "date-fns";
import { InferSchemaType } from "mongoose";
import { Context, useContext } from "react";
import { twMerge } from "tailwind-merge";

export function calculateDistance(
	pinpoint: Coordinates,
	coordinates: Coordinates,
) {
	return Math.sqrt(
		Math.pow(pinpoint.x - coordinates.x, 2) +
			Math.pow(pinpoint.y - coordinates.y, 2),
	);
}

export function cn(...classValues: ClassValue[]) {
	return twMerge(clsx(...classValues));
}

export function getContext<T>(context: Context<T>) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const contextValue = useContext(context);
	if (!contextValue) {
		throw new Error(`Component must be used inside ${context}`);
	}
	return contextValue;
}

export function formatTimer(timer: number) {
	let milliseconds = timer % 1000;
	let seconds = Math.floor(timer / 1000);
	let minutes = Math.floor(seconds / 60);
	let hours = Math.floor(minutes / 60);

	seconds = seconds % 60;
	minutes = minutes % 60;

	let result = "";
	if (hours != 0) result += `${hours} hours and `;

	if (minutes != 0) result += `${minutes} minutes and `;

	result += `${seconds}.`;
	result +=
		milliseconds > 0
			? milliseconds > 9
				? milliseconds > 99
					? `${milliseconds}`.slice(0, 3)
					: `0${milliseconds}`.slice(0, 3)
				: `00${milliseconds}`.slice(0, 3)
			: "000";

	return `${result} seconds`;
}

export function getTotalTime(
	timestamps: InferSchemaType<typeof GameSessionTimestampSchema>[],
) {
	let total_time = timestamps.reduce((total, { time_start, time_paused }) => {
		if (!time_paused || !time_start) return total;
		return total + differenceInMilliseconds(time_paused, time_start);
	}, 0);
	const last_timestamp = timestamps[timestamps.length - 1];

	if (last_timestamp && !last_timestamp.time_paused)
		total_time += differenceInMilliseconds(
			Date.now(),
			last_timestamp.time_start!,
		);
	return total_time;
}
