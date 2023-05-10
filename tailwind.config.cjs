/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				mono: ["Iosevka", ...defaultTheme.fontFamily.mono]
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@catppuccin/tailwindcss")({
			prefix: false,
			defaultFlavour: "mocha",
		}),
	],
}
