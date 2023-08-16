/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		extend: {
			animation: {
				"score-jump": "score-jump 0.5s ease-in",
			},
			keyframes: {
				"score-jump": {
					"0%": {
						transform: "translateY(-10px)",
					},
					"20%": {
						transform: "translateY(0)",
					},
					"30%": {
						transform: "translateY(-8px)",
					},
					"50%": {
						transform: "translateY(0)",
					},
					"60%": {
						transform: "translateY(-5px)",
					},
					"80%": {
						transform: "translateY(0)",
					},
					"90%": {
						transform: "translateY(-3px)",
					},
					"100%": {
						transform: "translateY(0)",
					},
				},
			},
		},
	},
	plugins: [],
};
