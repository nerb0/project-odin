<script setup lang="ts">
import { EDITOR_LANGUAGES, TOAST_OPTIONS } from "@/constants";
import { cn } from "@/util";
import { useNodeViewContext } from "@prosemirror-adapter/vue";
import { POSITION, useToast } from "vue-toastification";

const { contentRef, selected, node, setAttrs } = useNodeViewContext();
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
			cn('not-prose my-2 rounded bg-gray-200 p-5 shadow dark:bg-stone-600', {
				'ProseMirror-selectednode': selected,
			})
		"
	>
		<div
			contentEditable="false"
			suppressContentEditableWarning
			class="flex justify-between pb-2"
		>
			<select
				class="cursor-pointer rounded border-2 border-stone-200/50 bg-white px-2 shadow-sm outline-none hover:border-stone-200/70 focus:border-stone-200 focus:shadow-none dark:bg-stone-700"
				:value="node.attrs.language || 'text'"
				@change="
					(e) => {
						setAttrs({ language: (e.target as HTMLSelectElement)?.value });
					}
				"
			>
				<option
					v-for="(lang, index) in EDITOR_LANGUAGES"
					:value="lang"
					:key="index"
				>
					{{ lang }}
				</option>
			</select>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 24 24"
				class="h-8 w-8 cursor-pointer rounded-md bg-stone-500/50 p-2 transition-all hover:scale-105 hover:bg-stone-500"
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
		</div>
		<pre spellCheck="false" class="flex">
			<code :ref="contentRef"/>
		</pre>
	</div>
</template>
