<script setup lang="ts">
import HeaderLink from "./components/HeaderLink.vue";
</script>
<template>
	<nav class="flex">
		<div class="flex flex-grow items-center">
			<router-link
				to="/"
				class="p-4 text-xl font-bold transition-transform hover:scale-105"
				>Blog</router-link
			>
		</div>
		<div class="flex flex-shrink-0 items-center gap-3 pr-4">
			<HeaderLink to="/">Home</HeaderLink>
			<HeaderLink to="/about">About</HeaderLink>
			<HeaderLink to="/blog">Blog</HeaderLink>
		</div>
	</nav>
	<router-view v-slot="{ Component }">
		<transition name="fade">
			<component :is="Component" />
		</transition>
	</router-view>
</template>
