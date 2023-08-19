/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		extend: {
			animation: {
				"slide-down": "slideDown 0.5s ease-in-out",
				"fade-out": "fadeOut 0.5s linear",
			},
			keyframes: {
				fadeOut: {
					from: {
						opacity: 1,
					},
					to: {
						opacity: 0,
					},
				},
				slideDown: {
					from: {
						transform: "translateY(-100%)",
					},
					to: {
						transform: "translateY(0)",
					},
				},
			},
		},
	},
	plugins: [],
};
