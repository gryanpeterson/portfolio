/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "github-bg":
        "url('https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg')",
    },
  },
  plugins: [],
};
