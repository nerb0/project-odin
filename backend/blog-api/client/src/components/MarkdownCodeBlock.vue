<script setup lang="ts">
import { TOAST_OPTIONS } from "@/constants";
import { cn } from "@/util";
import { useNodeViewContext } from "@prosemirror-adapter/vue";
import { POSITION, useToast } from "vue-toastification";

const { contentRef, selected, node } = useNodeViewContext();
const toast = useToast();
function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text);
	toast("Copied to clipboard.", {
		...TOAST_OPTIONS,
		timeout: 1500,
		position: POSITION.TOP_CENTER,
		toastClassName: "!bg-stone-400/80 !p-2 !h-auto !min-h-fit text-center",
		hideProgressBar: true,
		icon: false,
	});
}
</script>

<template>
	<div
		:class="
			cn(
				'not-prose relative my-2 rounded bg-gray-200 p-2 shadow dark:bg-stone-600',
				{
					'ProseMirror-selectednode': selected,
				},
			)
		"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 24 24"
			class="absolute right-2 top-2 h-8 w-8 cursor-pointer rounded-md bg-stone-500/50 p-2 transition-all hover:scale-105 hover:bg-stone-500"
			@click="
				(e) => {
					e.preventDefault();
					copyToClipboard(node.textContent);
				}
			"
		>
			<path
				d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
				fill="currentColor"
			></path>
		</svg>

		<pre spellCheck="false" :data-language="node.attrs.language" class="flex">
			<code :ref="contentRef"/>
		</pre>
	</div>
</template>
