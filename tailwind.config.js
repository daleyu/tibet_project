/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Outfit", "sans-serif"],
      sans: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
});
