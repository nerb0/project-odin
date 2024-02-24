<script setup lang="ts">
import MarkdownProvider from "./MarkdownProvider.vue";
import Markdown from "./Markdown.vue";
import { ref } from "vue";

const { authenticated } = defineProps({ authenticated: Boolean });
const markdownRef = ref<InstanceType<typeof Markdown>>();

defineExpose({ markdownRef });
</script>
<template>
	<form class="flex flex-col gap-2">
		<input
			v-if="!authenticated"
			type="text"
			name="author"
			placeholder="Your name(optional)..."
			class="rounded-md bg-stone-700 px-2 py-1 outline-none placeholder:text-stone-500"
			autocomplete="off"
		/>
		<div class="overflow-clip rounded-md bg-stone-700">
			<MarkdownProvider>
				<Markdown ref="markdownRef" :editable="true" :setup-heading="false" />
			</MarkdownProvider>
		</div>
		<div class="flex h-10 items-end justify-end">
			<button
				type="submit"
				class="rounded-md border-b-2 border-amber-800 bg-amber-600 px-4 py-1 transition-all hover:border-b-4 hover:bg-amber-500/90"
			>
				Create Comment
			</button>
		</div>
	</form>
</template>
