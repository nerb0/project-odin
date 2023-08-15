import { useEffect, useState } from "react";
import { useCVContext } from "../../../contexts/CVContext";
import SkillDataContext from "../../../contexts/SkillDataContext";
import SkillDetail from "./SkillDetail";
import SkillForm from "./SkillForm";
import { useSectionEditHandlerContext } from "../../../contexts/SectionEditabilityContext";

type Props = {
	data: CVSkill;
	isEditable?: boolean;
};

export default function Card({ data: skill, isEditable = false }: Props) {
	const { info, cvHandler: setCVInfo } = useCVContext();
	const [editable, editabilityHandler] = useState(isEditable);
	const { setSectionEditHandlers, sectionEditHandlers } =
		useSectionEditHandlerContext();

	useEffect(() => {
		sectionEditHandlers.push(editabilityHandler);
		setSectionEditHandlers(sectionEditHandlers);
	}, [])

	function updateCVHandler(newData: CVSkill) {
		setCVInfo({
			...info,
			skills: info.skills.map((s) =>
				s.id === skill.id ? { ...newData, id: s.id } : s
			),
		});
	}

	return (
			<SkillDataContext.Provider
				value={{ data: skill, updateCVHandler, editabilityHandler }}
			>
				{editable ? <SkillForm /> : <SkillDetail />}
			</SkillDataContext.Provider>
	);
}
