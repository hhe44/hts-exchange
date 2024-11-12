/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1e40af",
          secondary: "#facc15",
          accent: "#ffffff",
          neutral: "#ff00ff",
          "base-100": "#1f2937",
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#facc15",
          error: "#dc2626",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
