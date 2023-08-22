import clsx, { ClassValue } from "clsx";
import { addMonths, endOfMonth, format, startOfMonth, subMonths, subYears } from "date-fns";
import { twMerge } from "tailwind-merge";

const RAWG_API_URL = "https://api.rawg.io/api";
const RAWG_API_KEY = "c4c14a52cc924205a31576e9e439ed29";
const RAWG_DATE_FORMAT = "yyyy-MM-dd"

export async function getGenres() {
	return await fetch(`${RAWG_API_URL}/genres?key=${RAWG_API_KEY}`)
}

export async function getPlatforms() {
	return await fetch(
		`${RAWG_API_URL}/platforms/parents?key=${RAWG_API_KEY}`
	);
}

export async function getAllGameList() {
	const result = await fetch(`${RAWG_API_URL}/games?key=${RAWG_API_KEY}`);
	return (await result.json()) as RawgGameResponse;
}

export async function getYearlyGames() {
	const current = new Date();
	const start = format(subYears(current, 1), RAWG_DATE_FORMAT);
	const end = format(current, RAWG_DATE_FORMAT);
	const result = await fetch(`${RAWG_API_URL}/games?key=${RAWG_API_KEY}&dates=${start},${end}&ordering=-added`);
	return (await result.json()) as RawgGameResponse;
}

export async function getMonthlyGames() {
	const current = new Date();
	const start = format(subMonths(current, 1), RAWG_DATE_FORMAT);
	const end = format(current, RAWG_DATE_FORMAT);
	const result = await fetch(`${RAWG_API_URL}/games?key=${RAWG_API_KEY}&dates=${start},${end}&ordering=-added`);
	return (await result.json()) as RawgGameResponse;
}

export async function getTrendingGameList() {
	const yearRange = `
		${format(subMonths(new Date(), 2), RAWG_DATE_FORMAT)},
		${format(addMonths(new Date(), 12), RAWG_DATE_FORMAT)}
	`;
	const result = await fetch(
		`${RAWG_API_URL}/games?key=${RAWG_API_KEY}&dates=${yearRange}&ordering=-added,released`
	);
	return (await result.json()) as RawgGameResponse;
}

export function cn(...classes: ClassValue[]) {
	return twMerge(clsx(...classes));
}

export function formatGameList(games: RawgGame[]) {
	return games.reduce(
		(acc, curr, index) => {
			acc[index % 4].push(curr);
			return acc;
		},
		[[], [], [], []] as RawgGame[][]
	);
}
