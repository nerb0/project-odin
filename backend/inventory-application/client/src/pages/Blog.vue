<script lang="ts">
interface FetchCallbackHandler {
	(err: Error, post: null): void;
	(err: null, post: BlogPost[]): void;
}

function getAllBlogPosts(callback: FetchCallbackHandler) {
	fetch(`${import.meta.env.VITE_SERVER_API_URL}/posts`)
		.then((res) =>
			res
				.json()
				.then((data) => callback(null, data))
				.catch((err) => callback(err, null)),
		)
		.catch((err) => callback(err, null));
}
export default {
	data() {
		return {
			loading: false,
			posts: null,
			error: null,
		} as {
			loading: boolean;
			posts: null | BlogPost[];
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
			this.posts = null;
			this.loading = true;

			getAllBlogPosts((err, posts) => {
				this.loading = false;
				if (err) {
					this.error = err.toString();
				} else {
					this.posts = posts;
					console.log(posts);
				}
			});
		},
	},
};
</script>
<template>
	<h1>Blog</h1>
</template>
