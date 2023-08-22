import { useEffect, useRef } from "react";
import { useCartItemsContext } from "../contexts/CartItemsContext";
import { useCartVisibilityContext } from "../contexts/CartVisibilityContext";
import { cn } from "../util";

interface CartButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	children?: React.ReactNode;
}

export function CartButton({ className, children, ...props }: CartButtonProps) {
	return (
		<button {...props} className={cn("h-8", className)}>
			<svg
				className="h-full"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 576 512"
			>
				<path
					d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
					fill="#FFF"
				></path>
			</svg>
			{children}
		</button>
	);
}

export function CartItemList() {
	const { isOpen, setOpened } = useCartVisibilityContext();
	const { items, setCartItems } = useCartItemsContext();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClose(e: MouseEvent) {
			if (e.target == ref.current) {
				setOpened(false);
			}
		}

		const addCloseHandler = setTimeout(() => {
			window.addEventListener("click", handleClose);
		}, 500);

		return () => {
			clearTimeout(addCloseHandler);
			window.removeEventListener("click", handleClose);
		};
	}, []);

	return (
		<div
			className={cn(
				"flex h-screen w-screen fixed top-0 left-0 min-h-[900px] transition-transform z-50 duration-500",
				{
					"translate-x-0": isOpen,
					"translate-x-full": !isOpen,
				}
			)}
		>
			<div ref={ref} className="flex-1"></div>
			<ul className="p-4 h-full bg-slate-700/60 text-white font-bold text-lg w-[30rem] flex flex-col gap-y-1 shadow-xl backdrop-blur">
				{items.map((item) => (
					<li
						key={item.id}
						className="flex relative gap-x-4 p-2 rounded-md bg-orange-600"
					>
						<img
							src={item.image}
							className="w-16 h-16 object-cover rounded-md"
						/>
						<div className="flex-1">{item.name}</div>
						<div className="flex items-center justify-center rounded-md border-white border h-8 w-8">
							{item.quantity}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export function AddToCartButton({ data: game }: { data: RawgGame }) {
	const { items, setCartItems } = useCartItemsContext();

	return (
		<CartButton
			className="flex items-center hover:gap-x-3 px-2 py-1 ml-auto mt-2 rounded-md border border-orange-500 group/button h-7
				hover:border-orange-700 hover:bg-orange-700 transition-all"
			onClick={() => {
				const item = items.find((item) => item.id == game.id);
				if (item) {
					item.quantity += 1;
				} else {
					items.push({
						id: game.id,
						name: game.name,
						slug: game.slug,
						image: game.background_image,
						quantity: 1,
					});
				}
				setCartItems(items);
			}}
		>
			<span className="group-hover/button:max-w-[88px] group-hover/button:h-auto h-0 max-w-0 overflow-hidden whitespace-nowrap transition-[max-width] text-sm">
				Add To Cart
			</span>
		</CartButton>
	);
}
