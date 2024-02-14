<script lang="ts">
import Loader from "@/components/Loader.vue";
import { authenticateUser } from "@/util";

export default {
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
							this.authenticated = data.authenticated;
							alert(message);
						})
						.catch((err) => alert(`TODO: Login failure ${err}`));
				})
				.catch(() => {
					alert("TODO: Login failure");
				});
		},
		authenticate() {
			this.error = null;
			this.authenticated = null;
			this.init_loading = true;
			authenticateUser((err, authentication_result) => {
				this.init_loading = false;
				if (err) {
					this.error = err.toString();
					this.authenticated = false;
				} else {
					this.authenticated = authentication_result;
				}
			});
		},
	},
	components: { Loader },
};
</script>
<template>
	<div class="flex flex-grow items-center justify-center" v-if="init_loading">
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
	<div></div>
</template>
