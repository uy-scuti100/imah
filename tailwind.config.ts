import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				raleway: ["var(--font-raleway), sans-serif"],
				inconsolata: ["var(--font-inconsolata)", "monospace"],
			},
			colors: {
				ash: "#3D3D3D",
				dark: "#717171",
			},
		},
	},
	plugins: [],
};
export default config;
