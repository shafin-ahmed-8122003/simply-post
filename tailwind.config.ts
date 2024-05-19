import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {},
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                simplyPost: {
                    primary: "#F43F5E",
                    "primary-content": "#E7E5E4",
                    secondary: "#57534E",
                    accent: "#0047ff",
                    neutral: "#0f130a",
                    "base-100": "#E7E5E4",
                    "base-content": "#57534E",
                },
            },
        ],
    },
};
export default config;
