<style>
pre {
	@apply flex;
}
.milkdown > [role="textbox"] > p:only-child:has(br)::before {
	content: "Insert content here...";
	@apply pointer-events-none absolute select-none dark:text-stone-500;
}
.milkdown .emoji {
	@apply h-4 w-6 px-1;
}
code {
	@apply w-full rounded-md bg-stone-200 p-2 dark:bg-stone-600;
}
</style>

<script lang="ts">
import {
	CmdKey,
	Editor,
	editorStateCtx,
	editorViewCtx,
	editorViewOptionsCtx,
	rootCtx,
	schemaCtx,
} from "@milkdown/core";
import { emoji } from "@milkdown/plugin-emoji";
import { prism, prismConfig } from "@milkdown/plugin-prism";
import {
	commonmark,
	headingAttr,
	toggleEmphasisCommand,
	toggleInlineCodeCommand,
	toggleStrongCommand,
} from "@milkdown/preset-commonmark";
import { gfm, toggleStrikethroughCommand } from "@milkdown/preset-gfm";
import { nord } from "@milkdown/theme-nord";
import { Milkdown, useEditor } from "@milkdown/vue";
import { callCommand, getMarkdown, replaceAll } from "@milkdown/utils";
import { defineComponent, reactive } from "vue";

import css from "refractor/lang/css";
import go from "refractor/lang/go";
import javascript from "refractor/lang/javascript";
import jsx from "refractor/lang/jsx";
import markdown from "refractor/lang/markdown";
import rust from "refractor/lang/rust";
import tsx from "refractor/lang/tsx";
import typescript from "refractor/lang/typescript";
import "prism-themes/themes/prism-nord.css";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { selectionListenerCtx, selectionListener } from "./SelectionListener";
import { Ctx } from "@milkdown/ctx";
import EditorToolIcon from "./EditorToolIcon.vue";
import { POSITION, useToast } from "vue-toastification";
import { TOAST_OPTIONS } from "@/util";

function issueEditorCommand<T>(editor: Editor | undefined, key: CmdKey<T>) {
	if (!editor) return console.error("Unable to find markdown editor.");
	editor.action(callCommand(key));
	editor.action((ctx) => {
		ctx.get(editorViewCtx).focus();
	});
}

export default defineComponent({
	name: "Editor",
	components: { Milkdown, EditorToolIcon },
	methods: {
		submitPost(event: Event) {
			event.preventDefault();
			const editor = this.editorReturn.get();
			if (!editor) return console.error("Unable to find markdown editor.");

			const content = editor.action(getMarkdown());
			const form = event.target as HTMLFormElement;
			const formData = new FormData(form);
			this.loading = true;
			fetch(`${import.meta.env.VITE_SERVER_API_URL}/post`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					content,
					title: formData.get("title") || "",
				}),
				credentials: "include",
			})
				.then((res) =>
					res
						.json()
						.then(({ _, message }) => {
							this.loading = false;
							this.toast(message, TOAST_OPTIONS);
							const editor = this.editorReturn.get();
							editor?.action(replaceAll(""));
							form.reset();
						})
						.catch((err) => console.error(err)),
				)
				.catch((err) => console.error(err));
		},
		toggleBold(event: Event) {
			event.preventDefault();
			return issueEditorCommand(
				this.editorReturn.get(),
				toggleStrongCommand.key,
			);
		},
		toggleInlineCode(event: Event) {
			event.preventDefault();
			return issueEditorCommand(
				this.editorReturn.get(),
				toggleInlineCodeCommand.key,
			);
		},
		toggleStrikethrough(event: Event) {
			event.preventDefault();
			return issueEditorCommand(
				this.editorReturn.get(),
				toggleStrikethroughCommand.key,
			);
		},
		toggleItalic(event: Event) {
			event.preventDefault();
			return issueEditorCommand(
				this.editorReturn.get(),
				toggleEmphasisCommand.key,
			);
		},
	},
	props: {
		title: String,
		content: String,
	},
	data: () => ({
		loading: false,
	}),
	setup(props) {
		const toast = useToast();
		const state = reactive({
			activeList: [] as string[],
			headingLevel: 0,
		});

		function updateState(ctx: Ctx) {
			const list: string[] = [];
			const { doc, selection } = ctx.get(editorStateCtx);
			const schema = ctx.get(schemaCtx);
			const { from, to } = selection;
			const { parent } = doc.resolve(from);
			Object.keys(schema.marks).forEach((m) => {
				if (
					doc.rangeHasMark(from === to ? from - 1 : from, to, schema.marks[m])
				)
					list.push(schema.marks[m].name);
			});
			state.headingLevel = parent.attrs?.level || 0;
			state.activeList = list;
		}

		const editorReturn = useEditor((root) =>
			Editor.make()
				.config(nord)
				.config((ctx) => {
					ctx.set(rootCtx, root);
					ctx.update(editorViewOptionsCtx, (prev) => ({
						...prev,
						content: props.content || "",
						attributes: {
							class: "p-2 pb-6 outline-none",
							spellcheck: "false",
						},
					}));
					ctx.set(prismConfig.key, {
						configureRefractor: (refractor) => {
							refractor.register(markdown);
							refractor.register(css);
							refractor.register(javascript);
							refractor.register(typescript);
							refractor.register(jsx);
							refractor.register(tsx);
							refractor.register(go);
							refractor.register(rust);
						},
					});
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
					const editorSelectionListener = ctx.get(selectionListenerCtx);
					editorSelectionListener.selection((ctx) => {
						updateState(ctx);
					});

					const editorListener = ctx.get(listenerCtx);
					editorListener.focus((ctx) => {
						updateState(ctx);
					});
				})
				.use([
					selectionListener,
					listener,
					...prism,
					...emoji,
					...commonmark,
					...gfm,
				]),
		);
		return { editorReturn, state, toast };
	},
});
</script>

