<script setup lang="ts">
import BlogPostMarkdown from "@/components/BlogPostMarkdown.vue";
import Loader from "@/components/Loader.vue";
import { TOAST_ERROR_OPTIONS, httpRequest } from "@/util";
import { MilkdownProvider } from "@milkdown/vue";
import { useToast } from "vue-toastification";
import Container from "./Container.vue";
import { onBeforeUnmount, ref, watch } from "vue";
import { useRoute } from "vue-router";

const loading = ref(false);
const post = ref(null as null | BlogPost);
const toast = useToast();
const route = useRoute();
const abortController = new AbortController();
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
			<h1 class="text-4xl font-bold">{{ post.title }}</h1>
			<MilkdownProvider>
				<BlogPostMarkdown :content="post.content" />
			</MilkdownProvider>
		</div>
	</Container>
</template>
