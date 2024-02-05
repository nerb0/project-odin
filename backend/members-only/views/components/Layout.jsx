import { cn } from "~/helpers/util";
import { app_wrapper_id } from "../Dashboard";
import { safe_handle_onload_text_input } from "./Input";

/** @type {JSXComponent<{ title: string, messages?: JSX.Element[] }>}*/
export const Layout = function Layout({
	class: className,
	title,
	children,
	messages,
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
				<div
					class="fixed bottom-3 left-3 flex flex-col gap-2"
					id={toast_container_id}
				>
					{messages}
				</div>
				<script>{
					/*js*/ `
function remove_toast(toast) {
	if (!toast) return
	if (toast.classList.contains("animate-slide-out")) return;

	toast.classList.remove("animate-slide-in");
	toast.offsetHeight;
	toast.classList.add("animate-slide-out");
	toast.addEventListener("animationend", function(animation_event) {
		toast?.remove();
	});
}
function start_toast_timer(toast) {
	let count = 0;
	const timer = toast.querySelector("[role='toast-timer']")
	const interval = setInterval(() => {
		timer.style.cssText = \`width: \${( ${TOAST_TIMEOUT} - count )/${TOAST_TIMEOUT} * 100}% \`;
		count += 100;
	}, 100);

	setTimeout(() => {
		timer.style.cssText = \`width: 0 \`;
		remove_toast(toast);
		clearInterval(interval);
	}, ${TOAST_TIMEOUT});
}
const toasts = document.querySelectorAll("[role='toast']");
for (const toast of toasts) {
	start_toast_timer(toast);
}
document.addEventListener("htmx:load", function(event) {
	if(event.target.getAttribute("role") === "toast") {
		start_toast_timer(event.target);
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

/** @type {JSXComponent<{ user?: DBUser }>}*/
export const Header = function Header({ user }) {
	return (
		<div class="flex items-center py-2">
			<a
				class="text flex-shrink-0 text-2xl font-bold text-amber-700 transition-transform hover:scale-105"
				href="/app"
				hx-swap="innerHTML"
				hx-target={`#${app_wrapper_id}`}
				hx-boost="true"
			>
				EMBERS
			</a>
			<div class="flex-grow"></div>
			<div class="flex flex-shrink-0 items-center gap-2">
				{user ? (
					<>
						<HeaderButton
							class="bg-red-700"
							hx-indicator={`#${loading_dialog_id}`}
							hx-post="/api/logout"
							hx-swap="outerHTML"
							hx-target={`#${app_wrapper_id}`}
						>
							Logout
						</HeaderButton>
					</>
				) : (
					<>
						<HeaderButton
							hx-get="/login"
							hx-swap="outerHTML"
							hx-target={`#${app_wrapper_id}`}
						>
							Login
						</HeaderButton>
						<HeaderButton
							hx-get="/signup"
							hx-swap="outerHTML"
							hx-target={`#${app_wrapper_id}`}
						>
							Signup
						</HeaderButton>
					</>
				)}
			</div>
		</div>
	);
};

export const HeaderButton = function ({
	class: className,
	children,
	...props
}) {
	return (
		<button
			class={cn(
				"rounded-sm bg-amber-700 px-3 py-2 font-bold text-white transition-all ease-in-out hover:scale-105",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export const app_container_id = "app_container";
export const membership_status_id = "membership_status";
/** @type {JSXComponent<{ title: string, user: DBUser, withUserStatus: boolean }>}*/
export const AppContainer = function AppContainer({
	children,
	user,
	withUserStatus = true,
}) {
	return (
		<>
			{withUserStatus && (
				<>
					{!user && (
						<div class="sticky top-0 w-full bg-amber-700 py-1 text-center text-white">
							You are currently not logged in.
						</div>
					)}
					{user && !user.is_a_member && (
						<div
							class="sticky top-0 w-full bg-amber-700 py-1 text-center text-white"
							id={membership_status_id}
						>
							<span>You are not a member. </span>
							<a
								class="text-orange-300 hover:underline"
								href="/app/join"
								hx-target={`#${app_container_id}`}
								hx-swap="innerHTML"
								hx-boost="true"
							>
								Click here to join.
							</a>
						</div>
					)}
				</>
			)}
			<div class="min-h-screen w-[min(1300px,100%)] px-4 py-2 shadow-md">
				<Header user={user} />
				<div id={app_container_id}>{children}</div>
			</div>
		</>
	);
};

export const user_auth_view_id = "user_auth_view";
export const user_auth_form_wrapper_id = "user_auth_form_wrapper";
export const UserAuthLayout = function UserAuthLayout({
	children,
	class: className,
	...props
}) {
	return (
		<div
			class={cn("h-screen min-h-[800px] w-screen bg-amber-600", className)}
			id={user_auth_view_id}
			{...props}
		>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<div class="text-center">
					<a
						href="/app"
						class="text-8xl font-bold text-white"
						hx-indicator={`#${loading_dialog_id}`}
						hx-target={`#${user_auth_view_id}`}
						hx-swap="outerHTML"
						hx-boost="true"
					>
						EMBERS
					</a>
				</div>
				<div id={user_auth_form_wrapper_id}>{children}</div>
			</div>
			{safe_handle_onload_text_input}
		</div>
	);
};
