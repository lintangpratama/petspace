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
        'blue-main': '#429FF2',
        'blue-secondary': 'rgba(66, 159, 242, 0.1)',
        'yellow-pet': '#F4AB5C',
        'search-bg': '#F5F5F5',
        'search-font': '#88888C',
      },
      fontSize: {
        'bar': '.75rem',
      },
      margin: {
        '-0.5': '-2px'
      },
      backgroundImage: {
        'card-status': "url('/status-card/card-bg.png')",
      }
    },
    screens: {
      'md': '350px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
