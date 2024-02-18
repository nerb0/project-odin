<script lang="ts">
import BlogPostMarkdown from "@/components/BlogPostMarkdown.vue";
import Loader from "@/components/Loader.vue";
import { TOAST_ERROR_OPTIONS, httpRequest } from "@/util";
import { MilkdownProvider } from "@milkdown/vue";
import { useToast } from "vue-toastification";
import Container from "./Container.vue";

export default {
	data() {
		return {
			loading: false,
			post: null,
			error: null,
		} as {
			loading: boolean;
			post: null | BlogPost;
			error: null | string;
		};
	},
	setup() {
		return { toast: useToast(), abortController: new AbortController() };
	},
	created() {
		this.$watch(
			() => this.$route.params,
			() => {
				this.fetchData();
			},
			{ immediate: true },
		);
	},
	methods: {
		async fetchData() {
			if (typeof this.$route.params.id === "object") {
				this.toast("Invalid parameter.", TOAST_ERROR_OPTIONS);
				return;
			}
			this.error = null;
			this.post = null;
			this.loading = true;
			try {
				const { data, message } = await httpRequest<{ post: BlogPost }>(
					`/post/${this.$route.params.id}`,
					{ signal: this.abortController.signal },
				);
				if (data) {
					this.post = data.post;
				} else {
					this.toast(message, TOAST_ERROR_OPTIONS);
				}
			} catch (error) {
				this.toast((error as Error).message, TOAST_ERROR_OPTIONS);
			}
			this.loading = false;
		},
	},
	components: { Container, BlogPostMarkdown, MilkdownProvider, Loader },
};
</script>
<template>
	<Container>
		<div v-if="loading" class="flex h-full items-center justify-center">
			<Loader class="h-8 w-8" />
		</div>
		<div v-if="error !== null">{{ error }}</div>
		<div v-if="post !== null">
			<h1 class="text-4xl font-bold">{{ post.title }}</h1>
			<MilkdownProvider>
				<BlogPostMarkdown :content="post.content" />
			</MilkdownProvider>
		</div>
	</Container>
</template>
