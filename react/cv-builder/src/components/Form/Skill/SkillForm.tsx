import { useSkillDataContext } from "../../../contexts/SkillDataContext";
import CheckIcon from "../../../icons/Check";

export default function SkillForm() {
	const {
		data: skill,
		editabilityHandler: setEditable,
		updateCVHandler: updateCV,
	} = useSkillDataContext();
	return (
		<div className="flex items-center border-gray-600 border-2 rounded-md group group-focus:outline-sky-400 px-2 py-1 gap-x-2">
			<input
				className="text-gray-950 flex-1 outline-none group bg-transparent w-fit max-w-[6rem] text-center"
				value={skill.name}
				onChange={(e) => updateCV({ name: e.target.value, id: skill.id })}
				onSubmit={() => setEditable(false)}
			/>
			<CheckIcon
				className="h-3 cursor-pointer fill-emerald-700"
				onClick={() => setEditable(false)}
			/>
		</div>
	);
}
