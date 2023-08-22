import { createContext, useContext, useEffect, useState } from "react";

type CartItemContextProps = {
	items: CartItem[];
	setCartItems: (items: CartItem[]) => void;
};

const Context = createContext<CartItemContextProps | null>(null);

export function useCartItemsContext() {
	const contextValue = useContext(Context);
	if (!contextValue)
		throw new Error(
			"useCartItemsContext must be used inside CartItemsContextProvider"
		);
	return contextValue;
}

export function CartItemsContext({ children }: { children: React.ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([]);

	function setCartItems(newItems: CartItem[]) {
		localStorage.setItem("cartItems", JSON.stringify(newItems));
		setItems(newItems);
	}

	useEffect(() => {
		const result = localStorage.getItem("cartItems");
		if (result) {
			try {
				const cartItems = JSON.parse(result) as CartItem[];
				setItems(cartItems);
			} catch (err) {
				localStorage.removeItem("cartItems");
				console.error(err);
			}
		}
	}, []);

	return (
		<Context.Provider value={{ items, setCartItems }}>
			{children}
		</Context.Provider>
	);
}
