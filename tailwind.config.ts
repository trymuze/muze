/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f7fafc",
        steelblue: "#4f7396",
        lavender: "#d1dbe8",
        gray: "#0d141c",
        gainsboro: "#e6e8eb",
        aliceblue: "#e8edf2",
        dodgerblue: "#1a80e6",
      },
      spacing: {},
      fontFamily: {
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "3xl": "22px",
      lg: "18px",
      "17xl": "36px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
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
