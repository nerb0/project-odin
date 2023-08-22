import React, { Fragment } from "react";
import { CartItemsContext } from "../../contexts/CartItemsContext";
import GameGridCard from "./GridCard";

type Props = {
	data: RawgGame[][];
};

export default function GameList({ data: games }: Props) {
	return (
		<Fragment>
			{
				games.map((gameList, index) => (
					<div className="flex flex-col gap-4" key={index}>
						{gameList.map((game) => (
							<GameGridCard data={game} key={game.id} />
						))}
					</div>
				))
			}
		</Fragment>
	);
}
