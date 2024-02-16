import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { POSITION } from "vue-toastification";
import { ToastOptions } from "vue-toastification/dist/types/types";

export function cn(...className: ClassValue[]) {
	return twMerge(clsx(...className));
}

export function authenticateUser(
	cb: FetchCallbackHandler<{ authenticated: boolean }>,
) {
	fetch(`${import.meta.env.VITE_SERVER_API_URL}/auth/verify`, {
		method: "POST",
		credentials: "include",
	})
		.then((res) =>
			res
				.json()
				.then((result) => cb(null, result))
				.catch((err) => cb(err, null)),
		)
		.catch((err) => cb(err, null));
}

export function getAllBlogPosts(
	cb: FetchCallbackHandler<{ posts: BlogPost[] }>,
) {
	new Promise((resolve) => setTimeout(resolve, 1500)).then(() =>
		fetch(`${import.meta.env.VITE_SERVER_API_URL}/posts`, {
			credentials: "include",
		})
			.then((res) =>
				res
					.json()
					.then((result) => cb(null, result))
					.catch((err) => cb(err, null)),
			)
			.catch((err) => cb(err, null)),
	);
}

export function getBlogPost(
	id: string,
	cb: FetchCallbackHandler<{ post: BlogPost }>,
) {
	new Promise((resolve) => setTimeout(resolve, 1500)).then(() => {
		fetch(`${import.meta.env.VITE_SERVER_API_URL}/post/${id}`)
			.then((res) =>
				res
					.json()
					.then((result) => cb(null, result))
					.catch((err) => cb(err, null)),
			)
			.catch((err) => cb(err, null));
	});
}

export function postIsLong(content: string) {
	return content.length >= 750 || content.split("\n").length > 7;
}

export const TOAST_OPTIONS: ToastOptions = {
	position: POSITION.TOP_CENTER,
	timeout: 5000,
	closeOnClick: true,
	pauseOnFocusLoss: true,
	pauseOnHover: true,
	draggable: false,
	draggablePercent: 0.6,
	showCloseButtonOnHover: false,
	hideProgressBar: true,
	closeButton: "button",
	icon: true,
	rtl: false,
};
