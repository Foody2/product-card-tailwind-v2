module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '675px',
      lg: '976px',
      xl: '1440px',
    },
    
    extend: {
      colors: {
        darkCyan: 'hsl(158, 36%, 37%)',
        darkCyanHover: 'hsl(158, 36%, 27%)',
        cream: 'hsl(30, 38%, 92%)',
        veryDarkBlue: 'hsl(212, 21%, 14%)',
        darkGrayishBlue: 'hsl(228, 12%, 48%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        text: ['Montserrat', 'serif'],
        heading: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}