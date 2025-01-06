
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'dance': 'dance 2s infinite ease-in-out', // Define dance animation with 2 seconds duration and infinite loop
      },
      keyframes: {
        dance: {
          '0%, 100%': {
            transform: 'translateY(-5px) rotate(-3deg)',
          },
          '50%': {
            transform: 'translateY(5px) rotate(3deg)',
          },
        },
      },
    },
  },
  plugins: [],
};




