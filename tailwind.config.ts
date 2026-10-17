import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-vazirmatn)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        canvas: {
          DEFAULT: 'var(--bg-canvas)',
          elevated: 'var(--bg-surface-elevated)',
        },
        cyber: {
          blue: '#00F0FF',
          sky: '#0EA5E9',
          emerald: '#00FF9D',
          teal: '#10B981',
          navy: '#070B14',
          slate: '#0D1321',
        },
      },
      boxShadow: {
        'glass-sm': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 8px 20px -6px rgba(0, 0, 0, 0.5)',
        'glass-lg': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15), 0 24px 48px -12px rgba(0, 0, 0, 0.7)',
        'neon-blue': '0 0 20px -4px rgba(0, 240, 255, 0.35), inset 0 0 12px -4px rgba(0, 240, 255, 0.2)',
        'neon-emerald': '0 0 20px -4px rgba(16, 185, 129, 0.35), inset 0 0 12px -4px rgba(16, 185, 129, 0.2)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'cyber-grid': 'radial-gradient(circle at 1px 1px, rgba(0, 240, 255, 0.12) 1px, transparent 0)',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
    },
  },
  plugins: [],
};
export default config;
