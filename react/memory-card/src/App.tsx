import { useEffect, useState } from "react";
import GameCards from "./GameCards";
import MemoryGame from "./components/MemoryGame";
import { shuffle } from "./util";

function App() {
	return (
		<div className="bg-gradient-to-tl from-gray-600 to-gray-700 p-2 h-screen w-screen">
			<MemoryGame cards={shuffle(GameCards).splice(0, 12)} />
		</div>
	);
}

export default App;
