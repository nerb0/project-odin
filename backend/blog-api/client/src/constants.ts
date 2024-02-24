import { emoji } from "@milkdown/plugin-emoji";
import { prism } from "@milkdown/plugin-prism";
import { commonmark } from "@milkdown/preset-commonmark";
import { gfm } from "@milkdown/preset-gfm";
import { clipboard } from "@milkdown/plugin-clipboard";
import { history } from "@milkdown/plugin-history";
import { POSITION, TYPE } from "vue-toastification";
import { ToastOptions } from "vue-toastification/dist/types/types";

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

export const EDITOR_LANGUAGES = [
	"text",
	"typescript",
	"tsx",
	"jsx",
	"go",
	"rust",
	"javascript",
	"html",
	"css",
	"json",
	"markdown",
];

export const MARKDOWN_PLUGINS = [
	...emoji,
	...commonmark,
	...gfm,
	...prism,
	...history,
	clipboard,
];
