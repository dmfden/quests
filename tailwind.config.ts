import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                orange: {
                    450: '#F2890F',
                },
                neutral: {
                    250: '#E6E6E6',
                    450: '#A6A6A6',
                },
                yellow: {
                    450: '#FEC432',
                },
                darkText: {
                    100: '#270B00',
                    200: '#514321',
                    300: '#535353',
                    400: '#181616',
                },
                darkOverlay: {
                    100: '#1C1B1B66',
                },
            },
            fontFamily: {
                sans: ['var(--font-raleway)'],
            },
            content: {
                personIcon: 'url("/icons/person.svg")',
                puzzleIcon: 'url("/icons/puzzle.svg")',
                clockIconY: 'url("/icons/clockY.svg")',
                personIconY: 'url("/icons/personY.svg")',
                puzzleIconY: 'url("/icons/puzzleY.svg")',
            },
        },
    },
    plugins: [],
};
export default config;

