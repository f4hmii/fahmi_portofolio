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
        'neo-yellow': '#FFE600',
        'neo-pink': '#FF007A',
        'neo-cyan': '#00FFFF',
        'neo-black': '#121212',
      },
      boxShadow: {
        'neo-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-md': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '12px 12px 0px 0px rgba(0,0,0,1)',
      },
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        'body': ['var(--chakra-fonts-body)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
