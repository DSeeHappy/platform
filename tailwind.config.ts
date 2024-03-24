import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-white': '#F7F8F8',
                'brand-light-gray': "#8190A3",
                'brand-gray': "#747375",
                'brand-dark-gray': "#1F2937",
                'brand-black': "#111827",
                'brand-dark-blue': '#00152E',
                'brand-blue': "#2E4785",
                'brand-light-blue': "#87ABC4",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
