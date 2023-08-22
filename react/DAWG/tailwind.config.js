/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		extend: {
			animation: {
				"slide-down": "slideDown 0.5s ease-in-out",
				"fade-out": "fadeOut 0.5s linear",
				"slide-left": "slideLeft 0.5s ease-in-out",
			},
			keyframes: {
				slideLeft: {
					from: {
						transform: "translateX(100%)",
					},
					to: {
						transform: "translateX(0)",
					}
				},
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
