import { Layout, loading_dialog_id } from "./components/Layout";
import { TextInput, safe_handle_onload_text_input } from "./components/Input";

/** @type {import("@kitajs/html").Component}*/
export const LoginPage = function (props) {
	return (
		<Layout>
			<LoginView />
		</Layout>
	);
};

/** @type {import("@kitajs/html").Component}*/
export const LoginView = function (props) {
	const login_view_id = "login_view";
	return (
		<div
			class="h-screen min-h-[800px] w-screen bg-amber-600 [view-transition-name:page-fade]"
			id={login_view_id}
		>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4 [view-transition-name:session]">
				<div class="text-center">
					<a
						class="text-8xl font-bold text-white"
						href="/app"
						hx-indicator={`#${loading_dialog_id}`}
						hx-target={`#${login_view_id}`}
						hx-swap="outerHTML transition:true"
						hx-boost="true"
					>
						EMBERS
					</a>
				</div>
				<form
					class="flex flex-col gap-8 rounded-md bg-white p-4 pt-7 shadow-lg"
					hx-post="/api/login"
					hx-indicator={`#${loading_dialog_id}`}
					hx-target={`#${login_view_id}`}
					hx-swap="outerHTML transition:true"
				>
					<TextInput placeholder="Username" type="text" name="username" />
					<TextInput placeholder="Password" type="password" name="password" />
					<button
						class="self-center rounded-md bg-amber-700 px-4 py-1 text-lg font-bold text-white
							transition-all hover:scale-105 hover:bg-amber-800"
					>
						Submit
					</button>
				</form>
				<div class="text-sm">
					<span>Dont have an account yet? </span>
					<a
						href="/signup"
						class="font-bold text-blue-500 visited:text-blue-700 hover:underline"
					>
						Register
					</a>
				</div>
			</div>
			{safe_handle_onload_text_input}
		</div>
	);
};
