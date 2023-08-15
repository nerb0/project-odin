import SectionEditContext from "../../../contexts/SectionEditabilityContext";
import ExperienceCard from "./ExperienceCard";

type Props = {
	data: CVExperience[];
};

export default function List({ data }: Props) {
	return (
		<SectionEditContext>
			<div className="[&>div]:border-b-gray-400 [&>:not(:last-child)]:border-b">
				{data.map((experience) => (
					<ExperienceCard key={experience.id} data={experience} />
				))}
			</div>
		</SectionEditContext>
	);
}
