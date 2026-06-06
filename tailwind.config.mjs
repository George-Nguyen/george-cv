/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#002444',
        'primary-container': '#1a3a5c',
        'on-primary': '#ffffff',
        secondary: '#b02d21',
        'secondary-container': '#fc6451',
        background: '#fcf9f8',
        surface: '#fcf9f8',
        'surface-container-low': '#f6f3f2',
        'surface-container': '#f0eded',
        'surface-container-high': '#eae7e7',
        'on-surface': '#1b1c1c',
        'on-surface-variant': '#43474e',
        outline: '#73777f',
        'outline-variant': '#c3c6cf',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['36px', { lineHeight: '42px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-sm': ['24px', { lineHeight: '32px', letterSpacing: '0', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', letterSpacing: '0', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', letterSpacing: '0', fontWeight: '400' }],
        'label-caps': ['12px', { lineHeight: '16px', letterSpacing: '0.1em', fontWeight: '700' }],
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        full: '9999px',
      },
      maxWidth: {
        content: '1140px',
      },
      spacing: {
        section: '120px',
        'section-mobile': '64px',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
};
