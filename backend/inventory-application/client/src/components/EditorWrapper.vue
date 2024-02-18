<template>
	<MilkdownProvider>
		<Editor :addPost="addPost" />
	</MilkdownProvider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MilkdownProvider } from "@milkdown/vue";
import Editor from "./Editor.vue";

export default defineComponent({
	name: "EditorWrapper",
	components: {
		MilkdownProvider,
		Editor,
	},
	props: {
		addPost: {
			type: Function,
			required: true,
		},
	},
	setup: () => {},
});
</script>
