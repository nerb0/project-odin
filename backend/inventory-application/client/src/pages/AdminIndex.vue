<script lang="ts">
import EditorWrapper from "@/components/EditorWrapper.vue";
import Loader from "@/components/Loader.vue";
import {
	TOAST_OPTIONS,
	authenticateUser,
	getAllBlogPosts,
	postIsLong,
} from "@/util";
import { useToast } from "vue-toastification";
import Container from "./Container.vue";

export default {
	setup() {
		return { toast: useToast() };
	},
	data() {
		return {
			init_loading: false,
			auth_loading: false,
			post_loading: false,
			authenticated: null as null | boolean,
			error: null as null | string,
			posts: null as null | BlogPost[],
		};
	},
	created() {
		this.authenticate();
	},
	methods: {
		postIsLong,
		fetchData() {
			this.error = null;
			this.posts = null;
			this.post_loading = true;
			getAllBlogPosts((err, res) => {
				this.post_loading = false;
				if (err !== null) {
					this.error = err.toString();
				} else {
					this.toast(res?.message, TOAST_OPTIONS);
					this.posts = res?.data.posts || [];
				}
			});
		},
		login(event: Event) {
			event.preventDefault();
			this.auth_loading = true;
			const formData = new FormData(event.target as HTMLFormElement);
			fetch(`${import.meta.env.VITE_SERVER_API_URL}/auth/login`, {
				method: "POST",
				body: JSON.stringify({
					username: formData.get("username"),
					password: formData.get("password"),
				}),
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => {
					res
						.json()
						.then(({ data, message }) => {
							this.auth_loading = false;
							this.authenticated = data.authenticated;
							this.toast(message, TOAST_OPTIONS);
						})
						.catch((err) => {
							this.auth_loading = false;
							this.toast("Unable to login. Please try again", TOAST_OPTIONS);
							alert(`TODO: Login failure ${err}`);
						});
				})
				.catch(() => {
					this.auth_loading = false;
					alert("TODO: Login failure");
				});
		},
		authenticate() {
			this.error = null;
			this.authenticated = null;
			this.init_loading = true;
			return authenticateUser((err, result) => {
				this.init_loading = false;
				if (err) {
					this.error = err.toString();
					this.authenticated = false;
				} else {
					this.toast(result?.message, TOAST_OPTIONS);
					this.authenticated = result?.data.authenticated;
					if (this.authenticated) this.fetchData();
				}
			});
		},
	},
	components: { Loader, Container, EditorWrapper },
};
</script>
<template>
	<div
		class="flex flex-grow flex-col items-center justify-center gap-2"
		v-if="init_loading"
	>
		<div class="animate-pulse">Authenticating User...</div>
		<Loader class="" />
	</div>
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
	<Container v-if="posts != null">
		<div class="flex flex-col gap-10">
			<EditorWrapper />
			<div class="flex flex-grow flex-col gap-4">
				<div
					class="relative rounded-md bg-stone-100 px-6 py-4 shadow-md dark:bg-stone-900"
					v-for="post in posts"
				>
					<div class="absolute right-3 top-2 flex flex-col gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 24 24"
							class="relative h-4 w-4 cursor-pointer transition-all hover:scale-110 dark:hover:text-orange-400"
						>
							<g fill="none">
								<path
									d="M13.94 5L19 10.06L9.062 20a2.25 2.25 0 0 1-.999.58l-5.116 1.395a.75.75 0 0 1-.92-.921l1.395-5.116a2.25 2.25 0 0 1 .58-.999L13.938 5zm7.09-2.03a3.578 3.578 0 0 1 0 5.06l-.97.97L15 3.94l.97-.97a3.578 3.578 0 0 1 5.06 0z"
									fill="currentColor"
								></path>
							</g>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							viewBox="0 0 24 24"
							class="h-4 w-4 cursor-pointer transition-all hover:scale-110 hover:text-red-600"
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
			</div>
		</div>
	</Container>
</template>
