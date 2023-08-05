const overlay = document.createElement("div");
overlay.id = "winnerScreen";
overlay.className =
	"fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center invisible \
	[&:target]:visible ";
overlay.innerHTML = `<div class="bg-white p-4 rounded-lg shadow-lg">
		<h1 class="text-2xl font-bold">Game Over</h1>
		<p class="text-lg">The winner is <span class="font-bold text-red-600" id="winnerText"></span></p>
		<div class="flex gap-x-4 mt-2">
			<a href="/" class="text-center text-blue-600">Play Again?</a>
			<a href="#" class="text-center text-red-600">Close</a>
		</div>
	</div>`;

export default overlay;
