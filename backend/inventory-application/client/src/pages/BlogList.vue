<script lang="ts">
import BlogDashboardList from "@/components/BlogDashboardList.vue";
import Loader from "@/components/Loader.vue";
import { TOAST_ERROR_OPTIONS, httpRequest } from "@/util";
import { useToast } from "vue-toastification";
import Container from "./Container.vue";

export default {
	data() {
		return {
			loading: false,
			posts: null as null | BlogPost[],
			error: null as null | string,
		};
	},
	created() {
		// watch the params of the route to fetch the data again
		this.$watch(
			() => this.$route.params,
			() => {
				this.fetchData();
			},
			// fetch the data when the view is created and the data is
			// already being observed
			{ immediate: true },
		);
	},
	setup() {
		const abortController = new AbortController();
		return { toast: useToast(), abortController };
	},
	beforeUnmount() {
		this.abortController.abort();
	},
	methods: {
		async fetchData() {
			this.error = null;
			this.posts = null;
			this.loading = true;
			try {
				const { data, message } = await httpRequest<{ posts: BlogPost[] }>(
					"/posts",
					{ signal: this.abortController.signal },
				);
				if (data) {
					this.posts = data.posts;
				} else {
					this.toast(message, TOAST_ERROR_OPTIONS);
				}
			} catch (err) {
				this.toast((err as Error).message, TOAST_ERROR_OPTIONS);
			}
			this.loading = false;
		},
	},
	components: { BlogDashboardList, Container, Loader },
};
</script>
<template>
	<Container class-name="flex flex-col gap-4">
		<h1 class="pb-4 text-center text-5xl font-extrabold">Le Blog</h1>
		<div v-if="loading" class="flex h-full items-center justify-center">
			<Loader class="h-8 w-8" />
		</div>
		<div v-if="error !== null">{{ error }}</div>
		<BlogDashboardList v-if="posts !== null" :posts="posts" />
		<div
			class="flex flex-grow items-center justify-center text-stone-500"
			v-if="posts === null && !loading"
		>
			No posts found.
		</div>
	</Container>
</template>
