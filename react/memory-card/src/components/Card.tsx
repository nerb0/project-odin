import { useEffect, useRef, useState } from "react";
import { useMemoryGameContext } from "../contexts/MemoryGameContext";
import Tilt from "./Tilt";

export default function Card({ id, image, name, clicked = false }: GameCard) {
	const { game, dispatch } = useMemoryGameContext();

	return (
		<Tilt
			onClick={() => {
				dispatch({ type: "set_clicked", id });
			}}
		>
			<div className="rounded-md shadow-md hover:shadow-xl">
				<div className="flex flex-col w-64 h-96 overflow-clip rounded-md bg-gradient-to-b from-gray-700 to-gray-600 items-center [&>*]:pointer-events-none">
					<img
						src={image}
						alt={name}
						className="flex-1 w-full object-cover bg-gray-800"
					/>
					<span className="text-lg text-white font-extrabold py-2 bg-gradient-to-r from-gray-900 to-gray-800 w-full text-center">{name}</span>
					{
						// <span>{`${clicked}`}</span>
					}
				</div>
			</div>
		</Tilt>
	);
}
