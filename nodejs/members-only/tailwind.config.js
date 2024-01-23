/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.jsx"],
	theme: {
		extend: {
			animation: {
				["slide-down"]: "slide-down 1s cubic-bezier(.6,-0.28,.74,.05)",
			},
			keyframes: {
				["slide-down"]: {
					"0%": {
						opacity: 0,
						transform: "translateY(-100%)",
					},
					"60%": {
						opacity: 0.8,
						transform: "translateY(10%)",
					},
					"80%": {
						opacity: 0.9,
						transform: "translateY(-5%)",
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0)",
					},
				},
			},
		},
	},
};
