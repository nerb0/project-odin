/// <reference types="@kitajs/html/htmx.d.ts" />

import type { Component, PropsWithChildren } from "@kitajs/html";
import { User } from "~/models/User";

export {};

declare global {
	type DBUser = InstanceType<typeof User>;
	type PageComponent<T = {}> = Component<
		PropsWithChildren<T & { user?: DBUser }>
	>;

	namespace Express {
		interface User extends DBUser {}
		interface Request {
			is_htmx: boolean;
		}
	}
}
