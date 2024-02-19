<script setup lang="ts">
import AdminBlogPostListItem from "@/components/AdminBlogPostListItem.vue";
import EditorWrapper from "@/components/EditorWrapper.vue";
import Loader from "@/components/Loader.vue";
import { TOAST_ERROR_OPTIONS, httpRequest } from "@/util";
import { useToast } from "vue-toastification";
import Container from "./Container.vue";
import { ref, watch } from "vue";

const { authenticated, setAuthenticated } = defineProps<{
	authenticated: boolean;
	setAuthenticated: (authenticated: boolean) => void;
}>();
const auth_loading = ref(false);
const post_loading = ref(false);
const posts = ref(null as null | BlogPost[]);
const toast = useToast();
const abortController = new AbortController();

watch(
	() => authenticated,
	() => {
		if (authenticated === true) {
			fetchData();
		}
	},
	{ immediate: true },
);

async function fetchData() {
	posts.value = null;
	post_loading.value = true;
	try {
		const { data, message } = await httpRequest<{ posts: BlogPost[] }>(
			"/posts?is_admin=true",
			{ signal: abortController.signal },
		);
		if (data) {
			posts.value = data.posts;
		} else {
			toast(message, TOAST_ERROR_OPTIONS);
		}
	} catch (err) {
		toast((err as Error).message, TOAST_ERROR_OPTIONS);
	}
	post_loading.value = false;
}
async function login(event: Event) {
	event.preventDefault();
	auth_loading.value = true;
	try {
		const formData = new FormData(event.target as HTMLFormElement);
		const { data, message } = await httpRequest<{ authenticated: boolean }>(
			"/auth/login",
			{
				signal: abortController.signal,
				method: "POST",
				body: JSON.stringify({
					username: formData.get("username"),
					password: formData.get("password"),
				}),
				headers: { "Content-Type": "application/json" },
			},
		);
		if (data) {
			setAuthenticated(data.authenticated);
		} else {
			toast(message, TOAST_ERROR_OPTIONS);
		}
	} catch (err) {
		toast((err as Error).message, TOAST_ERROR_OPTIONS);
	}
	auth_loading.value = false;
}
</script>
<template>
	<div
		class="flex flex-grow flex-col items-center justify-center gap-6"
		v-if="authenticated === false"
	>
		<h1 class="text-4xl font-extrabold">Le Blog Login</h1>
		<form
			class="flex w-[600px] max-w-full flex-col gap-4 rounded-md bg-stone-900/50 p-4 shadow-md"
			:onsubmit="login"
		>
			<input
				:disabled="auth_loading"
				type="text"
				name="username"
				placeholder="Username"
				class="rounded-md border-2 border-gray-500 p-2 outline-none focus:border-stone-800 dark:border-stone-600 dark:bg-stone-800 dark:focus:border-stone-200"
			/>
			<input
				:disabled="auth_loading"
				type="password"
				name="password"
				placeholder="Password"
				class="rounded-md border-2 border-gray-500 p-2 outline-none focus:border-stone-800 dark:border-stone-600 dark:bg-stone-800 dark:focus:border-stone-200"
			/>
			<button
				class="w-fit self-center rounded-md bg-stone-400 px-4 py-1"
				:disabled="auth_loading"
			>
				Submit
			</button>
		</form>
	</div>
	<div
		class="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-neutral-800/40"
		v-if="auth_loading"
	>
		<div class="animate-pulse">Logging in...</div>
		<Loader />
	</div>

	<div
		class="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-2 bg-stone-400/60 dark:bg-neutral-800/40"
		v-if="post_loading"
	>
		<div class="animate-pulse text-black dark:text-white">
			Fetching posts...
		</div>
		<Loader />
	</div>
	<Container v-if="authenticated === true">
		<div class="flex flex-col gap-10">
			<EditorWrapper
				:addPost="
					function (post: BlogPost) {
						if (!posts) posts = [];
						else posts.unshift(post);
					}
				"
			/>
			<div class="flex flex-grow flex-col gap-4" v-if="posts !== null">
				<AdminBlogPostListItem
					v-for="(post, index) in posts"
					:post="post"
					:remove-post-from-list="
						function () {
							console.log(index);
							posts?.splice(index, 1);
						}
					"
				/>
			</div>
			<div
				class="text-center text-stone-500"
				v-if="(posts === null || posts.length === 0) && !post_loading"
			>
				No posts found.
			</div>
		</div>
	</Container>
</template>
