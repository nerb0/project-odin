import { type RequestHandler } from "express";
import QueryString from "qs";

export {};

declare global {
	type APIResponse<T> =
		| {
				status: "ok";
				data: T;
		  }
		| {
				status: "error";
				error: string;
		  };

	type BoardMessage = {
		message: string;
		user: string;
	};

	type RouterHandler = RequestHandler<{}, any, any, QueryString.ParsedQs, Record<string, any>>;
}
