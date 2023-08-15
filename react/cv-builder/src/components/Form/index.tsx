import { useCVContext } from "../../contexts/CVContext";
import AddressInput from "./Bio/AddressInput";
import EmailInput from "./Bio/EmailInput";
import NameInput from "./Bio/NameInput";
import PhoneInput from "./Bio/PhoneInput";
import Section from "./Section";
import SkillList from "./Skill/SkillList";
import EducationList from "./Education/EducationList";
import ExperienceList from "./Experience/ExperienceList";
import { SectionVisibilityContext } from "../../contexts/SectionVisibilityContext";

export default function Form() {
	const { info } = useCVContext();
	return (
		<div className="shadow-xl z-10">
			<div className="flex flex-col p-4 text-cyan-950">
				<div className="flex flex-col rounded-md shadow-md my-4 overflow-clip">
					<div className="p-4 bg-slate-600 text-white font-bold text-xl">
						Personal Details
					</div>
					<div className="p-3 flex flex-col">
						<NameInput />
						<EmailInput />
						<PhoneInput />
						<AddressInput />
					</div>
				</div>
				<SectionVisibilityContext>
					<Section title="Experiences">
						<ExperienceList data={info.experiences} />
					</Section>
					<Section title="Education">
						<EducationList data={info.education} />
					</Section>
					<Section title="Skills">
						<SkillList data={info.skills} />
					</Section>
				</SectionVisibilityContext>
			</div>
		</div>
	);
}
