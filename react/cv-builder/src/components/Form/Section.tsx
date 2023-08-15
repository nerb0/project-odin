import { useEffect, useState } from "react";
import { useFormSectionVisibilityContext } from "../../contexts/SectionVisibilityContext";

type Props = {
	title: string;
	children: React.ReactNode;
};

function Section({ children, title }: Props) {
	const { sectionHandlers, setSections } = useFormSectionVisibilityContext();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		sectionHandlers.push(setOpen);
		setSections(sectionHandlers);
	}, []);

	return (
		<div className="flex flex-col rounded-md shadow-md my-4 overflow-clip hover:shadow-xl">
			<div
				className="p-4 bg-slate-600 text-white font-bold text-2xl cursor-pointer select-none"
				onClick={() => {
					if (!open) {
						for (const sectionSetOpen of sectionHandlers) {
							sectionSetOpen(false);
						}
					}
					setOpen(!open);
				}}
			>
				{title}
			</div>
			<div
				className={`flex flex-col transition-[max-height] duration-700 ease-in-out [&>div]:border-b-gray-400 [&>:not(:last-child)]:border
					${open ? "max-h-[800px]" : "max-h-0"}`}
			>
				{children}
			</div>
		</div>
	);
}

export default Section;
