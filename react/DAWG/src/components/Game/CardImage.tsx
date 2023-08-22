import { useEffect, useState } from "react";
import { cn } from "../../util";

interface GameImageProps extends React.ComponentPropsWithoutRef<"img"> {
	image: string;
}

type CardImageProps = {
	images: RawgGameScreenshot[];
	name: string;
};

export default function CardImage({ images, name }: CardImageProps) {
	const [index, setIndex] = useState(1);
	const [isHovered, setIsHovered] = useState(false);

	function GameImage({ image, className }: GameImageProps) {
		return (
			<img
				className={cn(
					className,
					"w-full h-40 object-cover bg-orange-400 flex items-center justify-center text-center font-extrabold text-xl text-gray-800"
				)}
				src={image}
				alt={name}
			/>
		);
	}

	function HoveredImage() {
		const prev = images[index ? index - 1 : images.length - 1].image;
		const main = images[index].image;

		useEffect(() => {
			const timeout = setTimeout(() => {
				setIndex(index == images.length - 1 ? 1 : index + 1);
			}, 3000);

			return () => {
				clearTimeout(timeout);
			}
		}, [index]);

		return (
			<div className="relative">
				<GameImage image={main} />
				<GameImage
					image={prev}
					className={cn(
						"absolute top-0 left-0 opacity-0 animate-fade-out z-20"
					)}
				/>
			</div>
		);
	}

	return (
		<div
			className="rounded-t-xl overflow-hidden"
			onMouseOver={() => {
				setIsHovered(true);
			}}
			onMouseEnter={() => {
				setIsHovered(true);
			}}
			onMouseLeave={() => {
				setIsHovered(false);
				setIndex(1);
			}}
			onMouseOut={() => {
				setIsHovered(false);
				setIndex(1);
			}}
		>
			{isHovered && <HoveredImage /> }
			{!isHovered && <GameImage image={images[0].image} /> }
		</div>
	);
}
