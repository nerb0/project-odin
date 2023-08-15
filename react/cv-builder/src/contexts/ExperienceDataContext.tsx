import { createSectionDataContext } from "./SectionDataContext";

const {
	SectionDataContext: ExperienceDataContext,
	useSectionDataContext: useExperienceDataContext,
} = createSectionDataContext<CVExperience>();

export default ExperienceDataContext;

export { useExperienceDataContext };
