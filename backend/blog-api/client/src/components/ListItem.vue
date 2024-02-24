<script setup lang="ts">
import { useNodeViewContext } from "@prosemirror-adapter/vue";

const { contentRef, node, setAttrs } = useNodeViewContext();
const {
	value: { attrs },
} = node;
const checked = attrs?.checked;
const isBullet = attrs?.listType === "bullet";
</script>
<template>
	<li class="flex items-start gap-2">
		<span class="flex h-6 items-center">
			<input
				class="accent-orange-600"
				@change="() => setAttrs({ checked: !checked })"
				type="checkbox"
				:checked="checked"
				v-if="checked !== null"
			/>
			<span class="h-1 w-1 rounded-full dark:bg-stone-200" v-if="isBullet" />
			<span class="dark:text-stone-100" v-if="checked === null && !isBullet">
				{{ attrs?.label }}
			</span>
		</span>
		<div class="flex flex-grow" :ref="contentRef" />
	</li>
</template>
