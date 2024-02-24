<script setup lang="ts">
import { TOAST_ERROR_OPTIONS } from "@/constants";
import { httpRequest } from "@/util";
import { computed, onMounted, ref } from "vue";
import { useToast } from "vue-toastification";
import Loader from "./Loader.vue";
import Markdown from "./Markdown.vue";
import MarkdownProvider from "./MarkdownProvider.vue";

const toast = useToast();
const { post_id, className } = defineProps<{
	post_id: string;
	className: string;
}>();
const comments = ref<null | BlogComment[]>(null);
const last_id = computed(
	() => comments.value?.[comments.value.length - 1]?._id,
);
const lastFetch = ref(false);
const visible = ref(false);
const fetcherRef = ref();

function createComment(new_comment: BlogComment) {
	if (comments.value) {
		comments.value.unshift(new_comment);
	} else {
		comments.value = [new_comment];
	}
	console.log(comments.value);
}
function addComments(new_comments: BlogComment[]) {
	if (comments.value) {
		comments.value.push(...new_comments);
	} else {
		comments.value = new_comments;
	}
}

const observer = new IntersectionObserver(
	function (entries, _observer) {
		for (const entry of entries) {
			const abortController = new AbortController();
			if (entry.isIntersecting) {
				visible.value = true;
				getComments(abortController);
			} else {
				visible.value = false;
				abortController.abort();
			}
		}
	},
	{ threshold: 1 },
);

async function getComments(abortController: AbortController) {
	try {
		const params = new URLSearchParams({
			last_id: last_id.value || "",
		});
		const { data, message } = await httpRequest<{
			comments: BlogComment[];
		}>(`/post/${post_id}/comments?${params.toString()}`, {
			signal: abortController.signal,
		});
		if (data?.comments) {
			if (data.comments.length < 10) {
				lastFetch.value = true;
			}
			addComments(data.comments);
		} else {
			toast(message, TOAST_ERROR_OPTIONS);
		}
	} catch (error) {
		console.error(error);
		toast((error as Error).message, TOAST_ERROR_OPTIONS);
	}
}

onMounted(() => {
	if (!fetcherRef.value) {
		console.error("Unable to find list element ref.");
		return;
	}
	observer.observe(fetcherRef.value);
});

defineExpose({ addComments, createComment });
</script>
<template>
	<div
		:class="className"
		:key="index"
		v-if="comments !== null && comments.length > 0"
		v-for="(comment, index) in comments"
	>
		<div class="font-bold italic text-stone-300">
			{{ comment.author || "Anonymous User" }}
		</div>
		<MarkdownProvider>
			<Markdown :content="comment.message" />
		</MarkdownProvider>
	</div>
	<div class="pt-5 text-center italic text-stone-500" v-if="lastFetch">
		{{ last_id ? "* * * * *" : "No comments found." }}
	</div>
	<div ref="fetcherRef" class="pt-5" v-if="!lastFetch">
		<div
			class="flex animate-pulse items-center justify-center gap-3"
			v-if="visible"
		>
			<span>Loading</span>
			<Loader class="h-6 w-6" />
			<span>comments</span>
		</div>
		<div v-if="!visible" class="flex justify-center">
			<div class="rounded-md border-2 border-stone-600 px-6 py-2">
				Show more
			</div>
		</div>
	</div>
</template>
