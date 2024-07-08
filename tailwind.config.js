/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          "100": "#868686",
          "200": "#1e1e1e",
          "300": "rgba(0, 0, 0, 0.8)",
        },
        darkslategray: {
          "100": "#464646",
          "200": "#00554b",
        },
        white: "#fff",
        teal: "#03796a",
        dimgray: "#666",
        blueviolet: "#9945ff",
        "zinc-50": "#fafafa",
        aquamarine: "#6dffdc",
        springgreen: "#6dff8a",
        salmon: "#ff6d6d",
        royalblue: "#3980ff",
        tomato: "#ff5454",
        darkorchid: {
          "100": "#b35eff",
          "200": "rgba(179, 94, 255, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "6xl": "25px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      xl: "20px",
      "31xl": "50px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
