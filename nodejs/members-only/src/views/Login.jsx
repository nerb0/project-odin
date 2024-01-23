/** @type {import("hono/jsx").FC} */
export const LoginPage = function LoginPage() {
	return (
		<div class="flex items-center justify-center gap-3 w-screen h-screen min-h-[800px] bg-gradient-to-r from-green-800 via-green-800 to-green-900">
			<script>{
				/*js*/ `
const inputs = document.querySelectorAll('input');
const change_event = new Event("change");
for (const input of inputs) {
	input.dispatchEvent(change_event)
}`
			}</script>
			<form class="bg-white rounded-md shadow-lg p-4">
				<label class="items-center p-2 relative rounded-md border-gray-300 border-2 focus-within:border-green-800">
					<input
						class="peer outline-none"
						aria-changed="false"
						name="username"
						type="text"
						required
						onchange="this.setAttribute('aria-changed', this.value !== '');"
					/>
					<span class="peer-aria-[changed]:-top-4 absolute peer-aria-[changed]:font-bold left-6">
						Username
					</span>
				</label>
			</form>
		</div>
	);
};
