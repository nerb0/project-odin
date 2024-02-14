<script setup lang="ts">
import { Milkdown, useEditor } from "@milkdown/vue";
import {
	Editor,
	defaultValueCtx,
	editorViewOptionsCtx,
	rootCtx,
} from "@milkdown/core";
import { emoji } from "@milkdown/plugin-emoji";
import { commonmark } from "@milkdown/preset-commonmark";
import { nord } from "@milkdown/theme-nord";
import { gfm } from "@milkdown/preset-gfm";

const { content } = defineProps<{ content: string }>();

useEditor((root) => {
	return Editor.make()
		.config(nord)
		.config((ctx) => {
			ctx.set(rootCtx, root);
			ctx.set(defaultValueCtx, content);
			ctx.update(editorViewOptionsCtx, (prev) => ({
				...prev,
				editable: () => false,
			}));
		})
		.use(emoji)
		.use(commonmark)
		.use(gfm);
});
</script>

<template>
	<Milkdown />
</template>
