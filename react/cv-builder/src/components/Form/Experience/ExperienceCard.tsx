import { useEffect, useState } from "react";
import { useCVContext } from "../../../contexts/CVContext";
import FormCard from "./ExperienceForm";
import DetailCard from "./ExperienceDetail";
import ExperienceDataContext from "../../../contexts/ExperienceDataContext";
import { useSectionEditHandlerContext } from "../../../contexts/SectionEditabilityContext";

type CardProps = {
	data: CVExperience;
};

export default function Card({ data: experience }: CardProps) {
	const { sectionEditHandlers, setSectionEditHandlers } =
		useSectionEditHandlerContext();
	const { info, cvHandler: setCVInfo } = useCVContext();
	const [editable, editabilityHandler] = useState(false);

	useEffect(() => {
		sectionEditHandlers.push(editabilityHandler);
		setSectionEditHandlers(sectionEditHandlers);
	}, []);

	function updateCVHandler(newData: CVExperience) {
		setCVInfo({
			...info,
			experiences: info.experiences.map((exp) =>
				exp.id === newData.id ? { ...newData, id: exp.id } : exp
			),
		});
	}

	return (
		<ExperienceDataContext.Provider
			value={{ data: experience, updateCVHandler, editabilityHandler }}
		>
			{editable ? <FormCard /> : <DetailCard />}
		</ExperienceDataContext.Provider>
	);
}
