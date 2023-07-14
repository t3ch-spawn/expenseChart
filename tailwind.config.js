/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans"]
      },
      colors: {
      mainBg: " hsl(27, 66%, 92%)",
      bar: "hsl(10, 79%, 65%)",
      chartCard: "hsl(33, 100%, 98%)",
      barHigh: "hsl(186, 34%, 60%)",
      fontCol: "hsl(25, 47%, 15%)",
      lineCol: "hsl(28, 10%, 53%)",
      },

      screens:{
        'sm': {'max': '350px'},
      }

    },
  },
  plugins: [],
}

