module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '100': "28rem",
      },
      maxWidth: {
        'bar': "168px",
      },
      minWidth: {
        'bar': "80px",
      },
      colors: {
        'bar': '#B9BCBE',
        'cyan-main': '#63C6CD',
        'cyan-secondary': '#47B0B8' ,
        'search-bg': '#F5F5F5',
        'search-font': '#88888C',
      },
      fontSize: {
        'bar': '.75rem',
      },
      margin: {
        '-0.5': '-2px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
