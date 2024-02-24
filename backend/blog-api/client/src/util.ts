import { editorViewOptionsCtx, rootCtx } from "@milkdown/core";
import { Ctx } from "@milkdown/ctx";
import { prismConfig } from "@milkdown/plugin-prism";
import { headingAttr } from "@milkdown/preset-commonmark";
import { EditorProps } from "@milkdown/prose/view";
import clsx, { ClassValue } from "clsx";
import css from "refractor/lang/css";
import go from "refractor/lang/go";
import javascript from "refractor/lang/javascript";
import json from "refractor/lang/json";
import jsx from "refractor/lang/jsx";
import markdown from "refractor/lang/markdown";
import rust from "refractor/lang/rust";
import tsx from "refractor/lang/tsx";
import typescript from "refractor/lang/typescript";
import { twMerge } from "tailwind-merge";

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

export function setupMarkdown(
	ctx: Ctx,
	root: HTMLDivElement,
	editorViewOptions: (prev: Partial<EditorProps>) => Partial<EditorProps>,
	setupHeading: boolean = true,
) {
	ctx.set(rootCtx, root);
	ctx.update(editorViewOptionsCtx, editorViewOptions);
	ctx.set(prismConfig.key, {
		configureRefractor: (refractor) => {
			refractor.register(javascript);
			refractor.register(typescript);
			refractor.register(jsx);
			refractor.register(tsx);
			refractor.register(markdown);
			refractor.register(json);
			refractor.register(css);
			refractor.register(go);
			refractor.register(rust);
		},
	});
	if (setupHeading) {
		console.log("test");
		ctx.set(headingAttr.key, (node) => {
			const level = node.attrs.level;
			switch (level) {
				case 1:
					return { class: "text-3xl font-bold", "data-el-type": "h1" };
				case 2:
					return { class: "text-2xl font-bold", "data-el-type": "h2" };
				case 3:
					return { class: "text-xl font-bold", "data-el-type": "h3" };
				default:
					return { class: "text-lg font-bold", "data-el-type": "h4" };
			}
		});
	} else {
		ctx.set(headingAttr.key, (_) => ({
			class: "text-lg font-bold",
			"data-el-type": "h4",
		}));
	}
}
