/** @type {import { 'tailwindcss' } .Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme : {
      extend: {
          colors:{
              primaryTitle:"#127369",
              primaryContent:"#4C5958",
              primarySubContent:"#8AA6A3",
              primaryBase:"#4C5958",
              primaryAccent:"#10403B",
              primaryBackground:"#BFBFBF",
          }
      }
  },
  plugins:[], 
}