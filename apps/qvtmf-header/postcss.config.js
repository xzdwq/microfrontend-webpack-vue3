module.exports = {
  plugins: {
    tailwindcss: {},
    'tailwindcss/nesting': {},
    'postcss-nested': {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
