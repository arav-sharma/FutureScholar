import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        abc: ["Poppins"],
      },
      colors: {
        'primary': "#2F27CE",
        'secondary': "#DEDCFF",
      },
      extend: {
        boxShadow: {
          custom: '0 0 8px 8px white inset',
        }
      },
    },
  },
  plugins: [],
}
export default config
