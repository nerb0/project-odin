import { Coordinates } from "@/lib/models/Board";
import clsx, { ClassValue } from "clsx";
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
	console.log(timer);
	let milliseconds = timer % 1000;
	let seconds = Math.floor(timer / 1000);
	let minutes = Math.floor(seconds / 60);
	let hours = Math.floor(minutes / 60);

	seconds = seconds % 60;
	minutes = minutes % 60;

	let result = "";
	result += hours > 0 ? (hours > 9 ? `${hours}:` : `0${hours}:`) : "00:";
	result +=
		minutes > 0 ? (minutes > 9 ? `${minutes}:` : `0${minutes}:`) : "00:";
	result +=
		seconds > 0 ? (seconds > 9 ? `${seconds}.` : `0${seconds}.`) : "00.";
	result +=
		milliseconds > 0
			? milliseconds > 9
				? milliseconds > 99
					? `${milliseconds}`.slice(0, 3)
					: `0${milliseconds}`.slice(0, 3)
				: `00${milliseconds}`.slice(0, 3)
			: "000";

	return result;
}
