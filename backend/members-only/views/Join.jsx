import { app_wrapper_id } from "./Dashboard";
import { AppContainer, Layout } from "./components/Layout";

/** @type {PageComponent}*/
export const JoinMembershipPage = function ({ messages, ...props }) {
	return (
		<Layout messages={messages}>
			<div class="flex min-h-screen flex-col items-center" id={app_wrapper_id}>
				<AppContainer user={props.user} withUserStatus={false}>
					<JoinMembershipView {...props} />
				</AppContainer>
			</div>
		</Layout>
	);
};

/** @type {PageComponent}*/
export const JoinMembershipView = function ({ user }) {
	return (
		<>
			{!user && (
				<div class="animate-fade-in text-center text-xl font-bold [animation-duration:0.75s]">
					You need to be logged in to join the membership.
				</div>
			)}
			<form hx-post="/api/join" class="flex flex-col gap-2 text-center">
				<input
					disabled={!user}
					name="membership_code"
					type="text"
					placeholder="Membership Code"
					class="animate-slide-down rounded-md border-2 border-gray-500 px-2 py-1 text-center text-2xl font-bold text-black outline-none transition-all [-webkit-text-security:disc]
						focus:border-amber-500 focus:bg-amber-700 focus:text-white focus:[-webkit-text-security:none] focus:placeholder:text-amber-200
						disabled:bg-gray-300"
					aria-checked="false"
				/>
				<div class="text-center">
					<button
						type="submit"
						disabled={!user}
						class="animate-slide-up rounded-md bg-amber-700 px-4 py-1 text-xl font-bold text-white transition-all [animation-duration:0.75s]
							enabled:hover:scale-105 enabled:hover:bg-amber-800 disabled:bg-gray-700"
					>
						Enter Code
					</button>
				</div>
			</form>
		</>
	);
};
