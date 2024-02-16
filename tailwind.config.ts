import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'my-bg':
          'linear-gradient(359.58deg,#002133 .39%,rgba(0,33,51,0) 51.47%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'regular-bg': 'url(/regular-items-bg.png)',
      },
      fontFamily: {
        Jost: ['Jost'],
        Cormorant: ['Cormorant Infant'],
      },
    },
  },
  plugins: [],
};
export default config;
