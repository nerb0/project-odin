<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import HeaderLink from "./components/HeaderLink.vue";
import { TOAST_ERROR_OPTIONS, httpRequest } from "./util";
import { useToast } from "vue-toastification";

const isDarkMode = localStorage.getItem("isDarkMode");
const authenticated = ref(null as null | Boolean);
const loading = ref(false);
const toast = useToast();
const checked =
	isDarkMode !== null
		? isDarkMode === "true"
		: window.matchMedia("(prefers-color-scheme: dark)").matches;
const abortController = new AbortController();

onUnmounted(function () {
	abortController.abort();
});
onMounted(function () {
	document.documentElement.classList.toggle("dark", checked);
	authenticateUser();
});

async function authenticateUser() {
	authenticated.value = null;
	loading.value = true;
	try {
		const { data, message } = await httpRequest<{ authenticated: boolean }>(
			"/auth/verify",
			{
				signal: abortController.signal,
				method: "POST",
			},
		);
		if (data) {
			authenticated.value = data.authenticated;
			if (!data.authenticated) toast(message, TOAST_ERROR_OPTIONS);
		} else {
			toast(message, TOAST_ERROR_OPTIONS);
		}
	} catch (error) {
		authenticated.value = false;
		toast((error as Error).message, TOAST_ERROR_OPTIONS);
	}
	loading.value = false;
}
function toggleDark(event: Event) {
	const input = event.target as HTMLInputElement;
	document.documentElement.classList.toggle("dark", input.checked);
	localStorage.setItem("isDarkMode", input.checked.toString());
}
function setAuthenticated(is_authenticated: boolean) {
	authenticated.value = is_authenticated;
}
</script>
<template>
	<main
		class="flex min-h-screen flex-col text-stone-900 dark:bg-stone-800 dark:text-stone-100"
	>
		<nav class="flex">
			<div class="flex flex-grow items-center">
				<router-link
					class="p-4 text-2xl font-extrabold text-orange-400 transition-transform hover:scale-105"
					to="/"
				>
					Le Blog
				</router-link>
			</div>
			<div class="flex flex-shrink-0 items-center gap-5 pr-4">
				<HeaderLink to="/">Home</HeaderLink>
				<HeaderLink to="/about">About</HeaderLink>
				<HeaderLink to="/blog">Blog</HeaderLink>
				<div class="flex gap-5 px-2" v-if="authenticated === true">
					<HeaderLink to="/admin" className="">Admin Page</HeaderLink>
					<div>Logout</div>
				</div>
				<div class="flex flex-col items-center px-4">
					<div
						class="text-center text-xs before:content-['Light_Mode'] dark:before:content-['Dark_Mode']"
					></div>
					<label class="relative flex cursor-pointer items-center">
						<input
							class="hidden"
							type="checkbox"
							@change="toggleDark"
							:checked="checked"
						/>
						<div
							class="absolute left-0 right-0 h-2 rounded-full bg-stone-400 dark:bg-orange-300"
						/>
						<div
							class="z-20 h-5 w-5 -translate-x-3 cursor-pointer select-none rounded-full bg-stone-600 shadow-sm transition-all dark:translate-x-3 dark:bg-orange-500"
						/>
					</label>
				</div>
			</div>
		</nav>
		<div
			class="flex flex-grow flex-col items-center justify-center gap-2"
			v-if="loading"
		>
			<div class="animate-pulse">Loading...</div>
			<Loader class="" />
		</div>
		<div class="flex flex-grow" v-if="loading === false">
			<router-view v-slot="{ Component }">
				<transition name="fade">
					<component
						:is="Component"
						:authenticated="authenticated"
						:setAuthenticated="setAuthenticated"
					/>
				</transition>
			</router-view>
		</div>
		<footer class="pt-12">
			<div class="flex bg-stone-900 px-2 py-2 text-stone-100">Footer</div>
		</footer>
	</main>
</template>
