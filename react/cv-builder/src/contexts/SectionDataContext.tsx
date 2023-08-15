import { createContext, useContext } from "react";

export type SectionDataContextProps<T> = {
	data: T;
	updateCVHandler: (data: T) => void;
	editabilityHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

export function createSectionDataContext<T>() {
	const context = createContext<SectionDataContextProps<T> | null>(null);
	function useSectionDataContext() {
		const currentContext = useContext(context);
		if (!currentContext)
			throw new Error(
				"useSectionDataContext must be used within a SectionDataContextProvider"
			);
		return currentContext;
	}
	return { SectionDataContext: context, useSectionDataContext };
}
