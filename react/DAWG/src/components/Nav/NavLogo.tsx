import { useEffect, useState } from "react";

export default function NavLogo({ link = "#" }: { link?: string }) {
	const [hover, setHover] = useState(false);
	const [image, setImage] = useState("/dog.png");

	return (
		<a
			href={link}
			className="relative flex items-center justify-center select-none h-10 w-10"
			draggable={false}
		>
			<img
				onMouseLeave={() => {
					setHover(false);
					setImage("/dog.png");
				}}
				onMouseOver={() => {
					setHover(true);
					setImage("/dog_happy.png");
				}}
				onMouseDown={() => setImage("/dog_wink.png")}
				onMouseUp={() => {
					setImage(hover ? "/dog_happy.png" : "/dog.png");
				}}
				src={image}
				className="h-full text-2xl font-extrabold peer"
				alt="#"
				draggable={false}
			/>
			<div
				className="absolute h-full w-full pointer-events-none rotate-90 opacity-0 transition-[opacity,transform] duration-200 ease-in-out origin-center 
					peer-hover:rotate-0 peer-hover:opacity-100"
				draggable={false}
			>
				<div className="relative w-full h-full flex items-center justify-center">
					<span className="absolute -right-[7rem] font-extrabold text-3xl text-orange-400 [text-shadow:3px_2px_2px_#111]">
						DAWG
					</span>
				</div>
			</div>
		</a>
	);
}
