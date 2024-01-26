import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/** @param className {import('clsx').ClassValue}*/
export function cn(className) {
	return twMerge(clsx(className));
}
