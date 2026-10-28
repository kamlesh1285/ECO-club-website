/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0B1F17',
          deep: '#06120E',
          surface: '#133024',
          border: '#1E4736',
          muted: '#2A5C47'
        },
        emerald: {
          DEFAULT: '#16A34A',
          glow: '#10B981',
          soft: '#E8F5E9'
        },
        leaf: {
          DEFAULT: '#2E7D32',
          dark: '#1B5E20',
          light: '#4CAF50'
        },
        lime: {
          DEFAULT: '#B7F34A',
          bright: '#A3E635',
          soft: '#E4F9AF',
          glow: 'rgba(183, 243, 74, 0.35)'
        },
        cream: {
          DEFAULT: '#F6FBF3',
          warm: '#EDF5E8',
          card: '#FFFFFF',
          border: '#E1EFE0'
        },
        earth: {
          DEFAULT: '#8B6B3E',
          soft: '#F4ECE1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft-organic': '0 8px 30px rgba(11, 31, 23, 0.05)',
        'lifted': '0 14px 40px rgba(11, 31, 23, 0.08)',
        'glow-lime': '0 0 25px rgba(183, 243, 74, 0.35)',
        'glow-emerald': '0 0 30px rgba(22, 163, 74, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
