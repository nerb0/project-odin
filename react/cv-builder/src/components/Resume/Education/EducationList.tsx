import EducationResumeCard from "./EducationCard";

type Props = {
	data: CVEducation[];
};

export default function EducationList({ data: education }: Props) {
	return (
		<div className="pl-4">
			{education.map((edu) => (
				<EducationResumeCard key={edu.id} data={edu} />
			))}
		</div>
	);
}
