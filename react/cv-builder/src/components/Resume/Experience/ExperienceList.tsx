import ExperienceResumeCard from "./ExperienceCard";

type Props = {
	data: CVExperience[];
};

export default function ExperienceList({ data: experience }: Props) {
	return (
		<div className="pl-4">
			{experience.map((exp) => (
				<ExperienceResumeCard key={exp.id} data={exp} />
			))}
		</div>
	);
}
