<script setup lang="ts">
import HeaderLink from "./components/HeaderLink.vue";

const isDarkMode = localStorage.getItem("isDarkMode");
const checked =
	isDarkMode !== null
		? isDarkMode === "true"
		: window.matchMedia("(prefers-color-scheme: dark)").matches;
document.documentElement.classList.toggle("dark", checked);
function toggleDark(event: Event) {
	const input = event.target as HTMLInputElement;
	document.documentElement.classList.toggle("dark", input.checked);
	localStorage.setItem("isDarkMode", input.checked.toString());
}
</script>
<template>
	<main class="min-h-screen text-stone-900 dark:bg-stone-800 dark:text-stone-100 flex flex-col">
		<nav class="flex">
			<div class="flex flex-grow items-center">
				<router-link
					class="p-4 text-xl font-bold transition-transform hover:scale-105"
					to="/"
					>
					Blog
				</router-link>
			</div>
			<div class="flex flex-shrink-0 items-center gap-5 pr-4">
				<HeaderLink to="/">Home</HeaderLink>
				<HeaderLink to="/about">About</HeaderLink>
				<HeaderLink to="/blog">Blog</HeaderLink>
				<div class="px-4 flex flex-col items-center">
					<div class="text-xs text-center">Dark Mode</div>
					<label class="relative flex cursor-pointer items-center">
						<input
							class="hidden"
							type="checkbox"
							@change="toggleDark"
							:checked="checked"
						/>
						<div
							class="absolute left-0 right-0 h-2 rounded-full bg-stone-400 dark:bg-white"
						/>
						<div
							class="z-20 h-5 w-5 -translate-x-3 cursor-pointer select-none rounded-full bg-stone-600 shadow-sm transition-all dark:translate-x-3 dark:bg-stone-200"
						/>
					</label>
				</div>
			</div>
		</nav>
		<div class="flex-grow flex">
			<router-view v-slot="{ Component }">
				<transition name="fade">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
		<footer class="pt-12">
			<div class="flex py-2 bg-stone-900 text-stone-100 px-2">
				Footer
			</div>
		</footer>
	</main>
</template>
