import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/** @param className {import('clsx').ClassValue[]}*/
export function cn(...className) {
	return twMerge(clsx(...className));
}

export function get_request_field(req, field_name) {
	if (req.params[field_name] !== undefined) return req.params[field_name];
	if (req.body[field_name] !== undefined) return req.body[field_name];
	if (req.query[field_name] !== undefined) return req.query[field_name];
	else return undefined;
}
