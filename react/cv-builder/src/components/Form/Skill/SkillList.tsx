import SectionEditabilityContext from "../../../contexts/SectionEditabilityContext";
import SkillAdd from "./SkillAdd";
import SkillCard from "./SkillCard";

type Props = {
	data: CVSkill[];
};

export default function SkillList({ data: skills }: Props) {
	return (
		<SectionEditabilityContext>
			<div className="flex p-2 gap-y-2 gap-x-4 flex-wrap justify-center items-center">
				{skills.map((skill) => (
					<SkillCard key={skill.id} data={skill} />
				))}
				<SkillAdd data={skills} />
			</div>
		</SectionEditabilityContext>
	);
}
