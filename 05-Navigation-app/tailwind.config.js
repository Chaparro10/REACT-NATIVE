/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        'noto-black':['NotoSans_Condensed-Black','sans-serif'],
        'noto-light':['NotoSans_Condensed-ExtraLightItalic','sans-serif'],
        'noto-bold':['NotoSans_Condensed-SemiBold','sans-serif'],
      },
      colors:{
        primary:"#49129C",
        secondary:{
          DEAFULT:'#B40086',
          100:'#C51297',
          200:'#831266'
        },
        tertiary:'#EF2967'
      }
    },
  },
  plugins: [],
}

