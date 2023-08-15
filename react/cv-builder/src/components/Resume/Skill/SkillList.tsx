type Props = {
	data: CVSkill[];
};

export default function SkillList({ data: skills }: Props) {
	return (
		<div className="pl-4 flex gap-x-2 [&>:not(:last-child)]:after:content-[','] flex-wrap break-all">
			{skills.map((skill, index) => (
				<div key={index}>{skill.name}</div>
			))}
		</div>
	);
}
