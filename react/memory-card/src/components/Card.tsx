import { useEffect, useState } from "react";
import { useMemoryGameContext } from "../contexts/MemoryGameContext";

export default function Card({ id, image, name, clicked = false }: GameCard) {
	const { game, dispatch } = useMemoryGameContext();

	return (
		<div
			className="flex flex-col w-64 h-96 overflow-clip rounded-md bg-amber-600 items-center shadow-md"
			onClick={() => {
				dispatch({ type: "set_clicked", id });
			}}
		>
			<img src={image} alt={name} className="flex-1 w-full object-cover" />
			<span className="text-lg text-white font-extrabold py-2">{name}</span>
			<span>{`${clicked}`}</span>
		</div>
	);
}
