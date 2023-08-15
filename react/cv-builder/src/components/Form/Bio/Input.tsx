import { InputHTMLAttributes } from "react";

interface Props
	extends React.DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label: string;
}

export default function TextInput({ id, label, ...props }: Props) {
	return (
		<div className="flex items-center focus-within:outline outline-sky-500 outline-2 rounded-md my-2">
			<label
				className="px-2 py-1 h-full bg-slate-700 text-white border-slate-800 border rounded-l-md w-32 text-right"
				htmlFor={id}
			>
				{label}
			</label>
			<input {...props} className="outline-none px-2 border-gray-400 border flex-1 py-1 invalid:border-red-400" required />
		</div>
	);
}