<template>
	<form
		class="relative flex flex-col"
		:onsubmit="submitPost"
		:aria-disabled="loading"
	>
		<div class="flex gap-2">
			<span class="w-[60px] pt-1 text-right text-xs">Title: </span>
			<input
				type="text"
				name="title"
				placeholder="Title"
				:disabled="loading"
				class="flex-grow rounded-md rounded-b-none border-2 px-2 py-1 font-bold outline-none placeholder:text-base placeholder:font-normal dark:border-stone-400 dark:bg-stone-700 dark:focus:border-stone-100"
				required
			/>
		</div>
		<div class="flex gap-2">
			<span class="w-[60px] pt-1 text-right text-xs">Content:</span>
			<div
				class="flex flex-grow flex-col overflow-clip rounded-md rounded-t-none border-2 dark:border-stone-400 dark:bg-stone-700 dark:focus-within:border-stone-100"
			>
				<Milkdown />
				<div class="flex select-none items-center font-bold dark:bg-stone-600">
					<EditorToolIcon
						:class="{ 'is-active': state.activeList.includes('strong') }"
						@click="toggleBold"
					>
						<path
							d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
							fill="currentColor"
						></path>
					</EditorToolIcon>
					<EditorToolIcon
						:class="{ 'is-active': state.activeList.includes('emphasis') }"
						@click="toggleItalic"
					>
						<path
							d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"
							fill="currentColor"
						></path>
					</EditorToolIcon>
					<EditorToolIcon
						:class="{ 'is-active': state.activeList.includes('inlineCode') }"
						@click="toggleInlineCode"
					>
						<path
							d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4z"
							fill="currentColor"
						></path>
					</EditorToolIcon>
					<EditorToolIcon
						:class="{
							'is-active': state.activeList.includes('strike_through'),
						}"
						@click="toggleStrikethrough"
					>
						<path
							d="M7.24 8.75c-.26-.48-.39-1.03-.39-1.67c0-.61.13-1.16.4-1.67c.26-.5.63-.93 1.11-1.29a5.73 5.73 0 0 1 1.7-.83c.66-.19 1.39-.29 2.18-.29c.81 0 1.54.11 2.21.34c.66.22 1.23.54 1.69.94c.47.4.83.88 1.08 1.43s.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85c-.09-.27-.24-.49-.44-.68c-.2-.19-.45-.33-.75-.44c-.3-.1-.66-.16-1.06-.16c-.39 0-.74.04-1.03.13s-.53.21-.72.36c-.19.16-.34.34-.44.55c-.1.21-.15.43-.15.66c0 .48.25.88.74 1.21c.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25zM21 12v-2H3v2h9.62c.18.07.4.14.55.2c.37.17.66.34.87.51s.35.36.43.57c.07.2.11.43.11.69c0 .23-.05.45-.14.66c-.09.2-.23.38-.42.53c-.19.15-.42.26-.71.35c-.29.08-.63.13-1.01.13c-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42c-.25-.19-.45-.44-.59-.75s-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58s.37.85.65 1.21c.28.35.6.66.98.92c.37.26.78.48 1.22.65c.44.17.9.3 1.38.39c.48.08.96.13 1.44.13c.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79c.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61c-.05-.11-.11-.23-.17-.33H21V12z"
							fill="currentColor"
						></path>
					</EditorToolIcon>
				</div>
			</div>
		</div>
		<div class="flex h-[56px] items-end self-end pt-2">
			<button
				class="rounded-md border-b-4 px-5 py-2 font-bold text-stone-900 transition-[border] hover:border-b-[6px] active:border-b-0 dark:border-orange-600 dark:bg-orange-400"
			>
				Submit
			</button>
		</div>
	</form>
</template>
