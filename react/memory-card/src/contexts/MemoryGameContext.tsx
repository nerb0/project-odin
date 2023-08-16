import { createContext, useContext } from "react";

type MemoryGameContextProps = {
	game: MemoryGame;
	dispatch: React.Dispatch<GameCardAction>;
};

export const MemoryGameContext = createContext<MemoryGameContextProps | null>(null);

export function useMemoryGameContext() {
	const context = useContext(MemoryGameContext);
	if (!context) {
		throw new Error(
			"useGameCardContext must be used within a GameCardContextProvider"
		);
	}
	return context;
}
