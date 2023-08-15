import SectionEditabilityContext from "../../../contexts/SectionEditabilityContext";
import PlusIcon from "../../../icons/Plus";
import SkillCard from "./SkillCard";

type Props = {
	data: CVSkill[];
};

export default function SkillList({ data }: Props) {
	return (
		<SectionEditabilityContext>
			<div className="flex p-2 gap-2 flex-wrap justify-center items-center">
				{data.map((skill) => (
					<SkillCard key={skill.id} data={skill} />
				))}
				<PlusIcon
					className="fill-gray-800 bg-gray-200 rounded-full p-2 h-8 w-8 mx-4 hover:bg-gray-400 cursor-pointer"
					onClick={() => {}}
				/>
			</div>
		</SectionEditabilityContext>
	);
}
