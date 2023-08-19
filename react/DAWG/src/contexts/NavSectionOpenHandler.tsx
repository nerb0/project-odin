import { createContext, useContext } from "react";

export type SectionOpenHandler = React.Dispatch<React.SetStateAction<boolean>>;

type NavSectionOpenHandlerContextProps = {
	sectionHandlers: SectionOpenHandler[];
	setSectionHandlers: React.Dispatch<
		React.SetStateAction<SectionOpenHandler[]>
	>;
};

export const NavSectionOpenHandlerContext = createContext<NavSectionOpenHandlerContextProps | null>(null);

export function useNavSectionOpenContext() {
	const context = useContext(NavSectionOpenHandlerContext);
	if (!context) {
		throw new Error(
			`useNavSectionOpenContext must be used within a NavSectionOpenHandlerContext`
		);
	}
	return context;
}
