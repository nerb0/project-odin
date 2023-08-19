import { useEffect, useRef, useState } from "react";
import { cn } from "../../../util";
import { useNavSectionOpenContext } from "../../../contexts/NavSectionOpenHandler";

type Props = {
	children: React.ReactNode;
	title: string;
};

export default function NavSection({ children, title }: Props) {
	const { sectionHandlers, setSectionHandlers } = useNavSectionOpenContext()
	const [open, setOpen] = useState(false);

	useEffect(() => {
		sectionHandlers.push(setOpen);
		setSectionHandlers(sectionHandlers);
	}, [])

	return (
		<div className="flex flex-col gap-y-1 w-48 text-white">
			<h4
				className="font-extrabold text-2xl cursor-pointer"
				onClick={() => {
					if (!open) {
						for (const sectionSetOpen of sectionHandlers) {
							sectionSetOpen(false)
						}
					}
					setOpen(!open)
				}}
			>
				{title}
			</h4>
			<div className="text-lg flex flex-col gap-y-1 pl-2 transition-[max-height]">
				{open && children}
			</div>
		</div>
	);
}
