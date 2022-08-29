const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				pink: {
					100: "#ffd9e0",
					500: "#fe4365",
				}
			},
			fontFamily: {
				sans: ["'Source Sans 3Variable'", ...defaultTheme.fontFamily.sans] 
			},
		},
	},
	plugins: [],
}
