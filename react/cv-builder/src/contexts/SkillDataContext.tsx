import { createSectionDataContext } from "./SectionDataContext";

const {
	SectionDataContext: SkillDataContext,
	useSectionDataContext: useSkillDataContext,
} = createSectionDataContext<CVSkill>();

export default SkillDataContext;

export { useSkillDataContext };
