<script setup lang="ts">
const required = true;
defineProps({
	to: { type: String, required },
});
</script>

<template>
	<router-link class="group relative" :to>
		<div
			class="absolute left-1 top-1 z-0 h-full w-full rounded-md bg-gray-950 transition-all group-hover:left-0 group-hover:top-0"
		></div>
		<div
			class="relative z-10 rounded-md bg-stone-700 px-4 py-3 font-bold text-white transition-all group-hover:scale-105 group-hover:bg-gray-950"
		>
			<slot />
		</div>
	</router-link>
</template>
