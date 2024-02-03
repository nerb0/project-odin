/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./views/**/*.jsx", "./routes/**/*.jsx", "./controllers/**/*.jsx"],
	theme: {
		extend: {
			animation: {
				"fade-in": "fade 0.3s ease-in-out",
				"fade-out": "fade 0.3s ease-in-out reverse",
				"slide-from-right": "slide-from-right 0.5s ease-in-out",
				"slide-from-left": "slide-from-left 0.5s ease-in-out",
				"slide-in": "slide 0.5s ease-in-out",
				"slide-out": "slide 0.5s ease-in-out reverse",
			},
			keyframes: {
				slide: {
					from: {
						transform: "translateX(-90px)",
						opacity: 0,
					},
					to: {
						transform: "translateX(0)",
						opacity: 100,
					},
				},
				"slide-from-right": {
					from: {
						transform: "translateX(90px)",
					},
				},
				"slide-to-left": {
					to: {
						transform: "translateX(-90px)",
					},
				},
				fade: {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 100,
					},
				},
			},
		},
	},
};
