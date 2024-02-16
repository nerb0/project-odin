<script lang="ts">
import BlogDashboardList from "@/components/BlogDashboardList.vue";
import Container from "./Container.vue";
import Loader from "@/components/Loader.vue";
import { getAllBlogPosts } from "@/util";

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
				}
			});
		},
	},
	components: { BlogDashboardList, Container, Loader },
};
</script>
<template>
	<Container>
		<h1 class="text-center text-5xl font-extrabold">Le Blog</h1>
		<div v-if="loading" class="flex h-full items-center justify-center">
			<Loader class="h-8 w-8" />
		</div>
		<div v-if="error !== null">{{ error }}</div>
		<BlogDashboardList v-if="posts !== null" :posts="posts" />
	</Container>
</template>
