<script setup lang="ts">
import {
	TOAST_ERROR_OPTIONS,
	TOAST_OPTIONS,
	httpRequest,
	postIsLong,
} from "@/util";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import ModalConfirmDelete from "./ModalConfirmDelete.vue";

const toast = useToast();
const show = ref(false);
const loading = ref(false);
const { post, removePostFromList } = defineProps<{
	post: BlogPost;
	removePostFromList: () => void;
}>();
async function deletePost() {
	loading.value = true;
	try {
		const { status, message } = await httpRequest(`/post/${post.id}`, {
			method: "DELETE",
		});

		if (status === 200) removePostFromList();
		toast(message, status === 200 ? TOAST_OPTIONS : TOAST_ERROR_OPTIONS);
	} catch (error) {
		toast((error as Error).message, TOAST_ERROR_OPTIONS);
	}
	show.value = false;
	loading.value = false;
}
</script>
<template>
	<div
		class="relative rounded-md bg-stone-100 px-6 py-4 shadow-md dark:bg-stone-900"
	>
		<div class="absolute right-3 top-2 flex flex-col gap-2">
			<RouterLink :to="`/admin/post/${post.id}`">
				<svg
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					class="relative h-4 w-4 cursor-pointer transition-all hover:scale-110 dark:hover:text-orange-400"
				>
					<g fill="none">
						<path
							d="M13.94 5L19 10.06L9.062 20a2.25 2.25 0 0 1-.999.58l-5.116 1.395a.75.75 0 0 1-.92-.921l1.395-5.116a2.25 2.25 0 0 1 .58-.999L13.938 5zm7.09-2.03a3.578 3.578 0 0 1 0 5.06l-.97.97L15 3.94l.97-.97a3.578 3.578 0 0 1 5.06 0z"
							fill="currentColor"
						></path>
					</g>
				</svg>
			</RouterLink>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 24 24"
				class="h-4 w-4 cursor-pointer transition-all hover:scale-110 hover:text-red-600"
				@click="show = true"
			>
				<g fill="none">
					<path
						d="M21.5 6a1 1 0 0 1-.883.993L20.5 7h-.845l-1.231 12.52A2.75 2.75 0 0 1 15.687 22H8.313a2.75 2.75 0 0 1-2.737-2.48L4.345 7H3.5a1 1 0 0 1 0-2h5a3.5 3.5 0 1 1 7 0h5a1 1 0 0 1 1 1zm-7.25 3.25a.75.75 0 0 0-.743.648L13.5 10v7l.007.102a.75.75 0 0 0 1.486 0L15 17v-7l-.007-.102a.75.75 0 0 0-.743-.648zm-4.5 0a.75.75 0 0 0-.743.648L9 10v7l.007.102a.75.75 0 0 0 1.486 0L10.5 17v-7l-.007-.102a.75.75 0 0 0-.743-.648zM12 3.5A1.5 1.5 0 0 0 10.5 5h3A1.5 1.5 0 0 0 12 3.5z"
						fill="currentColor"
					></path>
				</g>
			</svg>
		</div>
		<div>ID: {{ post.id }}</div>
		<div>
			<span>Title: </span>
			<span class="font-bold italic" v-if="!post.title">empty</span>
			<span>{{ post.title }}</span>
		</div>
		<div
			:class="{
				'line-clamp-[8] text-ellipsis gradient-mask-b-80': postIsLong(
					post.content,
				),
			}"
		>
			<span>Content: </span>
			<span class="font-bold italic" v-if="!post.title">empty</span>
			<span>{{ post.content }}</span>
		</div>
	</div>
	<ModalConfirmDelete
		v-model="show"
		@confirm="deletePost"
		@cancel="show = false"
	>
		<p>Do you really want to delete this post?</p>
	</ModalConfirmDelete>
</template>
