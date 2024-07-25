import { cn } from "~/helpers/util";

export const SpinLoader = function SpinLoader({ class: className, ...props }) {
	return (
		<span
			class={cn(
				"h-2 max-h-0 w-2 max-w-0 animate-spin rounded-full border-dashed border-gray-300 transition-[max-width]",
				className,
			)}
			{...props}
		></span>
	);
};
