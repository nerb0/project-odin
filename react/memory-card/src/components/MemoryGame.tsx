import { useReducer } from "react";
import { MemoryGameContext } from "../contexts/MemoryGameContext";
import { shuffle } from "../util";
import Card from "./Card";
import leagueLogo from "../assets/league-logo.png";

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
						state.isOver = true;
					} else {
						card.clicked = true;
						state.score = state.score + 1;
						if (state.score > state.highScore) {
							state.highScore = state.score;
							localStorage.setItem("x34.f-22f.", state.highScore.toString(16));
						}
						if (state.score == state.cards.length) state.isOver = true;
					}
				}
				cards.push(card);
			}
			return {
				...state,
				cards: shuffle(cards),
			};
		case "shuffle":
			return { ...state, cards: shuffle(state.cards) };
		case "reset":
			return {
				highScore: state.highScore,
				isOver: false,
				score: 0,
				cards: shuffle(resetCards()),
			};
		default:
			throw new Error("Invalid action type");
	}
}

export default function MemoryGame({ cards }: { cards: GameCard[] }) {
	const highScore = localStorage.getItem("x34.f-22f.");
	const [game, dispatch] = useReducer(reducer, {
		cards,
		isOver: false,
		score: 0,
		highScore: highScore ? parseInt(highScore, 16) : 0,
	});

	return (
		<>
			{game.isOver && (
				<div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen min-h-[900px] bg-gray-800/40 z-30">
					<div
						className="px-10 py-2 rounded-md bg-emerald-500 text-3xl cursor-pointer font-bold text-white hover:bg-emerald-600 hover:scale-105 transition-all duration-500"
						onClick={() => {
							dispatch({ type: "reset" });
						}}
					>
						Retry
					</div>
				</div>
			)}
			<div className="relative">
				<img
					src={leagueLogo}
					alt="League of Legends"
					className="font-extrabold text-4xl text-center h-40 mx-auto"
				/>
				<div className="flex flex-col text-center text-3xl font-extrabold  mb-4 text-gray-50 absolute top-4 right-4">
					<div className="flex gap-x-4">
						<span>Score:</span>
						<span>{game.score}</span>
					</div>
					<div className="flex gap-x-4">
						<span>Highscore:</span>
						<span>{game.highScore}</span>
					</div>
				</div>
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
