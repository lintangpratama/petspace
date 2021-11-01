module.exports = {
  // font : "@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');",
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      spacing: {
        '100': "28rem",  
      },
      fontFamily: {
        body : 'Inter', 
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
      },
      // Text Collor
      textColor: theme => theme('colors'),
      textColor: {
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'text-form': '#423E3E;',
        'white' :'#ffffff;',
      },
      // Border Collor
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'abu': '#E0F0FD',
       }),
      // Background collor 
      backgroundColor: theme => ({
        ...theme('colors'),
        'blue': '#429FF2',
        'secondary': '#ffed4a',
        'abu': '#FCFEFF;',
       }),
      // Form
      // height form help
      height: {
        sm: '8px',
        md: '52px',
        lg: '60px',
        xl: '48px',
       },
      //  Width form Help
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    },
  },
  variants: {
    extend: {
    
    },
  },
  plugins: [],
};
