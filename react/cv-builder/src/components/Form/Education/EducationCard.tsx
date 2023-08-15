import { useEffect, useState } from "react";
import { useCVContext } from "../../../contexts/CVContext";
import FormCard from "./EducationForm";
import DetailCard from "./EducationDetail";
import EducationDataContext from "../../../contexts/EducationDataContext";
import { useSectionEditHandlerContext } from "../../../contexts/SectionEditabilityContext";

type CardProps = {
	data: CVEducation;
};

export default function EducationCard({ data: education }: CardProps) {
	const { info, cvHandler: setCVInfo } = useCVContext();
	const [editable, editabilityHandler] = useState(false);
	const { sectionEditHandlers, setSectionEditHandlers } =
		useSectionEditHandlerContext();

	useEffect(() => {
		sectionEditHandlers.push(editabilityHandler);
		setSectionEditHandlers(sectionEditHandlers);
	}, []);

	function updateCVHandler(newData: CVEducation) {
		setCVInfo({
			...info,
			education: info.education.map((edu) =>
				edu.id === education.id ? { ...newData, id: edu.id } : edu
			),
		});
	}

	return (
		<EducationDataContext.Provider
			value={{ data: education, updateCVHandler, editabilityHandler }}
		>
			{editable ? <FormCard /> : <DetailCard />}
		</EducationDataContext.Provider>
	);
}
