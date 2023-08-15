import { format } from "date-fns";

type CardProps = {
	data: CVExperience;
};

export default function ExperienceResumeCard({ data }: CardProps) {
	return (
		data.visible && (
			<div className="flex flex-col my-2">
				<header>
					<div className="flex items-center gap-x-2">
						<h3 className="text-lg font-bold">{data.company}</h3>
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
				<div className="flex flex-col text-sm">
					<div>{data.position}</div>
				</div>
				<ul className="flex flex-col gap-y-1 pl-8 text-sm my-1 list-disc break-words">
					{data.summary.map((description) => (
						<li>{description}</li>
					))}
				</ul>
			</div>
		)
	);
}
