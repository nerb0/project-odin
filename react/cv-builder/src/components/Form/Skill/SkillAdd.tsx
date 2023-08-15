import { useState } from "react";
import PlusIcon from "../../../icons/Plus";
import SkillAddForm from "./SkillAddForm";

type Props = {
	data: CVSkill[];
};

export default function SkillAdd({ data: skills }: Props) {
	const [isAdding, setIsAdding] = useState(false);
	return isAdding ? (
		<SkillAddForm data={skills} addingHandler={setIsAdding} />
	) : (
		<PlusIcon
			className="fill-gray-800 bg-gray-200 rounded-full p-2 h-8 w-8 mx-4 hover:bg-gray-400 cursor-pointer"
			onClick={() => {
				setIsAdding(true);
			}}
		/>
	);
}
