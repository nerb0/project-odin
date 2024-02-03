import { cn } from "~/helpers/util";
import { toast_container_id } from "./Layout";

/** @type {import("@kitajs/html").Component}*/
export const Toast = function ({ children, class: className, props }) {
	return (
		<div hx-swap-oob={`afterbegin:#${toast_container_id}`}>
			<div
				class={cn(
					"relative flex w-96 animate-slide-in cursor-pointer overflow-clip rounded-md border-2 border-transparent bg-white shadow-lg",
					className,
				)}
				onclick={
					/*js*/ `
const toast = this === event.target ? toast : event.target.closest("div[role=toast]");
remove_toast(toast);
`
				}
				role="toast"
			>
				{children}
				<div
					class="absolute bottom-0 left-0 h-[3px] bg-white transition-[width]"
					role="toast-timer"
				></div>
			</div>
		</div>
	);
};

/** @type {import("@kitajs/html").Component<{messages: string[], message: string, class?: import("clsx").ClassValue}>}*/
export const ErrorMessage = function ({
	messages,
	message,
	class: className,
	...props
}) {
	return (
		<Toast class="border-red-300">
			<div class="flex flex-grow flex-col gap-4 bg-red-600 p-3 text-white">
				<div safe>{message}</div>
			</div>
		</Toast>
	);
};

/** @type {import("@kitajs/html").Component<{message: string, class?: import("clsx").ClassValue, withCloseButton?: boolean}>}*/
export const SuccessMessage = function ({
	message,
	class: className,
	children,
	withCloseButton = false,
	...props
}) {
	return (
		<Toast>
			<div class="flex flex-grow bg-green-600 p-3 text-white">
				{message || children}
			</div>
		</Toast>
	);
};
