<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue';
import BlogPostMarkdown from './BlogPostMarkdown.vue';

const { post } = defineProps<{ post: BlogPost }>();
</script>

<template>
	<router-link
		class="animate-slide-in cursor-pointer rounded-md bg-stone-50 py-4 px-6 shadow-sm transition-all hover:scale-[1.01] hover:shadow-lg dark:bg-stone-900 dark:shadow-stone-900"
		:to="{ name: 'blog_post', params: { id: post.id } }"
	>
		<div :class="{ 'line-clamp-[8] gradient-mask-b-80 text-ellipsis': post.content.length >= 1000 }">
			<div class="flex items-start justify-between">
				<div class="text-3xl font-bold">{{ post.title }}</div>
				<div class="text-sm text-stone-300 dark:text-stone-500">
					{{ new Date(post.created_at).toLocaleDateString() }}
				</div>
			</div>
			<div class="pl-6">
				<MilkdownProvider>
					<BlogPostMarkdown :content="post.content"/>
				</MilkdownProvider>
			</div>
		</div>
	</router-link>
</template>
