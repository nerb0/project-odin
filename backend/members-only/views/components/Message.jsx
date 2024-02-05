import { cn } from "~/helpers/util";
import { toast_container_id } from "./Layout";

/** @type {import("@kitajs/html").Component<{ withSwap?: boolean }>}*/
export const Toast = function ({
	children,
	class: className,
	withSwap = true,
	props,
}) {
	const ToastWrapper = function ToastWrapper({ children }) {
		return withSwap ? (
			<div hx-swap-oob={`afterbegin:#${toast_container_id}`}>{children}</div>
		) : (
			<>{children}</>
		);
	};
	return (
		<ToastWrapper>
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
		</ToastWrapper>
	);
};

/** @type {import("@kitajs/html").Component<{messages: string[], message: string, class?: import("clsx").ClassValue}>}*/
export const ErrorMessage = function ({
	messages,
	message,
	class: className,
	children,
	...props
}) {
	return (
		<Toast class="border-red-300" {...props}>
			<div
				class={cn(
					"flex flex-grow flex-col gap-2 bg-red-600 p-3 text-white",
					className,
				)}
			>
				{message || children}
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
		<Toast {...props}>
			<div
				class={cn(
					"flex flex-grow flex-col gap-1 bg-green-600 p-3 text-white",
					className,
				)}
			>
				{message || children}
			</div>
		</Toast>
	);
};
