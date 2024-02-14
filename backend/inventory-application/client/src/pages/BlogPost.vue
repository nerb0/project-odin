<script lang="ts">
import BlogPostMarkdown from "@/components/BlogPostMarkdown.vue";
import Container from "./Container.vue";
import { MilkdownProvider } from "@milkdown/vue";
import Loader from "@/components/Loader.vue";

interface FetchCallbackHandler {
	(err: Error, post: null): void;
	(err: null, post: BlogPost): void;
}

function getBlogPost(id: string, callback: FetchCallbackHandler) {
	new Promise((resolve) => setTimeout(resolve, 1500)).then(() => {
		fetch(`${import.meta.env.VITE_SERVER_API_URL}/post/${id}`)
			.then((res) =>
				res
					.json()
					.then(({ data }) => callback(null, data))
					.catch((err) => callback(err, null)),
			)
			.catch((err) => callback(err, null));
	});
}

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
	methods: {
		fetchData() {
			this.error = null;
			this.post = null;
			this.loading = true;
			if (typeof this.$route.params.id === "object") {
				this.error = "Invalid parameter.";
				return;
			}
			getBlogPost(this.$route.params.id, (err, post) => {
				this.loading = false;
				if (err) {
					this.error = err.toString();
				} else {
					this.post = post;
				}
			});
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
			<h1 class="text-3xl font-bold">{{ post.title }}</h1>
			<MilkdownProvider>
				<BlogPostMarkdown :content="post.content" />
			</MilkdownProvider>
		</div>
	</Container>
</template>
