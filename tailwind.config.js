module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        100: "28rem",
      },
      maxWidth: {
        bar: "168px",
      },
      minWidth: {
        bar: "80px",
      },
      colors: {
        bar: "#B9BCBE",
        "blue-main": "#429FF2",
        "blue-secondary": "rgba(66, 159, 242, 0.1)",
        "blue-secondary-hover": "rgba(66, 159, 242, 0.3)",
        "blue-space-detail": "#3b8fd8",
        "yellow-pet": "#F4AB5C",
        "yellow-pet-hover": "#E79339",
        "search-bg": "#F5F5F5",
        "search-font": "#88888C",
        "whatsapp": "#25D366",
        "whatsapp-hover": "#128C7E",
      },
      fontSize: {
        bar: ".75rem",
      },
      margin: {
        "-0.5": "-2px",
      },
      // Text Collor
      textColor: {
        primary: "#3490dc",
        "text-form": "#423E3E;",
      },
      // Background collor
      backgroundColor: {
        background: "#E0F0FD",
        blue: "#429FF2",
        "gray-background": "#FCFEFF;",
      },
      backgroundImage: {
        "card-status": "url('/status-card/card-bg.png')",
      },
      fontFamily: {
        main: ["Poppins"],
        secondary: ["Inter"],
      },
    },
    screens: {
      md: "350px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
