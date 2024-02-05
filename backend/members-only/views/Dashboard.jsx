import { cn } from "~/helpers/util";
import { AppContainer, Layout } from "./components/Layout";
import { PostCreateInput, PostListFetcher } from "./components/Post";

/** @type {PageComponent}*/
export const DashboardPage = function ({ messages, children, ...props }) {
	return (
		<Layout messages={messages}>
			<DashboardView {...props} />
			{children}
		</Layout>
	);
};

/** @type {PageComponent}*/
export const DashboardView = function ({ user, class: className, ...props }) {
	return (
		<div
			class={cn(
				"flex min-h-screen w-screen flex-col items-center bg-white",
				className,
			)}
			id={app_wrapper_id}
			{...props}
		>
			<AppContainer user={user}>
				<DashboardContent user={user} />
			</AppContainer>
		</div>
	);
};

/** @type {JSXComponent<{ user: DBUser }>}*/
export const DashboardContent = function DashboardContent({ user, ...props }) {
	return (
		<div class="flex min-h-screen flex-col gap-2">
			{user.is_a_member && (
				<div class="flex flex-col">
					<span class="text-sm">Create Post:</span>
					<PostCreateInput />
				</div>
			)}
			<div class="text-xl font-bold">Posts:</div>
			<PostListFetcher />
		</div>
	);
};

export const app_wrapper_id = "dashboard_view";
