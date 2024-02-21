<script setup lang="ts">
import { cn } from "@/util";
import {
	Editor,
	defaultValueCtx,
	editorViewOptionsCtx,
	rootCtx,
} from "@milkdown/core";
import { emoji } from "@milkdown/plugin-emoji";
import { prism, prismConfig } from "@milkdown/plugin-prism";
import { commonmark, headingAttr } from "@milkdown/preset-commonmark";
import { gfm } from "@milkdown/preset-gfm";
import { nord } from "@milkdown/theme-nord";
import { Milkdown, useEditor } from "@milkdown/vue";
import css from "refractor/lang/css";
import go from "refractor/lang/go";
import javascript from "refractor/lang/javascript";
import jsx from "refractor/lang/jsx";
import markdown from "refractor/lang/markdown";
import rust from "refractor/lang/rust";
import tsx from "refractor/lang/tsx";
import typescript from "refractor/lang/typescript";

const { content, editable = false } = defineProps<{
	content: string;
	editable?: boolean;
}>();

const editorReturn = useEditor((root) => {
	return Editor.make()
		.config(nord)
		.config((ctx) => {
			ctx.set(rootCtx, root);
			ctx.set(defaultValueCtx, content);
			ctx.update(editorViewOptionsCtx, (prev) => {
				return {
					...prev,
					editable: () => editable,
					attributes: {
						...prev.attributes,
						// @ts-ignore
						class: cn("p-2 pb-6 outline-none", prev.attributes("class").class),
						spellcheck: "false",
					},
				};
			});
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
		})
		.use([...emoji, ...commonmark, ...gfm, ...prism]);
});

defineExpose({
	editorReturn,
});
</script>

<template>
	<Milkdown />
</template>
