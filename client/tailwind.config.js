/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1166px",
      "2xl": "1166px",
    },
    fontFamily: {
      sans: ["Helvetica"],
    },
    extend: {},
  },
  plugins: [],
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
};
