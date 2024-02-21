<script setup lang="ts">
import { toRaw } from "vue";
import BlogDashboardItem from "./BlogDashboardItem.vue";

const { posts } = defineProps<{
	posts: Array<BlogPost>;
}>();

const animation_duration = 0.5;
const animation_delay = 0.15;
</script>
<template>
	<div class="flex flex-col gap-6 py-6">
		<BlogDashboardItem
			v-for="(post, index) in toRaw(posts)"
			:style="{
				'animation-duration': `${animation_duration + animation_delay * index}s`,
			}"
			:post="post"
		/>
	</div>
</template>
