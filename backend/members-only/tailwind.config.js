/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./views/**/*.jsx", "./routes/**/*.jsx", "./controllers/**/*.jsx"],
	theme: {
		extend: {
			animation: {
				"fade-in": "fade 0.3s ease-in-out",
				"fade-out": "fade 0.3s ease-in-out reverse",
				"slide-left": "slide-from-right 0.5s ease-in-out",
				"slide-right": "slide-from-left 0.5s ease-in-out",
				"slide-down": "slide-from-up 0.5s ease-in-out",
				"slide-up": "slide-from-down 0.5s ease-in-out",
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
				"slide-from-left": {
					from: {
						transform: "translateX(-90px)",
					},
					to: {
						transform: "translateX(0)",
					},
				},
				"slide-from-right": {
					from: {
						transform: "translateX(90px)",
					},
					to: {
						transform: "translateX(0)",
					},
				},
				"slide-from-up": {
					from: {
						opacity: 0,
						transform: "translateY(-90px)",
					},
				},
				"slide-from-down": {
					from: {
						opacity: 0,
						transform: "translateY(90px)",
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
