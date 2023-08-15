type Props = {
	title: string;
	children: React.ReactNode;
};

export default function ResumeSection({ title, children }: Props) {
	return (
		<div className="p-2">
			<h2 className="font-extrabold text-2xl mb-1">{title}</h2>
			{children}
		</div>
	);
}
