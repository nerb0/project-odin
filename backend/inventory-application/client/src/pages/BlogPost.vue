<script lang="ts">
interface FetchCallbackHandler {
	(err: Error, post: null): void;
	(err: null, post: BlogPost): void;
}

function getBlogPost(id: string, callback: FetchCallbackHandler) {
	fetch(`${import.meta.env.SERVER_API_URL}/post/${id}`)
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
};
</script>
<template>
	<h1>BlogPost</h1>
</template>
