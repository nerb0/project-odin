import { useCVContext } from "../../contexts/CVContext";
import EmailFilledIcon from "../../icons/EmailRound";
import LocationIcon from "../../icons/Location";
import PhoneIcon from "../../icons/Phone";
import EducationList from "./Education/EducationList";
import ExperienceList from "./Experience/ExperienceList";
import ResumeSection from "./ResumeSection";
import SkillList from "./Skill/SkillList";

export default function Resume() {
	const { info } = useCVContext();

	return (
		<div className="p-4 bg-gray-100">
			<div className="bg-white w-full h-[1100px] py-4 px-6 flex flex-col gap-y-1">
				<h1 className="text-3xl text-center font-extrabold text-cyan-950">
					{info.bio.name}
				</h1>
				<div className="flex justify-center gap-x-4 text-md [&>div]:flex [&>div]:items-center [&>div]:gap-x-1">
					<div className="flex items-center">
						<EmailFilledIcon className="h-4 fill-gray-800" />
						<a className="text-blue-900" href={`mailto:${info.bio.email}`}>
							{info.bio.email}
						</a>
					</div>
					<div>|</div>
					<div className="flex items-center gap-x-2">
						<PhoneIcon className="h-[13px] fill-gray-800" />
						<span>{info.bio.phone_number}</span>
					</div>
					<div>|</div>
					<div className="flex items-center">
						<LocationIcon className="h-4 fill-cyan-950" />
						<span>{info.bio.address}</span>
					</div>
				</div>
				<div className="w-full h-[2px] rounded-lg bg-slate-600 my-2"></div>
				<div className="[&>div]:border-b-gray-400 [&>:not(:last-child)]:border-b-2">
					<ResumeSection title="Experience">
						<ExperienceList data={info.experiences} />
					</ResumeSection>
					<ResumeSection title="Education">
						<EducationList data={info.education} />
					</ResumeSection>
					<ResumeSection title="Skills">
						<SkillList data={info.skills} />
					</ResumeSection>
				</div>
			</div>
		</div>
	);
}
