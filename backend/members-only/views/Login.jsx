import { Layout } from "./Layout";

/** @type {import("@kitajs/html").Component<{title: string}>}*/
export const LoginPage = function (props) {
	const login_modal_id = "login_modal";
	return (
		<Layout class="min-h-[800px] bg-amber-600">
			<form hx-post="/api/login" hx-swap={`#${login_modal_id}`}></form>
			<dialog id="login_modal"></dialog>
		</Layout>
	);
};
