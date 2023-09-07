const overlay = document.createElement("div");
overlay.id = "modal";
overlay.className =
	"fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center invisible \
	[&:target]:visible z-50";
overlay.innerHTML = `<div class="bg-white p-4 rounded-lg shadow-lg gap-y-4 flex flex-col items-center">
		<h1 class="text-4xl font-bold">Game Over</h1>
		<p class="text-xl">The winner is <span class="font-bold text-red-600" id="winnerText"></span></p>
		<div class="flex gap-x-6 mt-2">
			<a href="/" class="text-center text-blue-600 hover:underline">Play Again?</a>
			<a href="#" class="text-center text-red-600 hover:underline">Close</a>
		</div>
	</div>`;

export default overlay;
