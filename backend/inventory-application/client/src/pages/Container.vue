<script setup lang="ts">
import { cn } from "@/util";

const { className, wrapperClass } = defineProps<{
	className?: string;
	wrapperClass?: string;
}>();
</script>
<template>
	<div :class="cn('flex flex-grow justify-center pt-4', wrapperClass)">
		<div :class="cn('w-full max-w-5xl flex-grow', className)">
			<slot />
		</div>
	</div>
</template>
