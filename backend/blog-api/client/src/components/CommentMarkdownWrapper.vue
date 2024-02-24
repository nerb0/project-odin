<script setup lang="ts">
import Markdown from "./Markdown.vue";
import MarkdownProvider from "./MarkdownProvider.vue";

const { comment } = defineProps<{ comment: BlogComment }>();
</script>
<template>
	<MarkdownProvider>
		<Markdown :content="comment.message" />
	</MarkdownProvider>
</template>
