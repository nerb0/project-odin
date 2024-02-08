import { TextInput } from "./components/Input";
import {
	Layout,
	UserAuthLayout,
	loading_dialog_id,
	toast_container_id,
	user_auth_view_id,
} from "./components/Layout";

/** @type {import("@kitajs/html").Component<{title: string}>}*/
export const SignupPage = function (props) {
	return (
		<Layout class="bg-amber-600">
			<SignupView {...props} />
		</Layout>
	);
};

/** @type {import("@kitajs/html").Component}*/
export const SignupView = function (props) {
	return (
		<UserAuthLayout {...props}>
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
				<div class="flex flex-col gap-2">
					<label class="flex w-fit items-center gap-2">
						<input
							type="checkbox"
							class="peer"
							onchange={
								/*js*/ `
const parent = this.closest("div");
const admin_input = parent.querySelector("input[type='text']")
parent.querySelector("[aria-checked]").setAttribute("aria-checked", this.checked ? "true" : "false");
if (!this.checked) admin_input.setAttribute("disabled", "true");
else admin_input.removeAttribute("disabled");
`
							}
						/>
						<span class="select-none">Is Admin</span>
					</label>
					<div
						class="max-h-0 overflow-clip pt-5 transition-[max-height] aria-checked:max-h-16"
						aria-checked="false"
					>
						<TextInput
							type="text"
							class="w-full [-webkit-text-security:disc] focus-within:[-webkit-text-security:none]"
							placeholder="Admin Password"
							name="admin_password"
						/>
					</div>
				</div>

				<button
					class="self-center rounded-md bg-amber-700 px-4 py-1 text-lg font-bold text-white
							transition-all hover:scale-105 hover:bg-amber-800"
				>
					Sign Up
				</button>
			</form>
			<div class="text-center text-sm">
				<span>Already have an account? </span>
				<a
					href="/login"
					class="font-bold text-blue-500 visited:text-blue-700 hover:underline"
					hx-target={`#${user_auth_view_id}`}
					hx-swap="outerHTML"
					hx-boost="true"
				>
					Login
				</a>
			</div>
		</UserAuthLayout>
	);
};
