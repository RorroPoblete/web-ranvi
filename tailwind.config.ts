import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#b3d9ff',
          200: '#80bfff',
          300: '#4da6ff',
          400: '#1a8cff',
          500: '#0073e6',
          600: '#005bb3',
          700: '#004480',
          800: '#002d4d',
          900: '#00161a',
        },
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        ink: {
          50: '#f5f5f7',
          100: '#ebebef',
          200: '#d2d2d7',
          300: '#a1a1a6',
          400: '#86868b',
          500: '#6e6e73',
          600: '#424245',
          700: '#1d1d1f',
          800: '#161617',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Segoe UI',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: '600' }],
        display: ['clamp(2.25rem, 4vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '600' }],
        title: ['clamp(1.75rem, 2.5vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        eyebrow: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '500' }],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tightest: '-0.04em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        tile: '0 1px 2px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.06)',
        float: '0 10px 50px -20px rgba(0, 115, 230, 0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
