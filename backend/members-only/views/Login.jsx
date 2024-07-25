import { TextInput } from "./components/Input";
import {
	Layout,
	UserAuthLayout,
	loading_dialog_id,
	user_auth_view_id,
} from "./components/Layout";

/** @type {import("@kitajs/html").Component}*/
export const LoginPage = function (props) {
	return (
		<Layout class="bg-amber-600">
			<LoginView {...props} />
		</Layout>
	);
};

/** @type {import("@kitajs/html").Component}*/
export const LoginView = function (props) {
	return (
		<UserAuthLayout {...props}>
			<form
				class="flex flex-col gap-8 rounded-md bg-white p-4 pt-7 shadow-lg"
				hx-post="/api/login"
				hx-indicator={`#${loading_dialog_id}`}
				hx-target={`#${user_auth_view_id}`}
				hx-swap="outerHTML"
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
			<div class="text-center text-sm">
				<span>Dont have an account yet? </span>
				<a
					href="/signup"
					class="font-bold text-blue-500 visited:text-blue-700 hover:underline"
					hx-boost="true"
					hx-target={`#${user_auth_view_id}`}
					hx-swap="outerHTML"
				>
					Register
				</a>
			</div>
		</UserAuthLayout>
	);
};
