import { RequestHandler } from "express";
import { RouteParameters } from "express-serve-static-core"
import { ParsedQs } from "qs";

export { };

declare global {
	type RouterHandler<Path extends string = ""> = RequestHandler<
		RouteParameters<Path>,
		any,
		any,
		ParsedQs,
		Record<string, any>
	>;
}
