import { useReducer } from "react";
import { MemoryGameContext } from "../contexts/MemoryGameContext";
import Card from "./Card";
import { shuffle } from "../util";

function reducer(state: MemoryGame, action: GameCardAction): MemoryGame {
	function resetCards() {
		return state.cards.map((card) => ({ ...card, clicked: false }));
	}

	switch (action.type) {
		case "set_clicked":
			const cards = [];
			for (const card of state.cards) {
				if (card.id == action.id) {
					if (card.clicked) {
						return { ...state, isOver: true };
					} else {
						card.clicked = true;
					}
				}
				cards.push(card);
			}
			return {
				...state,
				score: state.score + 1,
				cards: shuffle(cards),
			};
		case "shuffle":
			return { ...state, cards: shuffle(state.cards) };
		case "reset":
			return { isOver: false, score: 0, cards: shuffle(resetCards()) };
		default:
			throw new Error("Invalid action type");
	}
}

export default function MemoryGame({ cards }: { cards: GameCard[] }) {
	const [game, dispatch] = useReducer(reducer, {
		cards,
		isOver: false,
		score: 0,
	});
	return (
		<>
			{game.isOver && (
				<div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen min-h-[900px] bg-gray-800/40 z-30">
					<div
						className="px-4 py-1 rounded-md bg-emerald-500 text-lg cursor-pointer font-bold text-white hover:bg-emerald-600"
						onClick={() => {
							dispatch({ type: "reset" });
						}}
					>
						Try Again
					</div>
				</div>
			)}
			<div className="text-center text-lg font-bold mb-4">
				Score: {game.score}
			</div>
			<div className="flex gap-4 flex-wrap">
				<MemoryGameContext.Provider value={{ game, dispatch }}>
					{game.cards.map((card) => (
						<Card key={card.id} {...card} />
					))}
				</MemoryGameContext.Provider>
			</div>
		</>
	);
}
