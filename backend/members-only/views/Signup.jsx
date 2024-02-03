import {
	Layout,
	loading_dialog_id,
	toast_container_id,
} from "./components/Layout";
import { TextInput, safe_handle_onload_text_input } from "./components/Input";

/** @type {import("@kitajs/html").Component<{title: string}>}*/
export const SignupPage = function (props) {
	return (
		<Layout class="min-h-[800px] bg-amber-600">
			<SignupView />
			{safe_handle_onload_text_input}
		</Layout>
	);
};

export const SignupView = function (props) {
	const signup_view_id = "signup_view";
	return (
		<div
			class="flex h-screen min-h-[800px] w-screen flex-col items-center justify-center gap-4 [view-transition-name:session]"
			id={signup_view_id}
		>
			<div class="text-center">
				<div class="text-8xl font-bold text-white">EMBERS</div>
			</div>
			<form
				class="flex flex-col gap-8 rounded-md bg-white p-4 pt-7 shadow-lg"
				hx-indicator={`#${loading_dialog_id}`}
				hx-post="/api/signup"
				hx-target={`#${toast_container_id}`}
				hx-swap="beforeend "
			>
				<div class="flex gap-4">
					<TextInput
						class="w-auto"
						placeholder="First Name"
						type="text"
						name="first_name"
					/>
					<TextInput
						class="w-auto"
						placeholder="Last Name"
						type="text"
						name="last_name"
					/>
				</div>
				<TextInput
					class="w-auto flex-grow"
					placeholder="Username"
					type="text"
					name="username"
				/>
				<TextInput
					class="w-auto flex-grow"
					placeholder="Password"
					type="password"
					name="password"
				/>
				<TextInput
					class="w-auto flex-grow"
					placeholder="Confirm Password"
					type="password"
					name="confirm_password"
				/>

				<button
					class="self-center rounded-md bg-amber-700 px-4 py-1 text-lg font-bold text-white
							transition-all hover:scale-105 hover:bg-amber-800"
				>
					Sign Up
				</button>
			</form>
			<div class="text-sm">
				<span>Already have an account? </span>
				<a
					href="/login"
					class="font-bold text-blue-500 visited:text-blue-700 hover:underline"
				>
					Login
				</a>
			</div>
		</div>
	);
};
