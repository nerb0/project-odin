import { InputHTMLAttributes } from "react";

interface Props
	extends React.DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label: string;
}

export default function FormInput({ id, label, ...props }: Props) {
	return (
		<div className="flex flex-col">
			<label className="text-xs mb-1" htmlFor={id}>
				{label}:
			</label>
			<input id={id} {...props} />
		</div>
	);
}
