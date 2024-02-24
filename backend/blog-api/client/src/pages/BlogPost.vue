<script setup lang="ts">
import CommentCreateForm from "@/components/CommentCreateForm.vue";
import CommentList from "@/components/CommentList.vue";
import Loader from "@/components/Loader.vue";
import Markdown from "@/components/Markdown.vue";
import MarkdownProvider from "@/components/MarkdownProvider.vue";
import { TOAST_ERROR_OPTIONS } from "@/constants";
import { httpRequest } from "@/util";
import { getMarkdown, replaceAll } from "@milkdown/utils";
import { onBeforeUnmount, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import Container from "./Container.vue";

const loading = ref(false);
const { authenticated } = defineProps<{ authenticated: boolean }>();
const post = ref(null as null | BlogPost);
const toast = useToast();
const route = useRoute();
const abortController = new AbortController();
const comment_ref = ref<InstanceType<typeof CommentCreateForm> | null>(null);
const list_ref = ref<InstanceType<typeof CommentList> | null>();

watch(
	() => route.params,
	() => {
		fetchData();
	},
	{ immediate: true },
);

onBeforeUnmount(() => abortController.abort());

async function fetchData() {
	if (typeof route.params.id === "object") {
		toast("Invalid post id.", TOAST_ERROR_OPTIONS);
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

async function createComment(event: Event) {
	event.preventDefault();
	if (typeof route.params.id === "object") {
		toast("Invalid post id.", TOAST_ERROR_OPTIONS);
		return;
	}
	const form = event.target as HTMLFormElement;
	try {
		const editor = comment_ref.value?.markdownRef?.editorReturn.get();
		const { data, message } = await httpRequest<{ comment: BlogComment }>(
			`/post/${route.params.id}/comment`,
			{
				method: "POST",
				body: JSON.stringify({
					author: new FormData(form).get("author")?.toString(),
					message: editor?.action(getMarkdown()) || "",
				}),
				headers: {
					"Content-Type": "application/json",
				},
				signal: abortController.signal,
			},
		);
		if (data) {
			list_ref.value?.createComment(data.comment);
			form.reset();
			editor?.action(replaceAll(""));
		} else {
			toast(message, TOAST_ERROR_OPTIONS);
		}
	} catch (error) {
		toast((error as Error).message, TOAST_ERROR_OPTIONS);
	}
}
</script>
<template>
	<Container>
		<div v-if="loading" class="flex h-full items-center justify-center">
			<Loader class="h-8 w-8" />
		</div>
		<div v-if="post !== null">
			<div class="text-right text-xs font-bold italic text-stone-500">
				{{ new Date(post.created_at).toDateString() }}
			</div>
			<h1 class="text-center text-4xl font-bold text-amber-200">
				{{ post.title }}
			</h1>
			<MarkdownProvider>
				<Markdown :content="post.content" :editable="false" />
			</MarkdownProvider>
			<h2 class="text-2xl font-bold text-amber-100">Comments:</h2>
			<CommentCreateForm
				ref="comment_ref"
				@submit="createComment"
				:authenticated="authenticated"
			/>
			<CommentList ref="list_ref" className="pl-4 pt-4" :post_id="post._id" />
		</div>
	</Container>
</template>
