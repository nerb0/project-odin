<template>
	<MilkdownProvider>
		<Editor :addPost="addPost" />
	</MilkdownProvider>
</template>

<script setup lang="ts">
import { MilkdownProvider } from "@milkdown/vue";
import Editor from "./Editor.vue";

const { addPost } = defineProps<{ addPost: (post: BlogPost) => void }>();
</script>
