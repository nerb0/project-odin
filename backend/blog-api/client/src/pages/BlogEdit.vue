<script setup lang="ts">
import Loader from "@/components/Loader.vue";
import Markdown from "@/components/Markdown.vue";
import MarkdownProvider from "@/components/MarkdownProvider.vue";
import { TOAST_ERROR_OPTIONS, TOAST_SUCCESS_OPTIONS } from "@/constants";
import { httpRequest } from "@/util";
import { getMarkdown } from "@milkdown/utils";
import { onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import Container from "./Container.vue";

const { authenticated } = defineProps<{
	authenticated: boolean;
}>();
const loading = ref(true);
const updateLoading = ref(false);
const post = ref(null as null | BlogPost);
const toast = useToast();
const abortController = new AbortController();
const route = useRoute();
const editorRef = ref<InstanceType<typeof Markdown> | null>(null);

onUnmounted(() => abortController.abort());

watch(
	() => ({ param: route.params, authenticated }),
	() => {
		const router = useRouter();
		if (authenticated) {
			if (route.params.id) fetchData();
		} else if (authenticated === false) {
			toast("User is not allowed to access the page.", TOAST_ERROR_OPTIONS);
			router.push("/admin");
		}
	},
	{ immediate: true },
);

async function fetchData() {
	if (typeof route.params.id === "object") {
		toast("Invalid parameter.", TOAST_ERROR_OPTIONS);
		return;
	}
	post.value = null;
	loading.value = true;
	try {
		const { data, message } = await httpRequest<{ post: BlogPost }>(
			`/post/${route.params.id}`,
			{ signal: abortController.signal },
		);
		if (data) {
			post.value = data.post;
		} else {
			toast(message, TOAST_ERROR_OPTIONS);
		}
	} catch (error) {
		toast((error as Error).message, TOAST_ERROR_OPTIONS);
	}
	loading.value = false;
}

async function submitPost(event: Event) {
	event.preventDefault();
	if (!editorRef.value) {
		toast(
			"Unable to find editor. Please reload the page.",
			TOAST_ERROR_OPTIONS,
		);
		return;
	}
	const editor = editorRef.value.editorReturn.get();
	if (!editor) {
		toast(
			"Unable to find editor. Please reload the page.",
			TOAST_ERROR_OPTIONS,
		);
		return;
	}
	if (!post.value) {
		toast(
			"Unable to read post information. Please refresh the page.",
			TOAST_ERROR_OPTIONS,
		);
		return;
	}
	updateLoading.value = true;
	try {
		const { status, message } = await httpRequest<{ post: BlogPost }>(
			`/post/${route.params.id}`,
			{
				method: "PUT",
				signal: abortController.signal,
				body: JSON.stringify({
					is_published: post.value.is_published,
					title: post.value.title,
					content: editor.action(getMarkdown()),
				} as BlogPost),
			},
		);
		toast(
			message,
			status === "ok" ? TOAST_SUCCESS_OPTIONS : TOAST_ERROR_OPTIONS,
		);
	} catch (error) {
		toast((error as Error).message, TOAST_ERROR_OPTIONS);
	}
	updateLoading.value = false;
}
</script>
<template>
	<Container>
		<div v-if="loading" class="flex h-full items-center justify-center">
			<Loader class="h-8 w-8" />
		</div>
		<form class="flex flex-col gap-4" v-if="post !== null" @submit="submitPost">
			<div class="flex flex-col gap-2">
				<h3 class="text-xl font-bold">Post Information:</h3>
				<div class="flex flex-col gap-1 pl-4">
					<div>
						Date Created: {{ new Date(post.created_at).toDateString() }}
					</div>
					<div>
						Date Updated: {{ new Date(post.updated_at).toDateString() }}
					</div>
					<div class="flex items-center gap-4 pl-1">
						<label class="relative flex cursor-pointer items-center">
							<input
								name="title"
								type="checkbox"
								class="peer hidden"
								placeholder="Title"
								v-model="post.is_published"
							/>
							<div
								class="h-2 w-6 items-center rounded-full bg-stone-500 transition-colors peer-checked:bg-stone-200"
							></div>
							<div
								class="absolute -left-2 h-4 w-4 rounded-full bg-stone-700 transition-all peer-checked:left-4 peer-checked:bg-stone-500"
							></div>
						</label>
						<span>Is Published?</span>
					</div>
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<div class="text-xl font-bold">Post Content:</div>
				<div class="flex flex-col gap-1">
					<input
						name="is_published"
						class="rounded-sm bg-stone-700 px-2 text-4xl font-bold outline-none placeholder:text-stone-500"
						v-model="post.title"
						placeholder="Title"
					/>

					<div
						class="flex flex-grow flex-col overflow-clip rounded-md border-2 dark:border-stone-400 dark:bg-stone-700 dark:focus-within:border-stone-100"
					>
						<MarkdownProvider>
							<Markdown
								:content="post.content"
								:editable="true"
								ref="editorRef"
							/>
						</MarkdownProvider>
					</div>
				</div>
			</div>
			<div class="flex h-12 items-end justify-end">
				<button
					type="submit"
					class="self-end rounded-md border-b-4 border-orange-600 bg-orange-500 px-4 py-1 text-xl transition-all hover:border-b-[6px] active:border-b-0"
				>
					Submit
				</button>
			</div>
		</form>
	</Container>
</template>
