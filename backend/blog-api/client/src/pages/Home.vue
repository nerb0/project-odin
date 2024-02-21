<template>
	<div class="flex flex-grow items-center justify-center gap-4 px-40">
		<div class="flex flex-grow flex-col items-start gap-4 py-10">
			<h1 class="text-8xl font-bold">Le Blog</h1>
			<div class="font-extralight italic text-stone-300">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
				dolore aliquam recusandae aut officia. Pariatur in commodi sequi sed
				libero ratione animi labore? Illo voluptatum cupiditate consequatur
				quasi harum aliquid.
			</div>
			<RouterLink
				to="/blog"
				class="group flex items-center rounded-md bg-amber-400 px-6 py-2 text-xl font-bold text-stone-800 transition-transform hover:scale-105"
			>
				<div>Check Blogs</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 24 24"
					class="h-6 w-6 max-w-0 transition-[max-width] group-hover:ml-2 group-hover:max-w-6"
				>
					<g fill="none">
						<path
							d="M13.704 4.284a1 1 0 1 0-1.403 1.424L17.67 11H4a1 1 0 1 0 0 2h13.665L12.3 18.285a1 1 0 0 0 1.403 1.424l6.925-6.822a1.25 1.25 0 0 0 0-1.78l-6.925-6.823z"
							fill="currentColor"
						></path>
					</g>
				</svg>
			</RouterLink>
		</div>
		<img src="/le_blog.svg" class="w-[400px]" />
	</div>
</template>
