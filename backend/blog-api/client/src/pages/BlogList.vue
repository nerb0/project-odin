<script setup lang="ts">
import BlogDashboardList from "@/components/BlogDashboardList.vue";
import Loader from "@/components/Loader.vue";
import { httpRequest } from "@/util";
import { useToast } from "vue-toastification";
import Container from "./Container.vue";
import { onBeforeUnmount, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { TOAST_ERROR_OPTIONS } from "@/constants";

const loading = ref(false);
const posts = ref(null as null | BlogPost[]);
const route = useRoute();
const toast = useToast();
const abortController = new AbortController();
watch(
	() => route.params,
	() => {
		fetchData();
	},
	// fetch the data when the view is created and the data is
	// already being observed
	{ immediate: true },
);
onBeforeUnmount(() => {
	abortController.abort();
});
async function fetchData() {
	posts.value = null;
	loading.value = true;
	try {
		const { data, message } = await httpRequest<{ posts: BlogPost[] }>(
			"/posts",
			{ signal: abortController.signal },
		);
		if (data) {
			posts.value = data.posts;
		} else {
			toast(message, TOAST_ERROR_OPTIONS);
		}
	} catch (err) {
		toast((err as Error).message, TOAST_ERROR_OPTIONS);
	}
	loading.value = false;
}
</script>
<template>
	<Container class-name="flex flex-col gap-4">
		<h1 class="pb-4 text-center text-5xl font-extrabold">Le Blog</h1>
		<div
			v-if="loading"
			class="flex h-full flex-col items-center justify-center gap-2"
		>
			<div class="animate-pulse">Fetching posts...</div>
			<Loader class="h-8 w-8 animate-pulse" />
		</div>
		<BlogDashboardList v-if="posts !== null" :posts="posts" />
		<div
			class="flex flex-grow items-center justify-center text-stone-500"
			v-if="posts === null && !loading"
		>
			No posts found.
		</div>
	</Container>
</template>
