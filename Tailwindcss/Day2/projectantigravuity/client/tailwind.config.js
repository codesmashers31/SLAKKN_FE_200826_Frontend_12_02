/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#050816",
          dark: "#03050c",
          secondary: "#0B1020",
          card: "#11172A",
          cardHover: "#161F38"
        },
        openai: {
          DEFAULT: "#10b981",
          light: "#34d399",
          dark: "#059669",
          glow: "rgba(16, 185, 129, 0.3)"
        },
        anthropic: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
          glow: "rgba(245, 158, 11, 0.3)"
        },
        gemini: {
          DEFAULT: "#8b5cf6",
          blue: "#3b82f6",
          purple: "#9333ea",
          glow: "rgba(139, 92, 246, 0.3)"
        },
        future2030: {
          cyan: "#06b6d4",
          violet: "#a855f7",
          pink: "#ec4899",
          glow: "rgba(6, 182, 212, 0.3)"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.35)',
        'glow-violet': '0 0 25px rgba(168, 85, 247, 0.35)',
        'glow-openai': '0 0 25px rgba(16, 185, 129, 0.35)',
        'glow-anthropic': '0 0 25px rgba(245, 158, 11, 0.35)',
        'glow-gemini': '0 0 25px rgba(139, 92, 246, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
