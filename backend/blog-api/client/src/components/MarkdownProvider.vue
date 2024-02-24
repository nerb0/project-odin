<script setup lang="ts">
import { MilkdownProvider } from "@milkdown/vue";
import { ProsemirrorAdapterProvider } from "@prosemirror-adapter/vue";
</script>
<template>
	<ProsemirrorAdapterProvider>
		<MilkdownProvider>
			<slot />
		</MilkdownProvider>
	</ProsemirrorAdapterProvider>
</template>
