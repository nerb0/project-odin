import SectionEditContext from "../../../contexts/SectionEditabilityContext";
import EducationCard from "./EducationCard";

export default function EducationList({ data }: { data: CVEducation[] }) {
	return (
		<SectionEditContext>
			<div className="[&>div]:border-b-gray-400 [&>:not(:last-child)]:border-b">
				{data.map((education) => (
					<EducationCard key={education.id} data={education} />
				))}
			</div>
		</SectionEditContext>
	);
}
