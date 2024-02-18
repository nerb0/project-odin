<script setup lang="ts">
const required = true;
defineProps({
	to: { type: String, required },
});
</script>

<template>
	<RouterLink class="group relative aria-[current]:pointer-events-none" :to>
		<div
			class="absolute left-1 top-1 z-0 h-full w-full rounded-md bg-gray-950 transition-all group-hover:left-0 group-hover:top-0 group-aria-[current]:left-0 group-aria-[current]:top-0 dark:bg-stone-300"
		></div>
		<div
			class="relative z-10 rounded-md bg-stone-50 px-4 py-3 font-bold text-gray-950 transition-all duration-300 group-hover:scale-105 group-hover:bg-stone-950 group-hover:text-white group-aria-[current]:bg-stone-950 group-aria-[current]:text-white dark:bg-stone-950 dark:text-stone-50 dark:group-hover:bg-stone-100 dark:group-hover:text-stone-900 dark:group-aria-[current]:bg-stone-100 dark:group-aria-[current]:text-stone-900"
		>
			<slot />
		</div>
	</RouterLink>
</template>
