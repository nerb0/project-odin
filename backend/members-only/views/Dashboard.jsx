import { Layout, loading_dialog_id } from "./components/Layout";

/** @type {PageComponent}*/
export const DashboardPage = function ({ user }) {
	return (
		<Layout>
			<DashboardView user={user} />
		</Layout>
	);
};

/** @type {PageComponent}*/
export const DashboardView = function ({ user }) {
	const dashboard_view_id = "dashboard_view";
	return (
		<div
			class="h-screen min-h-[800px] w-screen bg-amber-100 [view-transition-name:page-fade]"
			id={dashboard_view_id}
		>
			<div class="flex items-center bg-amber-600 py-2 text-white">
				<div class="flex-grow"></div>
				<div class="flex flex-shrink-0 items-center gap-2" hx-boost="true">
					{user ? (
						<button
							hx-indicator={`#${loading_dialog_id}`}
							hx-post="/api/logout"
							hx-swap="outerHTML transition:true"
							hx-target={`#${dashboard_view_id}`}
						>
							Logout
						</button>
					) : (
						<>
							<a
								href="/login"
								hx-swap="outerHTML transition:true"
								hx-target={`#${dashboard_view_id}`}
							>
								Login
							</a>
							<a
								href="/signup"
								hx-swap="outerHTML transition:true"
								hx-target={`#${dashboard_view_id}`}
							>
								Signup
							</a>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
