import { createContext, useContext, useState } from "react";

type SectionHandler = React.Dispatch<React.SetStateAction<boolean>>;

const FormSectionVisibilityContext = createContext<{
	sectionHandlers: SectionHandler[];
	setSections: React.Dispatch<React.SetStateAction<SectionHandler[]>>;
}>({ sectionHandlers: [], setSections: () => {} });

export function useFormSectionVisibilityContext() {
	const context = useContext(FormSectionVisibilityContext);
	if (!context)
		throw new Error(
			"useFormSectionContext must be used within a FormSectionContextProvider"
		);
	return context;
}

export function SectionVisibilityContext({
	children,
}: {
	children: React.ReactNode;
}) {
	const [sectionHandlers, setSections] = useState<SectionHandler[]>([]);
	return (
		<FormSectionVisibilityContext.Provider
			value={{ sectionHandlers, setSections }}
		>
			{children}
		</FormSectionVisibilityContext.Provider>
	);
}
