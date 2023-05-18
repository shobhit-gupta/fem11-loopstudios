const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			xs: '375px',
			...defaultTheme.screens
		},
		extend: {
			colors: {
				darkGray: 'hsl(0, 0%, 55%)',
				veryDarkGray: 'hsl(0, 0%, 41%)'
			},
			fontFamily: {
				sans: ['Alata', 'sans-serif'],
				display: ['Josefin Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
