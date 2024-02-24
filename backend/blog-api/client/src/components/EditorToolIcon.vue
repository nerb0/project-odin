<script setup lang="ts">
const { onClick } = defineProps<{ onClick: () => void }>();
</script>
<template>
	<div
		class="group cursor-pointer hover:bg-stone-500/70 [&.is-active]:bg-stone-500/40"
		@click="
			(event) => {
				event.preventDefault();
				onClick();
			}
		"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 24 24"
			class="h-8 w-10 py-1 transition-transform group-hover:scale-105"
		>
			<slot />
		</svg>
	</div>
</template>
