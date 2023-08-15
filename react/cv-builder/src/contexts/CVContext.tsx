import { createContext, useContext } from "react";

export const CVContext = createContext<{
	info: CVResume;
	cvHandler: (cvInfo: CVResume) => void;
} | null>(null);

export function useCVContext() {
	const context = useContext(CVContext);
	if (!context) 
		throw new Error("useCVContext must be used within a CVContextProvider");
	return context;
}
