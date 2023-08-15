import { format } from "date-fns";

type CardProps = {
	data: CVEducation;
};

export default function EducationResumeCard({ data }: CardProps) {
	return (
		data.visible && (
			<div className="flex flex-col my-2">
				<header>
					<div className="flex items-center gap-x-2">
						<h3 className="text-lg font-bold">{data.university}</h3>
						<div>•</div>
						<div className="flex gap-x-2 text-sm italic">
							<div>{format(data.start, "MM/yyyy")}</div>
							<div>-</div>
							<div>
								{data.end == "present"
									? "present"
									: format(data.end, "MM/yyyy")}
							</div>
						</div>
					</div>
				</header>
				<div className="pl-4">
					<div>{data.degree}</div>
					<div>{data.address}</div>
				</div>
			</div>
		)
	);
}
