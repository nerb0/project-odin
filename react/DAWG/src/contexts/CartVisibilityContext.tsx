import { createContext, useContext } from "react";

type CartVisibilityContextProps = {
	isOpen: boolean;
	setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartVisibilityContext =
	createContext<CartVisibilityContextProps | null>(null);

export function useCartVisibilityContext() {
	const context = useContext(CartVisibilityContext);
	if (!context)
		throw new Error(
			"useCartVisibilityContext must be used inside CartVisibilityContextProvider"
		);
	return context;
}
