<template>
	<Milkdown />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Editor, rootCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { Milkdown, useEditor } from "@milkdown/vue";
import { commonmark } from "@milkdown/preset-commonmark";

export default defineComponent({
	name: "Milkdown",
	components: {
		Milkdown,
	},
	setup: () => {
		useEditor((root) =>
			Editor.make()
				.config((ctx) => {
					ctx.set(rootCtx, root);
				})
				.config(nord)
				.use(commonmark),
		);
	},
});
</script>
