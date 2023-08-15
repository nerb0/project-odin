import { useState } from "react";
import PlusIcon from "../../../icons/Plus";
import CheckIcon from "../../../icons/Check";
import { useCVContext } from "../../../contexts/CVContext";
import uniqid from "uniqid";

type Props = {
	data: CVSkill[];
	addingHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SkillAddForm({
	data: skills,
	addingHandler: setIsAdding,
}: Props) {
	const { info, cvHandler: setCVInfo } = useCVContext();
	const [newSkill, setNewData] = useState("");
	return (
		<div className="flex items-center border-gray-600 border-2 rounded-md group group-focus:outline-sky-400 px-2 py-1 gap-x-2">
			<PlusIcon
				className="fill-red-600 h-4 rotate-45 hover:scale-110 transition-transform cursor-pointer"
				onClick={() => setIsAdding(false)}
			/>
			<input
				type="text"
				placeholder="New Skill"
				className="max-w-[5rem] outline-none"
				onChange={(e) => setNewData(e.target.value)}
			/>
			<CheckIcon
				className="fill-emerald-700 h-4 hover:scale-110 transition-transform cursor-pointer"
				onClick={() => {
					skills.push({ id: uniqid(), name: newSkill });
					setCVInfo({
						...info,
						skills,
					});
					setIsAdding(false);
				}}
			/>
		</div>
	);
}
