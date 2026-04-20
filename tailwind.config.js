/** @type {import('tailwindcss').Confi } */
const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: {
                    DEFAULT: "#F5F0EA",
                    2: "#EDE5D8",
                },
                warm: "#FDFAF7",
                bark: {
                    DEFAULT: "#3A2518",
                    mid: "#5C3D28",
                    light: "#7A5540",
                },
                moss: {
                    DEFAULT: "#3E5235",
                    light: "#607A52",
                    pale: "#C8D8BC",
                },
                gold: {
                    DEFAULT: "#B8861E",
                    mid: "#D4A53A",
                    light: "#E8C97A",
                    pale: "#F5E8C0",
                },
                sand: "#C8A882",
                text: {
                    DEFAULT: "#281A10",
                    mid: "#5A4A3E",
                    muted: "#7A6E67",
                    light: "#A89890",
                },
            },
            fontFamily: {
                serif: ["Cormorant Garamond", "Georgia", "serif"],
                sans: ["DM Sans", "system-ui", "-apple-system", "sans-serif"],
            },
            borderRadius: {
                brand: "3px",
            },
            boxShadow: {
                sm: "0 2px 12px rgba(58,37,24,0.06)",
                md: "0 8px 32px rgba(58,37,24,0.10)",
                lg: "0 20px 60px rgba(58,37,24,0.14)",
                gold: "0 8px 20px rgba(58,37,24,0.22)",
            },
            keyframes: {
                heroZoom: {
                    from: {
                        transform: "scale(1.06)"
                    },
                    to: {
                        transform: "scale(1)"
                    },
                },
                scrollBounce: {
                    "0%, 100%": {
                        transform: "translateX(-50%) translateY(0)"
                    },
                    "50%": {
                        transform: "translateX(-50%) translateY(-7px)"
                    },
                },
            },
            animation: {
                "hero-zoom": "heroZoom 18s ease-out forwards",
                "scroll-bounce": "scrollBounce 2.5s 1.5s ease-in-out infinite",
            },
            screens: {
                xs: "480px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1400px",
            },
        },
    },
    plugins: [],
};

module.exports = config;
