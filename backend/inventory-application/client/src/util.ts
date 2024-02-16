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

export function getAllBlogPosts(callback: FetchCallbackHandler<BlogPost[]>) {
	new Promise((resolve) => setTimeout(resolve, 1500)).then(() =>
		fetch(`${import.meta.env.VITE_SERVER_API_URL}/posts`, {
			credentials: "include",
		})
			.then((res) =>
				res
					.json()
					.then(({ data }) => callback(null, data))
					.catch((err) => callback(err, null)),
			)
			.catch((err) => callback(err, null)),
	);
}

export function getBlogPost(
	id: string,
	callback: FetchCallbackHandler<BlogPost>,
) {
	new Promise((resolve) => setTimeout(resolve, 1500)).then(() => {
		fetch(`${import.meta.env.VITE_SERVER_API_URL}/post/${id}`)
			.then((res) =>
				res
					.json()
					.then(({ data }) => callback(null, data))
					.catch((err) => callback(err, null)),
			)
			.catch((err) => callback(err, null));
	});
}

export function postIsLong(content: string) {
	return content.length >= 750 || content.split("\n").length > 7;
}
