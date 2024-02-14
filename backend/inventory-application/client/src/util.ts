import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...className: ClassValue[]) {
	return twMerge(clsx(...className));
}

export function authenticateUser(cb: FetchCallbackHandler<boolean>) {
	fetch(`${import.meta.env.VITE_SERVER_API_URL}/auth/verify`, {
		method: "POST",
		credentials: "include",
	})
		.then((res) =>
			res
				.json()
				.then(({ data }) => cb(null, data.authenticated))
				.catch((err) => cb(err, null)),
		)
		.catch((err) => cb(err, null));
}
