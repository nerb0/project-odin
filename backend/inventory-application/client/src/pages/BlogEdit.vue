<script setup lang="ts">
import BlogPostMarkdown from "@/components/BlogPostMarkdown.vue";
import Loader from "@/components/Loader.vue";
import { TOAST_ERROR_OPTIONS, httpRequest } from "@/util";
import { MilkdownProvider } from "@milkdown/vue";
import { useToast } from "vue-toastification";
import Container from "./Container.vue";
import { useRoute, useRouter } from "vue-router";
import { onUnmounted, ref, watch } from "vue";

const { authenticated } = defineProps<{
	authenticated: boolean;
}>();
const loading = ref(true);
const post = ref(null as null | (BlogPost & { is_published: boolean }));
const toast = useToast();
const abortController = new AbortController();
const route = useRoute();

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
</script>
<template>
	<Container>
		<div v-if="loading" class="flex h-full items-center justify-center">
			<Loader class="h-8 w-8" />
		</div>
		<form class="flex flex-col gap-4" v-if="post !== null">
			<input
				name="is_published"
				class="rounded-sm bg-stone-700 px-2 text-4xl font-bold outline-none placeholder:text-stone-500"
				@input="
					(event) =>
						(post!.is_published =
							(event.target as HTMLInputElement)?.checked || false)
				"
				v-model="post.is_published"
				placeholder="Title"
			/>
			<input
				name="title"
				type="checkbox"
				class="rounded-sm bg-stone-700 px-2 text-4xl font-bold outline-none placeholder:text-stone-500"
				v-model="post.title"
				placeholder="Title"
			/>
			<MilkdownProvider>
				<div
					class="flex flex-grow flex-col overflow-clip rounded-md border-2 dark:border-stone-400 dark:bg-stone-700 dark:focus-within:border-stone-100"
				>
					<BlogPostMarkdown :content="post.content" :editable="true" />
				</div>
			</MilkdownProvider>
		</form>
	</Container>
</template>
