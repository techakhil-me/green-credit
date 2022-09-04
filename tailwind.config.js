/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { roboto: "Roboto" } },
    colors: {
      gray: {
        "100": "#dbdbdb",
        "200": "#999aab",
        "300": "#8183a8",
        "400": "#343549",
        "500": "#212128",
      },
      green: "#1aad57",
      white: "#fff",
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
    },
    screens: {
      lg: { max: "1200px" },
      md: { max: "768px" },
      sm: { max: "428px" },
    },
  },
  corePlugins: { preflight: false },
};
