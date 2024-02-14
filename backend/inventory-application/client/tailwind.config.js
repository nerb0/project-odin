/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*", "./index.html"],
	theme: {
		extend: {
			animation: {
				"slide-in": "slide-in 0.5s ease-out",
			},
			keyframes: {
				"slide-in": {
					from: { transform: "translateX(-50px)" },
				},
			},
		},
	},
	plugins: [require("tailwind-gradient-mask-image")],
};
