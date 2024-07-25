import { cn } from "~/helpers/util";

/** @type {import("@kitajs/html").Component<{placeholder: string, class: import("clsx").ClassValue}>}*/
export const TextInput = function ({
	placeholder,
	class: className,
	...props
}) {
	return (
		<label class="relative flex items-center rounded-md border-2 bg-transparent focus-within:border-amber-600">
			<input
				class={cn("peer w-[400px] bg-transparent p-2 outline-none", className)}
				aria-checked="false"
				onchange="this.setAttribute('aria-checked', event.target.value !== '')"
				type="checkbox"
				{...props}
			/>
			<span
				class="pointer-events-none absolute left-3 top-2 text-gray-500 transition-all
					peer-focus:-top-6 peer-focus:left-0 peer-focus:font-bold peer-focus:text-amber-700
					peer-aria-checked:-top-6 peer-aria-checked:left-0 peer-aria-checked:font-bold peer-aria-checked:text-amber-700"
				safe
			>
				{placeholder}
			</span>
		</label>
	);
};

export const safe_handle_onload_text_input = (
	<script>{
		/*js*/ `const event = new Event("change");
const inputs = document.querySelectorAll('input');
for(const input of inputs) {
	input.dispatchEvent(event);
}`
	}</script>
);
