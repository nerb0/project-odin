import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../util";
import CardImage from "./CardImage";
import { AddToCartButton } from "../Cart";

type Props = {
	data: RawgGame;
};

function GameSection({
	title,
	children,
	className,
}: {
	className?: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex py-3 text-xs flex-1 gap-x-5">
			<span className="text-orange-900 font-bold">{title}:</span>
			<div
				className={cn("flex-1 flex justify-end gap-x-1 flex-wrap", className)}
			>
				{children}
			</div>
		</div>
	);
}

type GamePlatformProps = {
	data: RawgGameParentPlatform[];
};

function GamePlatformList({ data: platforms }: GamePlatformProps) {
	return (
		<div className="flex gap-x-2" title="Platforms">
			{platforms.map(({ platform }) => (
				<img
					key={platform.id}
					title={platform.name}
					className="h-4"
					src={`/${platform.slug}.svg`}
				/>
			))}
		</div>
	);
}

function GameMetascore({ score }: { score: number }) {
	return (
		<div
			className="px-2 py-1 text-xs hover:bg-white hover:text-orange-700 hover:font-bold rounded-md text-white border border-white"
			title="Metascore"
		>
			{score}
		</div>
	);
}

function GameInfo({ data: game }: Props) {
	return (
		<div className="px-4 py-2 gap-y-2 flex flex-col bg-orange-600 rounded-b-xl">
			<div className="flex justify-between">
				<GamePlatformList data={game.parent_platforms} />
				{game.metacritic && <GameMetascore score={game.metacritic} />}
			</div>
			<a
				href={`#${game.name}`}
				className="font-extrabold text-2xl text-white flex-1
					hover:text-orange-200"
			>
				{game.name}
			</a>
			<div
				className="text-white hidden pointer-events-none flex-col
					group-hover:flex group-hover:pointer-events-auto z-50
					[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-b-orange-700"
			>
				<GameSection title="Release Date">
					{format(new Date(game.released), "LLLL d, yyyy")}
				</GameSection>
				<GameSection
					title="Genres"
					className="[&>:not(:last-child):after]:content-[',']"
				>
					{game.genres.map(({ name, id }) => (
						<a key={id} href={`#${name}`} className="underline">
							{name}
						</a>
					))}
				</GameSection>
				<AddToCartButton data={game} />
			</div>
		</div>
	);
}

export default function GameGridCard({ data: game }: Props) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [hover, setHover] = useState(false);
	const [initialHeight, setInitialHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			setInitialHeight(ref.current.clientHeight);
		}

		return () => {
			setHover(false);
		};
	}, [ref]);

	return (
		<div
			onMouseEnter={() => {
				if (ref.current) {
					setHover(true);
					ref.current.style.height = `${initialHeight}px`;
				}
			}}
			onMouseLeave={() => {
				if (ref.current) {
					setHover(false);
					ref.current.removeAttribute("style");
				}
			}}
			ref={ref}
			className={cn(
				"rounded-xl shadow-md bg-orange-600  \
				hover:scale-105 transition-transform duration-[200ms] ease-in-out group",
				{
					// css hover does not work if position is already set
					"z-40": hover,
					"z-0": !hover,
				}
			)}
		>
			<CardImage images={game.short_screenshots} name={game.name} />
			<GameInfo data={game} />
		</div>
	);
}
