/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			animation: {
				"slide-right": "fade 0.25s ease-in",
				"dropdown": "dropdown 1s ease-in-out"
			},
			keyframes: {
				dropdown: {
					from: {
						"max-height": "44px",
					},
					to: {
						"max-height": "1000px",
					},
				},
				fade: {
					"0%": {
						opacity: 0,
						transform: "translateX(-50%)",
					},
					"50%": {
						opacity: 0,
					},
					"100%": {
						opacity: 100,
						transform: "translateX(0)",
					},
				},
			},
		},
	},
	plugins: [],
};
