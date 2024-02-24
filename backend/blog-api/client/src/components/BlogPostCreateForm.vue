<script setup lang="ts">
import { TOAST_ERROR_OPTIONS, TOAST_OPTIONS } from "@/constants";
import { getMarkdown, replaceAll } from "@milkdown/utils";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import Markdown from "./Markdown.vue";
import MarkdownProvider from "./MarkdownProvider.vue";

const { addPost } = defineProps<{ addPost: (post: any) => void }>();
const toast = useToast();
const editorRef = ref<InstanceType<typeof Markdown>>();
const loading = ref(false);

async function submitPost(event: Event) {
	event.preventDefault();
	const editor = editorRef.value?.editorReturn.get();
	if (!editor) return console.error("Unable to find markdown editor.");

	const content = editor.action(getMarkdown());
	const form = event.target as HTMLFormElement;
	const formData = new FormData(form);
	loading.value = true;

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
				.then(({ data, message }) => {
					loading.value = false;
					toast(
						message,
						res.status === 200 ? TOAST_OPTIONS : TOAST_ERROR_OPTIONS,
					);
					if (data.post) {
						addPost(data.post);
						const editor = editorRef.value?.editorReturn.get();
						editor?.action(replaceAll(""));
						form.reset();
					}
				})
				.catch((err) => console.error(err)),
		)
		.catch((err) => console.error(err));
}
</script>
<template>
	<form class="relative flex flex-col" :onsubmit="submitPost">
		<input
			type="text"
			name="title"
			placeholder="Title"
			:disabled="loading"
			class="flex-grow rounded-md rounded-b-none border-2 px-2 py-1 font-bold outline-none placeholder:text-base placeholder:font-normal placeholder:text-stone-500 dark:border-stone-400 dark:bg-stone-700 dark:focus:border-stone-100"
			required
		/>
		<div
			class="flex flex-grow flex-col overflow-clip rounded-md rounded-t-none border-2 dark:border-stone-400 dark:bg-stone-700 dark:focus-within:border-stone-100"
		>
			<MarkdownProvider>
				<Markdown :editable="true" ref="editorRef" />
			</MarkdownProvider>
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
