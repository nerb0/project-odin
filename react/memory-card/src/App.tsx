import { useEffect, useState } from "react";
import GameCards from "./GameCards";
import MemoryGame from "./components/MemoryGame";

function App() {
	return (
		<div className="bg-gray-500 p-2">
			<MemoryGame cards={GameCards} />;
		</div>
	);
}

export default App;
