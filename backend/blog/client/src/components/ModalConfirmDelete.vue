<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
const emit = defineEmits<{
	(e: "cancel"): void;
	(e: "confirm"): void;
}>();
</script>

<template>
	<VueFinalModal
		class="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-stone-900/60"
		content-class="flex flex-col max-w-xl rounded-lg overflow-clip outline-none"
	>
		<h1 class="bg-orange-700 p-4 text-xl font-bold text-stone-50">
			Confirmation
		</h1>
		<div
			class="flex flex-col gap-4 bg-stone-100 px-4 py-2 text-stone-50 dark:bg-stone-600"
		>
			<slot />
			<div class="flex justify-end gap-2">
				<button
					class="rounded-md border border-stone-50 px-2 py-1 transition-all hover:scale-105 hover:border-orange-500 hover:bg-orange-500"
					@click="emit('confirm')"
				>
					Confirm
				</button>
				<button
					class="rounded-md border border-red-300 px-2 py-1 transition-all hover:scale-105 hover:border-red-500 hover:bg-red-500"
					@click="emit('cancel')"
				>
					Cancel
				</button>
			</div>
		</div>
	</VueFinalModal>
</template>
