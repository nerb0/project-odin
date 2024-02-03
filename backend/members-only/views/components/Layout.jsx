import { cn } from "~/helpers/util";
import "@kitajs/html";

/** @type {import("@kitajs/html").Component<{title: string, class: import("clsx").ClassValue} & Omit<JSX.HtmlTag, "children">>}*/
export const Layout = function ({
	class: className,
	title,
	children,
	...props
}) {
	return (
		<html>
			<head>
				<title safe>{title || "EMBERS"}</title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width initial-scale=1" />
				<link rel="stylesheet" href="/assets/css/style.css" />
				<script src="https://unpkg.com/htmx.org@1.9.10"></script>
			</head>
			<body class={cn("relative", className)} {...props}>
				{children}
				<div
					id={loading_dialog_id}
					class="pointer-events-none fixed left-0 top-0 z-[100] flex h-screen w-screen items-center
						justify-center bg-gray-800/40 opacity-0 [&.htmx-request]:pointer-events-auto [&.htmx-request]:animate-fade-in [&.htmx-request]:opacity-100"
				>
					<div class="animate-pulse rounded-md p-4 text-xl font-bold text-white/70">
						LOADING...
					</div>
				</div>
				<dialog class="bg-transparent" id={error_dialog_id}></dialog>
				<div
					class="fixed bottom-3 left-3 flex flex-col gap-2"
					id={toast_container_id}
				></div>
				<script>{
					/*js*/ `
function remove_toast(toast) {
	if (toast?.classList.contains("animate-slide-out")) return;

	toast?.classList.remove("animate-slide-in");
	toast?.offsetHeight;
	toast?.classList.add("animate-slide-out");
	toast?.addEventListener("animationend", function(animation_event) {
		toast?.remove();
	});
}
document.addEventListener("htmx:load", function(event) {
	if(event.target.getAttribute("role") === "toast") {
		let count = 0;
		const timer = event.target.querySelector("[role='toast-timer']")
		const interval = setInterval(() => {
			timer.style.cssText = \`width: \${( ${TOAST_TIMEOUT} - count )/${TOAST_TIMEOUT} * 100}%; \`
			count += 100;
		}, 100);

		setTimeout(() => {
			remove_toast(event.target);
			clearInterval(interval);
		}, ${TOAST_TIMEOUT});
	}
})`
				}</script>
			</body>
		</html>
	);
};

export const loading_dialog_id = "loading_modal";
export const toast_container_id = "toast_container";
export const error_dialog_id = "error_modal";
export const TOAST_TIMEOUT = 5000;
