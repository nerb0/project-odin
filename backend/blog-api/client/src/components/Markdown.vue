<script setup lang="ts">
import { cn, setupMarkdown } from "@/util";
import {
	CmdKey,
	Editor,
	defaultValueCtx,
	editorStateCtx,
	editorViewCtx,
	schemaCtx,
} from "@milkdown/core";
import { Ctx } from "@milkdown/ctx";
import { clipboard } from "@milkdown/plugin-clipboard";
import { emoji } from "@milkdown/plugin-emoji";
import { history, undoCommand, redoCommand } from "@milkdown/plugin-history";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { prism } from "@milkdown/plugin-prism";
import {
	codeBlockSchema,
	commonmark,
	listItemSchema,
	toggleEmphasisCommand,
	toggleStrongCommand,
	wrapInBlockquoteCommand,
	wrapInBulletListCommand,
	wrapInOrderedListCommand,
} from "@milkdown/preset-commonmark";
import { gfm, toggleStrikethroughCommand } from "@milkdown/preset-gfm";
import { nord } from "@milkdown/theme-nord";
import { $view, callCommand, replaceAll } from "@milkdown/utils";
import { Milkdown, useEditor } from "@milkdown/vue";
import { useNodeViewFactory } from "@prosemirror-adapter/vue";
import "prism-themes/themes/prism-nord.css";
import { reactive, watch } from "vue";
import EditorCodeBlock from "./EditorCodeBlock.vue";
import EditorToolIcon from "./EditorToolIcon.vue";
import ListItem from "./ListItem.vue";
import MarkdownCodeBlock from "./MarkdownCodeBlock.vue";
import { selectionListener, selectionListenerCtx } from "./SelectionListener";

const {
	content,
	editable = true,
	setupHeading,
} = defineProps<{
	content?: string;
	editable?: boolean;
	setupHeading?: boolean;
}>();
const state = reactive({
	activeList: [] as string[],
	headingLevel: 0,
});
const nodeViewFactory = useNodeViewFactory();

function call<T>(key: CmdKey<T>) {
	return function () {
		const editor = editorReturn.get();
		if (!editor) return console.error("Unable to find markdown editor.");
		editor.action(callCommand(key));
		editor.action((ctx) => {
			ctx.get(editorViewCtx).focus();
		});
	};
}

function updateState(ctx: Ctx) {
	const list: string[] = [];
	const { doc, selection } = ctx.get(editorStateCtx);
	const schema = ctx.get(schemaCtx);
	const { from, to } = selection;
	const { parent } = doc.resolve(from);
	Object.keys(schema.marks).forEach((m) => {
		if (doc.rangeHasMark(from === to ? from - 1 : from, to, schema.marks[m]))
			list.push(schema.marks[m].name);
	});
	state.headingLevel = parent.attrs?.level || 0;
	state.activeList = list;
}

const editorReturn = useEditor((root) => {
	const plugins = [
		...emoji,
		...commonmark,
		...gfm,
		...prism,
		...history,
		clipboard,
		$view(listItemSchema.node, () => nodeViewFactory({ component: ListItem })),
	];
	if (editable) {
		plugins.unshift(
			selectionListener,
			listener,
			$view(codeBlockSchema.node, () =>
				nodeViewFactory({ component: EditorCodeBlock }),
			),
		);
	} else {
		plugins.unshift(
			$view(codeBlockSchema.node, () =>
				nodeViewFactory({ component: MarkdownCodeBlock }),
			),
		);
	}

	let editor = Editor.make()
		.config(nord)
		.config((ctx) => {
			ctx.update(defaultValueCtx, (prev) => content || prev);
			setupMarkdown(
				ctx,
				root,
				(prev) => ({
					...prev,
					editable: () => editable,
					attributes: {
						class: cn(
							"p-2 pb-6 outline-none",
							// @ts-ignore
							prev.attributes("class").class,
						),
						spellcheck: "false",
					},
				}),
				setupHeading,
			);
			if (editable) {
				const editorSelectionListener = ctx.get(selectionListenerCtx);
				const editorListener = ctx.get(listenerCtx);
				editorSelectionListener.selection(updateState);
				editorListener.focus(updateState);
			}
		})
		.use(plugins);

	return editor;
});

watch(
	() => content,
	(curr) => {
		editorReturn.get()?.action(replaceAll(curr || ""));
	},
	{ immediate: true },
);

defineExpose({ editorReturn, state });
</script>
<template>
	<Milkdown />
	<div
		class="flex select-none items-center font-bold dark:bg-stone-600"
		v-if="editable"
	>
		<EditorToolIcon title="Undo" :onClick="call(undoCommand.key)">
			<path
				d="M9 13L5 9l4-4M5 9h11a4 4 0 0 1 0 8h-1"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
		</EditorToolIcon>
		<EditorToolIcon title="Redo" :onClick="call(redoCommand.key)">
			<path
				d="M15 13l4-4l-4-4m4 4H8a4 4 0 0 0 0 8h1"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
		</EditorToolIcon>
		<EditorToolIcon
			title="Bold"
			:class="{
				'is-active': state.activeList.includes('strong'),
			}"
			:onClick="call(toggleStrongCommand.key)"
		>
			<path
				d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
				fill="currentColor"
			></path>
		</EditorToolIcon>
		<EditorToolIcon
			title="Italic"
			:class="{
				'is-active': state.activeList.includes('emphasis'),
			}"
			:onClick="call(toggleEmphasisCommand.key)"
		>
			<path
				d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"
				fill="currentColor"
			></path>
		</EditorToolIcon>
		<EditorToolIcon
			title="Strike-through"
			:class="{
				'is-active': state.activeList.includes('strike_through'),
			}"
			:onClick="call(toggleStrikethroughCommand.key)"
		>
			<path
				d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"
				fill="currentColor"
			></path>
		</EditorToolIcon>
		<EditorToolIcon
			title="Bullet List"
			:onClick="call(wrapInBulletListCommand.key)"
		>
			<path
				d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5S5.5 6.83 5.5 6S4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5s1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5zM8 19h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zm0-6h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1zM7 6c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1z"
				fill="currentColor"
			></path>
		</EditorToolIcon>
		<EditorToolIcon
			title="Ordered List"
			:onClick="call(wrapInOrderedListCommand.key)"
		>
			<path
				d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"
				fill="currentColor"
			></path>
		</EditorToolIcon>
		<EditorToolIcon
			title="Blockquote"
			:onClick="call(wrapInBlockquoteCommand.key)"
		>
			<path
				d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94zm10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94z"
				fill="currentColor"
			></path>
		</EditorToolIcon>
	</div>
</template>
