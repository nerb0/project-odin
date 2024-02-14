<script setup lang="ts">
const posts = false;
const link = `${import.meta.env.VITE_SERVER_API_URL}/login`;
function login(event: Event) {
	const formData = new FormData(event.target as HTMLFormElement);
	fetch(link, {
		method: "POST",
		body: formData,
		headers: {
			"Content-Type": "application/json",
		},
	}).then(() => {});
}
</script>
<template>
	<div
		class="flex flex-grow flex-col items-center justify-center gap-6"
		v-if="!posts"
	>
		<h1 class="text-4xl font-extrabold">Le Blog Login</h1>
		<form
			class="flex w-[600px] max-w-full flex-col gap-4 rounded-md bg-stone-900/50 p-4 shadow-md"
			:onsubmit="login"
		>
			<input
				type="text"
				class="rounded-md border-2 border-gray-500 p-2 outline-none focus:border-stone-800 dark:border-stone-600 dark:bg-stone-800 dark:focus:border-stone-200"
				placeholder="Username"
			/>
			<input
				type="password"
				class="rounded-md border-2 border-gray-500 p-2 outline-none focus:border-stone-800 dark:border-stone-600 dark:bg-stone-800 dark:focus:border-stone-200"
				placeholder="Password"
			/>
			<button class="w-fit self-center rounded-md bg-stone-400 px-4 py-1">
				Submit
			</button>
		</form>
	</div>
	<div v-if="posts">TODO: Admin Dashboard Or Login</div>
</template>
