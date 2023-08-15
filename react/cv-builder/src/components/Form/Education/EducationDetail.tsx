import { format } from "date-fns";
import { useState } from "react";
import { useEducationDataContext } from "../../../contexts/EducationDataContext";
import ChevDownIcon from "../../../icons/ChevronDown";
import PencilIcon from "../../../icons/Pencil";
import VisibilityToggle from "../../VisibilityToggle";
import { useSectionEditHandlerContext } from "../../../contexts/SectionEditabilityContext";

export default function DetailCard() {
	const { sectionEditHandlers } = useSectionEditHandlerContext();
	const {
		data,
		updateCVHandler: updateCV,
		editabilityHandler: setEditable,
	} = useEducationDataContext();
	const [open, setOpen] = useState(false);

	function handleVisibility(visibility: boolean) {
		updateCV({ ...data, visible: visibility });
	}

	return (
		<div className="flex flex-col relative">
			<div className="flex items-center absolute top-4 right-4 gap-x-4 select-none">
				<PencilIcon
					className="cursor-pointer hover:scale-105 h-4 fill-gray-800"
					onClick={() => {
						for (const sectionSetEditable of sectionEditHandlers) {
							sectionSetEditable(false);
						}
						setEditable(true);
					}}
				/>
				<VisibilityToggle
					className="cursor-pointer hover:scale-105 h-4 fill-gray-800"
					visible={data.visible}
					onClick={() => handleVisibility(!data.visible)}
				/>
				<ChevDownIcon
					className={`fill-gray-700 cursor-pointer hover:scale-105 hover:fill-gray-800 transition-transform h-4
						${open && "rotate-180"}`}
					onClick={() => setOpen(!open)}
				/>
			</div>
			<div
				className={`flex items-center gap-x-2 px-2 transition-[padding] ${open ? "pt-2" : "py-2"
					}`}
			>
				<h4 className="text-xl font-bold">{data.university}</h4>
				{open && (
					<span className="text-sm animate-slide-right">
						<span>{format(data.start, "MM/yyyy")}</span>
						<span className="mx-2">-</span>
						<span>
							{data.end instanceof Date
								? format(data.end, "MM/yyyy")
								: "present"}
						</span>
					</span>
				)}
			</div>
			<div
				className={`transition-[max-height] overflow-hidden px-2 pb-1 text-sm
					${open ? "max-h-64" : "max-h-0"}`}
			>
				<div>{data.address}</div>
				<div>{data.degree}</div>
			</div>
		</div>
	);
}
