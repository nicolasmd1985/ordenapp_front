/** @type {import('tailwindcss').Config} */
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  "./app.vue"
];
export const theme = {
  extend: {},
};
export const darkMode = "class";
export const plugins = [require("tw-elements/dist/plugin.cjs")];