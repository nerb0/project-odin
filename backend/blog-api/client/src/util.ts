import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { POSITION, TYPE } from "vue-toastification";
import { ToastOptions } from "vue-toastification/dist/types/types";

export function cn(...className: ClassValue[]) {
	return twMerge(clsx(...className));
}

export async function httpRequest<T = {}>(
	link: string,
	request_init?: RequestInit,
) {
	return fetch(`${import.meta.env.VITE_SERVER_API_URL}${link}`, {
		credentials: "include",
		...request_init,
	}).then(async (res) => {
		const resStatus = res.status;
		const response = (await res.json()) as {
			data?: T;
			message: string;
			status: "ok" | "fail";
		};
		return {
			resStatus,
			...response,
		};
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
	pauseOnHover: false,
	draggable: false,
	showCloseButtonOnHover: false,
	hideProgressBar: false,
	closeButton: "button",
	icon: true,
	rtl: false,
};

export const TOAST_SUCCESS_OPTIONS: ToastOptions = {
	...TOAST_OPTIONS,
	type: TYPE.SUCCESS,
};
export const TOAST_ERROR_OPTIONS: ToastOptions = {
	...TOAST_OPTIONS,
	type: TYPE.ERROR,
};
