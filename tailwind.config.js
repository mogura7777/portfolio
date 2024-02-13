/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  darkMode: "class", //ダークモードを有効化する
  theme: {
    extend: {
      colors: {
        darkgrey: "#222831", //darkModeで使用したい色を拡張定義
      },
      // 追加
      fontFamily: {
        logo: ["Gloria Hallelujah", "cursive"],
      },
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
