import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#01426A",
          secondary: "#00843D",
          accent: "#6CC24A",
          neutral: "#0057B8",
          base: {
            100: "#FFB500",
          },
          info: "#CEB888",
          success: "#15803d",
          warning: "#fde047",
          error: "#be123c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
