import { createSectionDataContext } from "./SectionDataContext";

const {
	SectionDataContext: EducationDataContext,
	useSectionDataContext: useEducationDataContext,
} = createSectionDataContext<CVEducation>();

export default EducationDataContext;

export { useEducationDataContext };
