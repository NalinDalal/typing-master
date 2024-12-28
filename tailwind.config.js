module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-100px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideInUp: {
          "0%": { opacity: 0, transform: "translateY(100px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-down": "fadeInDown 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-up": "slideInUp 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
