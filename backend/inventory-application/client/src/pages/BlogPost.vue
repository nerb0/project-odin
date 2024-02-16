<script lang="ts">
import BlogPostMarkdown from "@/components/BlogPostMarkdown.vue";
import Container from "./Container.vue";
import { MilkdownProvider } from "@milkdown/vue";
import Loader from "@/components/Loader.vue";
import { getBlogPost } from "@/util";

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
		this.$watch(
			() => this.$route.params,
			() => {
				this.fetchData();
			},
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
			<h1 class="text-4xl font-bold">{{ post.title }}</h1>
			<MilkdownProvider>
				<BlogPostMarkdown :content="post.content" />
			</MilkdownProvider>
		</div>
	</Container>
</template>
