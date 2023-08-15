import { createContext, useContext, useState } from "react";

type SectionEditHandler = React.Dispatch<React.SetStateAction<boolean>>;

export type SectionEditContextProps = {
	sectionEditHandlers: SectionEditHandler[];
	setSectionEditHandlers: React.Dispatch<
		React.SetStateAction<SectionEditHandler[]>
	>;
};

const FormSectionEditContext = createContext<SectionEditContextProps | null>(
	null
);

export function useSectionEditHandlerContext() {
	const currentContext = useContext(FormSectionEditContext);
	if (!currentContext)
		throw new Error(
			"useSectionEditabilityContext must be used within a SectionEditabilityContextProvider"
		);
	return currentContext;
}

export function SectionEditContext({
	children,
}: {
	children: React.ReactNode;
}) {
	const [sectionHandlers, setSections] = useState<SectionEditHandler[]>([]);
	return (
		<FormSectionEditContext.Provider
			value={{
				sectionEditHandlers: sectionHandlers,
				setSectionEditHandlers: setSections,
			}}
		>
			{children}
		</FormSectionEditContext.Provider>
	);
}
export default SectionEditContext;
