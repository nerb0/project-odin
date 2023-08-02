export default `<div class="flex gap-x-2 text-cyan-950 [&_*]:animate-pulse"> <div class="h-fit w-fit">
	<div class="h-32 w-32 rounded-md bg-sky-500"></div>
	</div>
	<div class="relative flex-1 flex flex-col gap-y-2">
	<div class="h-10 w-60 rounded-md bg-sky-500"></div>
	<div class="h-20 w-48 rounded-md bg-sky-600"></div>
	</div>
	<div class="flex flex-col items-end gap-y-2">
	<div class="h-9 w-24 rounded-md bg-sky-500"></div>
	<div class="h-8 w-16 rounded-md bg-sky-500"></div>
	</div>
	</div>
	<div class="relative p-2 rounded-md bg-sky-400">
	<div class="absolute -top-4 left-4 rounded-full animate-pulse h-8 w-32 bg-sky-600"></div>
	<div class="flex mt-4 gap-x-2">
	${Array.from(new Array(7))
    .map(
      (_, idx) =>
        `<div class="rounded-md items-center flex flex-col gap-y-1 p-1 flex-1 animate-pulse animate-[pulse_${
          (idx + 1) * 2
        }s_cubic-bezier(0.4,0,0.6,1)_infinite]">
	<div class="w-full h-auto aspect-square rounded-md bg-sky-600/80"></div>
	<div class="h-6 w-full rounded-md bg-sky-500/80"></div>
	<div class="h-4 w-4/5 rounded-md bg-sky-500/70"></div>
	</div>`
    )
    .join("")}
	</div>
	</div>
`;
