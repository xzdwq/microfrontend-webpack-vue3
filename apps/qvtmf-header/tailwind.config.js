/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [
    require('@qvtmf/shared/tailwind-config/tailwind.base.js'),
    require('@qvtmf/shared/tailwind-config/tailwind.color.js'),
  ],
  content: ['./src/**/*.{html,vue,ts,js}'],
}
