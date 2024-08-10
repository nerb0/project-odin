<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useToast } from "vue-toastification";
import Footer from "./components/Footer.vue";
import HeaderLink from "./components/HeaderLink.vue";
import ModalConfirmLogout from "./components/ModalConfirmLogout.vue";
import {
	TOAST_ERROR_OPTIONS,
	TOAST_SUCCESS_OPTIONS,
	httpRequest,
} from "./util";
import { useRouter } from "vue-router";

const isDarkMode = localStorage.getItem("isDarkMode");
const authenticated = ref(null as null | Boolean);
const loading = ref(false);
const showLogout = ref(false);
const logoutLoading = ref(false);
const toast = useToast();
const checked =
	isDarkMode !== null
		? isDarkMode === "true"
		: window.matchMedia("(prefers-color-scheme: dark)").matches;
const abortController = new AbortController();
const router = useRouter();

onBeforeUnmount(function () {
	abortController.abort();
});
onMounted(function () {
	document.documentElement.classList.toggle("dark", checked);
	authenticateUser();
});

async function logout() {
	logoutLoading.value = true;
	try {
		const { data, message } = await httpRequest<{ loggedOut: boolean }>(
			"/auth/logout",
			{ signal: abortController.signal, method: "POST" },
		);
		if (data?.loggedOut) {
			authenticated.value = !data.loggedOut;
			showLogout.value = false;
			toast(message, TOAST_SUCCESS_OPTIONS);
			router.push("/admin");
		} else {
			toast(message, TOAST_ERROR_OPTIONS);
		}
	} catch (error) {
		toast((error as Error).message, TOAST_ERROR_OPTIONS);
	}
	logoutLoading.value = false;
}

async function authenticateUser() {
	authenticated.value = null;
	loading.value = true;
	try {
		const { data } = await httpRequest<{ authenticated: boolean }>(
			"/auth/verify",
			{ signal: abortController.signal, method: "POST" },
		);
		if (data) {
			authenticated.value = data.authenticated;
		} else {
			authenticated.value = false;
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
				<div class="flex items-center gap-5 px-2" v-if="authenticated === true">
					<HeaderLink to="/admin" className="">Admin Page</HeaderLink>
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
				<svg
					v-if="authenticated === true"
					title="Logout"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 512 512"
					class="h-5 w-5 origin-center cursor-pointer text-red-500 transition-all hover:scale-110 hover:text-red-700"
					@click="showLogout = true"
				>
					<path
						d="M400 54.1c63 45 104 118.6 104 201.9c0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4C7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31c-41.5 30.8-68 79.6-68 134.9c-.1 92.3 74.5 168.1 168 168.1c91.6 0 168.6-74.2 168-169.1c-.3-51.8-24.7-101.8-68.1-134c-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
						fill="currentColor"
					></path>
				</svg>
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
		<Footer />
		<ModalConfirmLogout
			v-model="showLogout"
			@confirm="logout"
			@cancel="showLogout = false"
		>
			<p>Do you really want to delete this post?</p>
		</ModalConfirmLogout>
		<div
			class="fixed left-0 top-0 flex h-screen w-screen flex-grow flex-col items-center justify-center gap-2"
			v-if="logoutLoading"
		>
			<div class="animate-pulse">Logging out...</div>
			<Loader class="" />
		</div>
	</main>
</template>
